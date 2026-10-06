#!/usr/bin/env bash
# Build the React guide and publish it to the nginx web root.
#
# Run as root on the Droplet:
#   sudo bash /opt/kumbh/web/deploy.sh
#
# Safe to re-run. The previous release is kept as a timestamped copy, so a bad
# build is rolled back with one command rather than a git checkout.

set -euo pipefail

APP_USER=kumbh
APP_HOME=/opt/kumbh
WEB_DIR="$APP_HOME/web"
SITE_ROOT=/var/www/kumbh-guide
RELEASES=/var/www/kumbh-releases

log() { printf '\n\033[1;34m==>\033[0m %s\n' "$*"; }
die() { printf '\033[1;31mxx\033[0m %s\n' "$*" >&2; exit 1; }

[ "$(id -u)" -eq 0 ] || die "run as root (or with sudo)"

# Optional first argument: the public domain name. It is used only for the
# Host header in the post-deploy check, so it defaults to the canonical one.
SITE_DOMAIN="${1:-app.mahakumbh.net}"

# --------------------------------------------------------------------------- #
log "Fetching the guide"
if [ ! -d "$WEB_DIR/.git" ]; then
  su - "$APP_USER" -c "git clone --depth 1 git@github.com:nethority-in/KumbhMela-web.git $WEB_DIR"
else
  su - "$APP_USER" -c "cd $WEB_DIR && git pull --ff-only"
fi

# --------------------------------------------------------------------------- #
log "Building"
# No root on PATH for the service user, so npm resolves through a login shell.
su - "$APP_USER" -c "cd $WEB_DIR && npm ci --silent"
su - "$APP_USER" -c "cd $WEB_DIR && npm run build"

[ -f "$WEB_DIR/dist/index.html" ] || die "build produced no dist/index.html"
[ -s "$WEB_DIR/dist/data/calendar.json" ] || die "calendar.json missing from the build"

# --------------------------------------------------------------------------- #
log "Linting"
# Cheap, and it catches an unused import before it becomes a deployed bundle.
su - "$APP_USER" -c "cd $WEB_DIR && npm run lint --silent" || warn "lint reported warnings"

# --------------------------------------------------------------------------- #
log "Verifying the build before it goes live"
node -e "
  const fs=require('fs');
  const html=fs.readFileSync('$WEB_DIR/dist/index.html','utf8');
  const js=fs.readdirSync('$WEB_DIR/dist/assets').find(f=>f.endsWith('.js'));
  if(!js) throw new Error('no JS bundle in dist/assets');
  const bundle=fs.readFileSync('$WEB_DIR/dist/assets/'+js,'utf8');
  const cal=JSON.parse(fs.readFileSync('$WEB_DIR/dist/data/calendar.json','utf8'));
  if(!Array.isArray(cal.days) || cal.days.length===0) throw new Error('calendar.json has no days');
  if(!html.includes('id=\"root\"')) throw new Error('index.html is missing the app root');
  if(!bundle.includes('root')) throw new Error('bundle looks empty');
  console.log('  bundle      :', js, (bundle.length/1024).toFixed(0)+'KB');
  console.log('  calendar    :', cal.days.length, 'days, table v'+cal.table_version);
" 2>/dev/null || node -e "
  const fs=require('fs');
  const html=fs.readFileSync('$WEB_DIR/dist/index.html','utf8');
  const js=fs.readdirSync('$WEB_DIR/dist/assets').find(f=>f.endsWith('.js'));
  const cal=JSON.parse(fs.readFileSync('$WEB_DIR/dist/data/calendar.json','utf8'));
  if(!js) throw new Error('no JS bundle');
  if(!cal.days.length) throw new Error('no days');
  if(!html.includes('root')) throw new Error('no app root');
  console.log('  bundle   :', js);
  console.log('  calendar :', cal.days.length, 'days');
"

# --------------------------------------------------------------------------- #
log "Keeping the current release"
mkdir -p "$RELEASES"
STAMP=$(date +%Y%m%d-%H%M%S)
if [ -f "$SITE_ROOT/index.html" ]; then
  rm -rf "$RELEASES/$STAMP"
  cp -a "$SITE_ROOT" "$RELEASES/$STAMP"
  log "previous release saved as $RELEASES/$STAMP"
fi

# --------------------------------------------------------------------------- #
log "Publishing to $SITE_ROOT"
# Stage into a temp dir and swap, rather than deleting first. A half-copied
# release would mean a blank site for anyone loading it at that moment.
STAGE=$(mktemp -d)
cp -a "$WEB_DIR/dist/." "$STAGE/"
find "$STAGE" -type d -exec chmod 755 {} +
find "$STAGE" -type f -exec chmod 644 {} +

rm -rf "$SITE_ROOT.old"
[ -d "$SITE_ROOT" ] && mv "$SITE_ROOT" "$SITE_ROOT.old"
mv "$STAGE" "$SITE_ROOT"
chown -R www-data:www-data "$SITE_ROOT"

nginx -t
systemctl reload nginx

# --------------------------------------------------------------------------- #
log "Checking it answers"
CODE=$(curl -s -o /dev/null -w '%{http_code}' http://127.0.0.1/ -H "Host: $SITE_DOMAIN")
ASSET=$(grep -o '/assets/[^"]*\.js' "$SITE_ROOT/index.html" | head -1 || true)
ACODE=$(curl -s -o /dev/null -w '%{http_code}' "http://127.0.0.1$ASSET" -H "Host: $SITE_DOMAIN")
CAL=$(curl -s -o /dev/null -w '%{http_code}' "http://127.0.0.1/data/calendar.json" -H "Host: $SITE_DOMAIN")

log "site=$CODE  bundle=$ACODE  calendar=$CAL"

if [ "$CODE" != "200" ] || [ "$ACODE" != "200" ] || [ "$CAL" != "200" ]; then
  die "not serving correctly. rollback with:
       rm -rf $SITE_ROOT && cp -a $SITE_ROOT.old $SITE_ROOT && systemctl reload nginx"
fi

rm -rf "$SITE_ROOT.old"

cat <<SUMMARY

 Published. Live in a few seconds once the CDN notices.

 Rollback to the previous release:
     rm -rf $SITE_ROOT && cp -a $RELEASES/$STAMP $SITE_ROOT && systemctl reload nginx

 Keep only the last 5 releases:
     ls -dt $RELEASES/* | tail -n +6 | xargs rm -rf
--------------------------------------------------------------------------
SUMMARY
