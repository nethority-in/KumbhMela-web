# ---- build ----
FROM node:22-slim AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --silent

COPY index.html vite.config.js ./
COPY src ./src
COPY public ./public

RUN npm run build

# ---- serve ----
# Assets are content-hashed at build time, so the runtime image must be given the
# build output rather than guessing filenames.
FROM nginxinc/nginx-unprivileged

# PORT is supplied by the PaaS. 8080 matches the common default; the template is
# rendered at container start.
ENV PORT=8080

COPY --from=build /app/dist/index.html /usr/share/nginx/html/index.html
COPY --from=build /app/dist/assets /usr/share/nginx/html/assets
COPY --from=build /app/dist/data /usr/share/nginx/html/data
COPY --from=build /app/dist/favicon.svg /usr/share/nginx/html/favicon.svg

# envsubst renders this into conf.d at startup, so $PORT above is substituted.
# nginx variables such as $uri are left alone, since they are not environment vars.
COPY nginx.conf.template /etc/nginx/templates/default.conf.template
