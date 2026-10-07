/**
 * Copy in English, Hindi and Marathi.
 *
 * Two project rules are enforced here rather than in review:
 *   - no exclamation marks anywhere
 *   - no "safe" / "unsafe", and no "avoid this day"
 * The wording deliberately offers trade-offs instead of recommendations.
 */

export const en = {
  meta: {
    title: "Simhastha Kumbh Mela 2027 · Nashik & Trimbakeshwar",
    description:
      'An independent guide to the 2027 Nashik–Trimbakeshwar Simhastha Kumbh Mela: every auspicious bathing day, estimated crowd levels, the two sacred waters, and how to plan your visit.',
  },
  nav: {
    home: "Guide",
    days: "Every day",
    choose: "Choose a day",
    waters: "Two waters",
    practical: "Before you go",
    methodology: "How we estimate",
    stats: "Bot stats",
    lang: "Language",
  },
  hero: {
    eyebrow: "Simhastha Kumbh Mela · Nashik & Trimbakeshwar · 2027",
    line1: "Once in twelve years,",
    line2: "the river remembers.",
    intro:
      "Not three dates. Every auspicious day the panchang gives us, each with a transparent, labelled crowd estimate so you can choose the day that suits you.",
    cta: "See all the days",
    ctaSecondary: "Plan your visit",
    independent: "Independent guide. Not affiliated with any government or religious body.",
  },
  countdown: {
    label: "Next royal bathing day",
    passed: "The season has passed",
    passedNote: "The waters have received them. Until Jupiter turns again.",
    days: "days",
    hours: "hours",
    minutes: "minutes",
    seconds: "seconds",
  },
  keyDates: {
    kicker: "Key dates",
    title: "The shape of the gathering",
    intro:
      "Every date here is expected and may shift. Confirm each closer to the event with local authorities and the organising committee.",
    opening: "Opening",
    openingNote: "Flag-hoisting. The akhara banners rise and the long mela formally begins.",
    first: "First royal bath",
    firstNote: "The first Amrit Snan. Akharas process to the water before dawn.",
    second: "Second royal bath",
    secondNote: "Often the principal bathing day, and typically the most crowded.",
    third: "Third royal bath",
    thirdNote: "The final great bath of the principal season.",
    conclusion: "Conclusion",
    conclusionNote:
      "Flag-lowering. The waters settle; the gathering disperses for another twelve years.",
    expected: "Expected · confirm closer",
    crowd: "crowd",
  },
  days: {
    kicker: "Every auspicious day",
    title: "Not three days. Every one of them.",
    intro:
      "Generated, not hand-written. Every tithi comes from a Swiss Ephemeris computation and every crowd band from published rules you can inspect. Three days are royal baths; the rest are ordinary, equally sacred, and far quieter.",
    loading: "Loading the calendar…",
    error: "The generated calendar could not be loaded. The summary dates above still apply.",
    count: "showing",
    of: "of",
    days: "days",
    search: "Search a date",
    searchPlaceholder: "for example 2 August, or Ekadashi",
    filterBand: "Any crowd level",
    filterKind: "Any day type",
    all: "All",
    noResults: "No day matches that. Try clearing the filters.",
    clear: "Clear filters",
    howCalculated: "How this was calculated",
    panchang: "Panchang",
    royalBath: "Royal bath",
    majorBathing: "Major bathing day",
    auspicious: "Auspicious day",
  },
  bands: {
    very_high: "Very High",
    high: "High",
    moderate: "Moderate",
    lower: "Lower",
  },
  estimate: {
    word: "Estimated",
    marker: "estimate",
    note: "Crowd estimate only, from published rules rather than measured attendance.",
  },
  choose: {
    kicker: "Which day should you go?",
    title: "Choose what you seek",
    intro:
      "The three royal baths carry the processions and the largest crowds. The long stretches between them are quieter and no less sacred. Neither is better; they suit different journeys.",
    procession: "The akhara procession",
    quiet: "Stillness, fewer crowds",
    ritual: "A quiet ritual bath",
    showAll: "Show all days",
    result: (n) => `${n} day${n === 1 ? "" : "s"} match what you are looking for`,
    none: "Every day, shown.",
  },
  waters: {
    kicker: "Two waters, one river",
    title: "The bathing is shared between two sacred kunds",
    intro:
      "Unlike other Kumbh sites, here the holy bath is held in two places: the Godavari at Nashik, and the river's own source at Trimbakeshwar, about thirty kilometres west.",
    nashik: "Nashik",
    nashikWhere: "Ram Kund · on the Godavari",
    nashikLine: "In the heart of the city, where the river gathers.",
    nashikWater: "Ram Kund, long tied to the memory of Lord Ram",
    trimbak: "Trimbakeshwar",
    trimbakWhere: "Kushavarta Kund · the river's source",
    trimbakLine: "Where the Godavari is born, beside a Jyotirlinga.",
    trimbakWater: "Kushavarta Kund, the symbolic source of the Godavari",
    distance: "Distance",
    nashikDist: "Nashik city centre, Panchavati",
    trimbakDist: "About 30 km west of Nashik",
    water: "The water",
    caution: "A note on the orders",
    cautionText:
      "The pairing above, Shaiva at Trimbakeshwar and Vaishnava at Nashik, is the commonly recorded arrangement. Accounts differ in their detail, and arrangements can change from one mela to the next. Treat this as background and confirm the current plan with local authorities before you travel.",
  },
  practical: {
    kicker: "Before you go",
    title: "Travel gently. Travel prepared.",
    rail: "Rail",
    railText:
      "Nashik Road station, about 8 km from the old city, on the Mumbai–Bhusawal line. Expect special trains and very heavy demand around the bathing days. Book early.",
    road: "Road",
    roadText:
      "By bus or car from Mumbai, around 165 km, or Pune, around 210 km. Roads near the ghats close to traffic on peak days. Park on the outskirts and walk in.",
    air: "Air",
    airText:
      "Nearest airports are Nashik (Ozar) with limited flights, and Mumbai, around 170 km, for wider connections. Then onward by train or road.",
    crowdTitle: "Where crowds gather",
    crowdText:
      "The densest crowds form at Ram Kund in Nashik and Kushavarta Kund in Trimbakeshwar on the three royal bathing days. Approach roads begin to fill many hours before dawn.",
    calmTitle: "If you want calm",
    calmText:
      "The long stretches between the peaks are far easier, and just as meaningful. The mela runs for the better part of a year. An ordinary morning on the ghats is quiet, the queues short, and the river unhurried.",
    safetyTitle: "In a crowd",
    safety: [
      "Agree a meeting point and a time before you set out. Phone networks falter when millions gather in one place.",
      "If you travel with elders or children, carry a written card with a contact number.",
      "Move with the flow, never against it. Follow marshals, barriers, and the marked bathing slots.",
      "Note the nearest first-aid and lost-persons points when you arrive.",
    ],
    carryTitle: "What to carry",
    carry: [
      "Water", "Light food", "A hat", "Basic medicines", "A small torch",
      "Cash in small notes", "Dry clothes in a waterproof bag",
      "Footwear you can slip off", "A power bank", "ID",
    ],
  },
  methodology: {
    kicker: "How we estimate crowds",
    title: "These are estimates, not predictions",
    intro:
      "We have no way to know the true crowd on a day that has not happened yet. What we have is a set of transparent rules, each based on a sensible reason, that add up to a rough score. We show that score as one of four bands so you can weigh your options. On the day itself, always follow the police and the administration.",
    bandsTitle: "The four bands",
    bands: [
      { band: "very_high", range: "75–100", meaning: "Among the busiest days. Heaviest management, longest waits." },
      { band: "high", range: "55–74", meaning: "A large crowd expected." },
      { band: "moderate", range: "35–54", meaning: "A meaningful but more manageable crowd." },
      { band: "lower", range: "0–34", meaning: "Among the quieter auspicious days." },
    ],
    weightsTitle: "How a day's score is built",
    weights: [
      { name: "Religious rank", why: "A royal bath starts highest. It is the single biggest factor." },
      { name: "Day of the week", why: "Weekends draw more people; Friday a little." },
      { name: "Public holidays", why: "A holiday on the day frees more people to travel." },
      { name: "Major festivals", why: "A big festival on or near the day compounds the crowd." },
      { name: "Nearness to a royal bath", why: "Days just before and after inherit the spillover." },
      { name: "Monsoon", why: "Heavy-rain weeks slightly lower discretionary turnout. Small and uncertain." },
      { name: "Travel from big cities", why: "Nashik is a weekend trip from Mumbai and Pune, so weekends get a bump." },
    ],
    honestTitle: "The limits of this model",
    honest: [
      "There is no 2027 ground truth to fit against, so the weights are judgement, not a fitted result. We chose transparency over false precision.",
      "The monsoon effect's sign and size are uncertain. Heavy rain may reduce crowd size but raise on-ground risk. We model crowd size only, and lightly.",
      "Estimates can be wrong. Every change is logged with its reason.",
      "We never phrase any of this as advice to skip a day. Every day is shown with its trade-offs so you can choose the one that fits you.",
    ],
    sourceTitle: "Where the numbers come from",
    source:
      "Religious ranks and festival dates are computed from the panchang using Swiss Ephemeris with the Lahiri (Chitrapaksha) ayanamsa, the Government of India Rashtriya Panchang standard. Public holidays are gazetted dates. No date on this site is ever produced by a language model.",
  },
  closing: {
    line: "Millions will come, and each will stand alone with the Godavari.",
    disclaimer:
      "Independent informational guide. Verify all dates and arrangements with local authorities before travel.",
    fineprint:
      "All dates and figures are approximate and may change. This site is not affiliated with any government body, religious organisation, or the festival's organising committee.",
    blessing: "Once in twelve years, the water remembers.",
  },
  footer: {
    about:
      "An independent visitor guide to the Nashik–Trimbakeshwar Simhastha Kumbh Mela 2027. Built for quiet, careful planning.",
    verify: "Verify everything before you travel.",
    methodNote: "Crowd figures are estimates, never a measure of safety.",
  },
  common: {
    skip: "Skip to content",
    loading: "Loading",
    error: "Something went wrong",
    retry: "Try again",
  },
};

export const hi = {
  meta: {
    title: "सिंहस्थ कुंभ मेला 2027 · नाशिक और त्रिम्बकेश्वर",
    description:
      "2027 के नाशिक-त्रिम्बकेश्वर सिंहस्थ कुंभ मेले की स्वतंत्र जानकारी: शुभ स्नान के सभी दिन, अनुमानित भीड़, दो पवित्र जल, और यात्रा की तैयारी।",
  },
  nav: {
    home: "मार्गदर्शिका",
    days: "सभी दिन",
    choose: "दिन चुनें",
    waters: "दो जल",
    practical: "यात्रा से पहले",
    methodology: "अनुमान कैसे",
    stats: "बॉट आंकड़े",
    lang: "भाषा",
  },
  hero: {
    eyebrow: "सिंहस्थ कुंभ मेला · नाशिक और त्रिम्बकेश्वर · 2027",
    line1: "बारह वर्ष में एक बार,",
    line2: "नदी याद रखती है।",
    intro:
      "सिर्फ तीन तारीखें नहीं। पंचांग जो भी शुभ दिन देता है, वो सब, और हर दिन के साथ पारदर्शी अनुमानित भीड़, ताकि आप अपने हिसाब का दिन चुन सकें।",
    cta: "सभी दिन देखें",
    ctaSecondary: "यात्रा की तैयारी",
    independent: "स्वतंत्र जानकारी। किसी सरकारी या धार्मिक संस्था से संबद्ध नहीं।",
  },
  countdown: {
    label: "अगला राजा स्नान",
    passed: "सीज़न समाप्त हो गया",
    passedNote: "जल ने अपने तीर्थों को प्राप्त कर लिया। अब तक देवता फिर न लौटें।",
    days: "दिन",
    hours: "घंटे",
    minutes: "मिनट",
    seconds: "सेकंड",
  },
  keyDates: {
    kicker: "मुख्य तारीखें",
    title: "सभाव का आकार",
    intro:
      "यहाँ की हर तारीख अपेक्षित है और बदल सकती है। यात्रा से पहले स्थानीय अधिकारियों और आयोजन समिति से पुष्टि करें।",
    opening: "आरंभ",
    openingNote: "ध्वजारोहण। अखारों के ध्वज ऊपर उठते हैं और मेला औपचारिक रूप से शुरू होता है।",
    first: "पहला राजा स्नान",
    firstNote: "पहला अमृत स्नान। अखारे भोर से पहले जल की ओर प्रस्थान करते हैं।",
    second: "दूसरा राजा स्नान",
    secondNote: "अक्सर मुख्य स्नान दिवस, और सबसे अधिक भीड़ वाला।",
    third: "तीसरा राजा स्नान",
    thirdNote: "मुख्य सीज़न का अंतिम महान स्नान।",
    conclusion: "समाप्ति",
    conclusionNote: "ध्वजावरोहण। जल शांत होता है; दस वर्षों के लिए भीड़ बिखर जाती है।",
    expected: "अपेक्षित · पास में पुष्टि करें",
    crowd: "भीड़",
  },
  days: {
    kicker: "हर शुभ दिन",
    title: "सिर्फ तीन दिन नहीं। हर एक।",
    intro:
      "हाथ से लिखा नहीं, गणना से बना। हर तिथि स्विस एफेमेरिस से और हर भीड़ पट्टी प्रकाशित नियमों से, जिन्हें आप खुद देख सकते हैं। तीन दिन राजा स्नान हैं; बाकी साधारण हैं, उतने ही पवित्र, और बहुत शांत।",
    loading: "पंचांग लोड हो रहा है…",
    error: "पंचांग आंकड़े लोड नहीं हो सके। ऊपर दी गई सारांश तारीखें अब भी लागू हैं।",
    count: "दिखा रहे",
    of: "में से",
    days: "दिन",
    search: "तारीख खोजें",
    searchPlaceholder: "जैसे 2 अगस्त, या एकादशी",
    filterBand: "कोई भी भीड़",
    filterKind: "कोई भी दिन",
    all: "सभी",
    noResults: "इससे मेल खाता कोई दिन नहीं। फ़िल्टर हटाकर देखें।",
    clear: "फ़िल्टर हटाएँ",
    howCalculated: "यह कैसे निकाला गया",
    panchang: "पंचांग",
    royalBath: "राजा स्नान",
    majorBathing: "प्रमुख स्नान दिवस",
    auspicious: "शुभ दिवस",
  },
  bands: {
    very_high: "बहुत अधिक",
    high: "अधिक",
    moderate: "मध्यम",
    lower: "कम",
  },
  estimate: {
    word: "अनुमानित",
    marker: "अनुमान",
    note: "केवल भीड़ का अनुमान, प्रकाशित नियमों से न कि मापे गए जमाव से।",
  },
  choose: {
    kicker: "आप कौन से दिन जाएँ?",
    title: "चुनिए, आप क्या खोज रहे हैं",
    intro:
      "तीन राजा स्नान में यात्राएँ और सबसे बड़ी भीड़ होती है। उनके बीच की लंबी अवधि शांत है और उतनी ही पवित्र। कोई एक बेहतर नहीं; वे अलग यात्राओं के लिए हैं।",
    procession: "अखारे की यात्रा",
    quiet: "शांति, कम भीड़",
    ritual: "शांत स्नान",
    showAll: "सभी दिन दिखाएँ",
    result: (n) => `${n} दिन आपकी खोज से मेल खाते हैं`,
    none: "हर दिन, सब दिखाया गया।",
  },
  waters: {
    kicker: "दो जल, एक नदी",
    title: "स्नान दो पवित्र कुंडों में होता है",
    intro:
      "अन्य कुंभ स्थलों के विपरीत, यहाँ पवित्र स्नान दो जगह होता है: नाशिक में गोदावरी पर, और नदी के उद्गम पर त्रिम्बकेश्वर में, लगभग तीस किलोमीटर पश्चिम।",
    nashik: "नाशिक",
    nashikWhere: "रामकुंड · गोदावरी पर",
    nashikLine: "शहर के बीच, जहाँ नदी जमा होती है।",
    nashikWater: "रामकुंड, भगवान राम की स्मृति से जुड़ा",
    trimbak: "त्रिम्बकेश्वर",
    trimbakWhere: "कुषावर्त कुंड · नदी का उद्गम",
    trimbakLine: "जहाँ गोदावरी जन्म लेती है, एक ज्योतिर्लिंग के पास।",
    trimbakWater: "कुषावर्त कुंड, गोदावरी का प्रतीकात्मक उद्गम",
    distance: "दूरी",
    nashikDist: "नाशिक शहर केंद्र, पंचवटी",
    trimbakDist: "नाशिक से लगभग 30 किमी पश्चिम",
    water: "जल",
    caution: "संप्रदायों पर एक टिप्पणी",
    cautionText:
      "ऊपर दी गई जोड़ी, त्रिम्बकेश्वर पर शैव और नाशिक पर वैष्णव, सामान्यतः दर्ज व्यवस्था है। स्रोत उसके विवरण में भिन्न हैं, और व्यवस्था हर मेले में बदल सकती है। इसे पृष्ठभूमि मानें और यात्रा से पहले स्थानीय अधिकारियों से पुष्टि करें।",
  },
  practical: {
    kicker: "यात्रा से पहले",
    title: "कोमल यात्रा। तैयारी के साथ।",
    rail: "रेल",
    railText:
      "नाशिक रोड स्टेशन, पुराने शहर से लगभग 8 किमी, मुंबई–भुसावल लाइन पर। स्नान दिवसों पर विशेष ट्रेनें और बहुत अधिक माँग रहती है। जल्दी बुक करें।",
    road: "सड़क",
    roadText:
      "बस या कार से मुंबई, लगभग 165 किमी, या पुणे, लगभग 210 किमी। चरम दिवसों पर घाट के पास सड़कें बंद हो जाती हैं। बाहर पार्क करें और पैदल आएँ।",
    air: "हवाई",
    airText:
      "निकटतम हवाई अड्डे नाशिक (ओज़र) सीमित उड़ानों के साथ, और मुंबई, लगभग 170 किमी, व्यापक जुड़ाव के लिए। फिर रेल या सड़क से आगे।",
    crowdTitle: "भीड़ कहाँ जमा होती है",
    crowdText:
      "तीन राजा स्नान दिवसों पर सबसे घनी भीड़ नाशिक के रामकुंड और त्रिम्बकेश्वर के कुषावर्त कुंड पर बनती है। पहुँचने की सड़कें भोर से घंटों पहले भर जाती हैं।",
    calmTitle: "शांति चाहिए तो",
    calmText:
      "चरम के बीच की लंबी अवधि बहुत आसान है, और उतनी ही सार्थक। मेला वर्ष के बड़ हिस्से तक चलता है। घाट पर एक साधारण सुबह शांत होती है, कतारें छोटी, और नदी अनुभव से भरी नहीं।",
    safetyTitle: "भीड़ में",
    safety: [
      "निकलने से पहले मिलने का स्थान और समय तय कर लें। लाखों लोग एक जगह जमा होने पर फ़ोन नेटवर्क ठप हो जाता है।",
      "बुज़ुर्गों या बच्चों के साथ जा रहे हों तो संपर्क नंबर लिखी कार्ड साथ रखें।",
      "भीड़ के साथ बहें, उसके विरुद्ध कभी नहीं। मार्शल, बैरिकेड और चिह्नित स्नान स्थलों का पालन करें।",
      "पहुँचते ही नज़दीकी प्राथमिक चिकित्सा और खोए-पाए लोगों के केंद्र नोट कर लें।",
    ],
    carryTitle: "क्या साथ ले जाएँ",
    carry: [
      "पानी", "हल्का भोजन", "टोपी", "बुनियादी दवाइयाँ", "छोटी टॉर्च",
      "छोटे नोटों में नकद", "वाटरप्रूफ बैग में सूखे कपड़े",
      "फिसलने वाले जूते", "पावर बैंक", "पहचान पत्र",
    ],
  },
  methodology: {
    kicker: "भीड़ का अनुमान कैसे",
    title: "ये अनुमान हैं, भविष्यवाणी नहीं",
    intro:
      "जो दिन अभी हुआ नहीं है, उसकी सच्ची भीड़ हम कभी नहीं जान सकते। हमारे पास पारदर्शी नियम हैं, हर एक उचित कारण पर आधारित, जो मिलकर एक अनुमानित अंक बनाते हैं। हम वह अंक चार पट्टियों में दिखाते हैं ताकि आप विकल्प तुलना कर सकें। उस दिन हमेशा पुलिस और प्रशासन के निर्देश मानें।",
    bandsTitle: "चार पट्टियाँ",
    bands: [
      { band: "very_high", range: "75–100", meaning: "सबसे व्यस्त दिनों में। भारी प्रबंधन, लंबी प्रतीक्षा।" },
      { band: "high", range: "55–74", meaning: "बड़ी भीड़ की अपेक्षा।" },
      { band: "moderate", range: "35–54", meaning: "उल्लेखनीय पर संभालने योग्य भीड़।" },
      { band: "lower", range: "0–34", meaning: "शांत शुभ दिनों में।" },
    ],
    weightsTitle: "दिन का अंक कैसे बनता है",
    weights: [
      { name: "धार्मिक दर्जा", why: "राजा स्नान सबसे ऊपर से शुरू होता है। यह सबसे बड़ा कारक है।" },
      { name: "सप्ताह का दिन", why: "सप्ताहांत अधिक लोग लाते हैं; शुक्रवार थोड़ा।" },
      { name: "सार्वजनिक अवकाश", why: "उस दिन छुट्टी अधिक लोगों को यात्रा पर जाने देती है।" },
      { name: "प्रमुख त्योहार", why: "उस दिन या आसपास बड़ा त्योहार भीड़ बढ़ा देता है।" },
      { name: "राजा स्नान की निकटता", why: "ठीक पहले और बाद के दिन उसका प्रभाव लेते हैं।" },
      { name: "मानसून", why: "तेज बारिश वाले सप्ताह हल्की यात्रा घटाते हैं। छोटा और अनिश्चित प्रभाव।" },
      { name: "बड़े शहरों से यात्रा", why: "नाशिक मुंबई और पुणे से सप्ताहांत की यात्रा है, इसलिए सप्ताहांत को थोड़ा लाभ।" },
    ],
    honestTitle: "इस मॉडल की सीमाएँ",
    honest: [
      "कोई 2027 का वास्तविक आंकड़ा नहीं है जिससे भारित किया जाए, इसलिए ये भार judgement हैं, परिणाम नहीं। हमने झूठी सटीकता के बजाय पारदर्शिता चुनी।",
      "मानसून प्रभाव का चिह्न और मात्रा अनिश्चित है। तेज बारिश भीड़ घटा सकती है पर ज़मीन पर ख़तरा बढ़ा सकती है। हम केवल भीड़ का आकार मॉडल करते हैं, और हल्का।",
      "अनुमान ग़लत हो सकते हैं। हर बदलाव उसके कारण सहित दर्ज किया जाता है।",
      "हम इसे कभी भी किसी दिन से बचने की सलाह नहीं बनाते। हर दिन उसके तौल-तुलन के साथ दिखाया जाता है ताकि आप अपने हिसाब का दिन चुन सकें।",
    ],
    sourceTitle: "आंकड़े कहाँ से आते हैं",
    source:
      "धार्मिक दर्जा और त्योहार की तारीखें स्विस एफेमेरिस से गणना की जाती हैं, लाहिरी (चित्रपक्ष) अयनांश के साथ, जो भारत सरकार के राष्ट्रीय पंचांग का मानक है। सार्वजनिक अवकाश राजपत्र तिथियाँ हैं। इस साइट की कोई तारीख कभी भाषा मॉडल द्वारा नहीं बनाई गई।",
  },
  closing: {
    line: "लाखों आएँगे, और हर एक अकेला खड़ा होगा गोदावरी के किनारे।",
    disclaimer:
      "स्वतंत्र जानकारी। यात्रा से पहले सभी तारीखें और व्यवस्थाएँ स्थानीय अधिकारियों से सत्यापित करें।",
    fineprint:
      "सभी तारीखें और आंकड़े अनुमानित हैं और बदल सकते हैं। यह साइट किसी सरकारी निकाय, धार्मिक संगठन, या त्योहार की आयोजन समिति से संबद्ध नहीं है।",
    blessing: "बारह वर्ष में एक बार, जल याद रखता है।",
  },
  footer: {
    about:
      "2027 के नाशिक-त्रिम्बकेश्वर सिंहस्थ कुंभ मेले की स्वतंत्र मार्गदर्शिका। शांत और सावधानीपूर्वक योजना के लिए बनाई गई।",
    verify: "यात्रा से पहले सब कुछ सत्यापित करें।",
    methodNote: "भीड़ के आंकड़े अनुमान हैं, सुरक्षा का माप नहीं।",
  },
  common: {
    skip: "सामग्री पर जाएँ",
    loading: "लोड हो रहा है",
    error: "कुछ गड़बड़ हुई",
    retry: "फिर कोशिश करें",
  },
};

export const mr = {
  meta: {
    title: "सिंहस्थ कुंभ मेळा २०२७ · नाशिक आणि त्रिम्बकेश्वर",
    description:
      "२०२७ च्या नाशिक-त्रिम्बकेश्वर सिंहस्थ कुंभ मेळ्याची स्वतंत्र माहिती: शुभ स्नानाचे सर्व दिवस, अंदाजे भीड, दोन पवित्र वाहिणा, आणि प्रवासाची तयारी.",
  },
  nav: {
    home: "मार्गदर्शिका",
    days: "सर्व दिवस",
    choose: "दिवस निवडा",
    waters: "दोन वाहिणा",
    practical: "प्रवासापूर्वी",
    methodology: "अंदाज कसा",
    stats: "बॉट आकडेवारी",
    lang: "भाषा",
  },
  hero: {
    eyebrow: "सिंहस्थ कुंभ मेळा · नाशिक आणि त्रिम्बकेश्वर · २०२७",
    line1: "बारा वर्षांतून एकदा,",
    line2: "नदी आठवते.",
    intro:
      "फक्त तीन तारीख नाहीत. पंचांग जे शुभ दिवस देतो ते सर्व, आणि प्रत्येक दिवसासोबत पारदर्शक अंदाजे भीड, म्हणजे तुम्हाला तुमच्या हिशोबाचा दिवस निवडता येईल.",
    cta: "सर्व दिवस पहा",
    ctaSecondary: "प्रवासाची तयारी",
    independent: "स्वतंत्र माहिती. कोणत्याही सरकारी किंवा धार्मिक संस्थेशी संलग्न नाही.",
  },
  countdown: {
    label: "पुढील राजा स्नान",
    passed: "हंगाम संपला",
    passedNote: "वाहिणे तीर्थांना मिळाले. आता पर्यंत देव पुन्हा येणार नाहीत.",
    days: "दिवस",
    hours: "तास",
    minutes: "मिनिटे",
    seconds: "सेकंद",
  },
  keyDates: {
    kicker: "मुख्य तारीखा",
    title: "सर्वाचा आकार",
    intro:
      "इथील प्रत्येक तारीख अपेक्षित आहे आणि बदलू शकते. प्रवासापूर्वी स्थानिक अधिकाऱ्यांकडून व आयोजन समितीकडून खात्री करा.",
    opening: "सुरुवात",
    openingNote: "ध्वजारोहण. अखार्यांचे ध्वज वर येतात आणि मेळा औपचारिक सुरू होतो.",
    first: "पहिला राजा स्नान",
    firstNote: "पहिला अमृत स्नान. अखारे पहाटेपूर्वी वाहिणीकडे निघतात.",
    second: "दुसरा राजा स्नान",
    secondNote: "बरेचदा मुख्य स्नान दिवस, आणि सर्वाधिक गर्दी असलेला.",
    third: "तिसरा राजा स्नान",
    thirdNote: "मुख्य हंगामाचे अंतिम महान स्नान.",
    conclusion: "समारोप",
    conclusionNote: "ध्वजावरोहण. वाहिणा शांत होते; भीदा पुन्हा दहा वर्षांसाठी विसरते.",
    expected: "अपेक्षित · जवळपास खात्री करा",
    crowd: "भीड",
  },
  days: {
    kicker: "प्रत्येक शुभ दिवस",
    title: "फक्त तीन दिवस नाहीत. प्रत्येक एक.",
    intro:
      "हातानी लिहिलेले नाही, गणनेने केलेले. प्रत्येक तिथी स्विस एफेमेरिसमधून आणि प्रत्येक भीड पट्टी प्रसिद्ध नियमांवरून, जी तुम्ही स्वतः पाहू शकता. तीन दिवस राजा स्नान; इतर साधे आहेत, तितकेच पवित्र, आणि खूप शांत.",
    loading: "पंचांग माहिती लोड होत आहे…",
    error: "पंचांग माहिती लोड होऊ शकली नाही. वरची सारांश तारीखा अजूनही लागू आहे.",
    count: "दाखवत",
    of: "पैकी",
    days: "दिवस",
    search: "तारीख शोधा",
    searchPlaceholder: "उदा. २ ऑगस्ट, किंवा एकादशी",
    filterBand: "कोणतीही भीड",
    filterKind: "कोणताही दिवस",
    all: "सर्व",
    noResults: "याला जुळणारा दिवस नाही. फिल्टर काढून पहा.",
    clear: "फिल्टर काढा",
    howCalculated: "हे कसे काढले",
    panchang: "पंचांग",
    royalBath: "राजा स्नान",
    majorBathing: "प्रमुख स्नान दिवस",
    auspicious: "शुभ दिवस",
  },
  bands: {
    very_high: "खूप जास्त",
    high: "जास्त",
    moderate: "मध्यम",
    lower: "कमी",
  },
  estimate: {
    word: "अंदाजे",
    marker: "अंदाज",
    note: "केवळ भीडचा अंदाज, प्रसिद्ध नियमांवरून, मोजलेल्या जमावावरून नाही.",
  },
  choose: {
    kicker: "तुम्ही कोणत्या दिवशी जाणार?",
    title: "निवडा, तुम्हाला काय शोधायचे आहे",
    intro:
      "तीन राजा स्नानात यात्रा आणि सर्वात मोठी भीड असते. त्यांच्यामधल्या मोठ्या कालावधीत शांतता असते आणि तितकीच पवित्र. एक चांगले दुसरे नाही; वे वेगळ्या प्रवासांसाठी आहेत.",
    procession: "अखार्यांची यात्रा",
    quiet: "शांतता, कमी भीड",
    ritual: "शांत स्नान",
    showAll: "सर्व दिवस दाखवा",
    result: (n) => `${n} दिवस तुमच्या शोधाशी जुळतात`,
    none: "प्रत्येक दिवस, सर्व दाखवलेले.",
  },
  waters: {
    kicker: "दोन वाहिणा, एक नदी",
    title: "स्नान दोन पवित्र कुंडांत होते",
    intro:
      "इतर कुंभ स्थळांच्या विरुद्ध, येथे पवित्र स्नान दोन ठिकाणी होते: नाशिकमधील गोदावरीवर, आणि नदीच्या उगमावर त्रिम्बकेश्वरमध्ये, सुमारे तीस किलोमीटर पश्चिम.",
    nashik: "नाशिक",
    nashikWhere: "रामकुंड · गोदावरीवर",
    nashikLine: "शहराच्या मध्यभागी, जिथे नदी जमा होते.",
    nashikWater: "रामकुंड, भगवान रामाच्या स्मृतिशी निगडीत",
    trimbak: "त्रिम्बकेश्वर",
    trimbakWhere: "कुषावर्त कुंड · नदीचा उगम",
    trimbakLine: "जिथे गोदावरी जन्मते, एका ज्योतिर्लिंगाजवळ.",
    trimbakWater: "कुषावर्त कुंड, गोदावरीचा प्रतीकात्मक उगम",
    distance: "अंतर",
    nashikDist: "नाशिक शहर केंद्र, पंचवटी",
    trimbakDist: "नाशिकपासून सुमारे ३० किमी पश्चिम",
    water: "पाणी",
    caution: "संघांवर एक सूचना",
    cautionText:
      "वर दिलेली जोडी, त्रिम्बकेश्वरवर शैव आणि नाशिकवर वैष्णव, नेहमी नोंदवलेली व्यवस्था आहे. स्रोत तिच्या तपशीलात वेगळे आहेत, आणि व्यवस्था प्रत्येक मेळ्यात बदलू शकते. हे पार्श्वभूमी मानून प्रवासापूर्वी स्थानिक अधिकाऱ्यांकडून खात्री करा.",
  },
  practical: {
    kicker: "प्रवासापूर्वी",
    title: "सौम्य प्रवास. तयारीने.",
    rail: "रेल्वे",
    railText:
      "नाशिक रोड स्टेशन, जुन्या शहरापासून सुमारे ८ किमी, मुंबई–भुसावल मार्गावर. स्नान दिवशी खास गाड्या आणि खूप मागणी असते. लवकर बुक करा.",
    road: "सडक",
    roadText:
      "बस किंवा गाडीने मुंबई, सुमारे १६५ किमी, किंवा पुणे, सुमारे २१० किमी. मोठ्या दिवशी घाटाजवळच्या सडका बंद होतात. बाहेर पार्क करा आणि चालत या.",
    air: "हवाई मार्ग",
    airText:
      "सर्वात जवळचे विमानतळ नाशिक (ओझर) मर्यादित उडाणांसह, आणि मुंबई, सुमारे १७० किमी, व्यापक जोडणीसाठी. नंतर रेल्वेने किंवा सडकेने पुढे.",
    crowdTitle: "भीड कुठे जमते",
    crowdText:
      "तीन राजा स्नान दिवशी सर्वाधिक गर्दी नाशिकच्या रामकुंडा आणि त्रिम्बकेश्वरच्या कुषावर्त कुंडाला भरते. पोहोचण्याच्या सडका पहाटेपासून तासांत भरल्या जातात.",
    calmTitle: "शांतता हवी असेल",
    calmText:
      "शिखरांमधल्या मोठ्या कालावधीत खूप सोपे असते, आणि तितकेच अर्थपूर्ण. मेळा वर्षाच्या मोठ्या भागापर्यंत चालतो. घाटावर एका साध्या सकाळी शांतता असते, रांगा लहान असतात, आणि नदी वेग नसते.",
    safetyTitle: "भीडत",
    safety: [
      "निघण्यापूर्वी भेटण्याची जागा आणि वेळ ठरवा. लाखो लोक एकत्र आल्यावर फोन नेटवर्क बंद पडते.",
      "म्हातारे किंवा मुलांसोबत जाणार असाल तर संपर्क क्रमांक लिहिलेले कार्ड सोबत ठेवा.",
      "भीडेसोबत वाहा, कधीही त्याच्या विरुद्ध नाही. मार्शल, बॅरिकेड आणि दाखवलेल्या स्नान ठिकाणांचे पालन करा.",
      "पोहोचताच जवळचे प्रथमोपचार आणि हरवलेल्या व्यक्तींचे केंद्र नोंदवा.",
    ],
    carryTitle: "काय सोबत न्यायचे",
    carry: [
      "पाणी", "हलका अन्नपूर्ण भोजन", "टोपी", "मूलभूत औषधे", "छोटा फ्लॅशलाइट",
      "लहान नोंदींतील रोख", "पाण्याला अवरोध असलेल्या पिशवीत कोरडे कपडे",
      "सरता सोडता येतील असे बूट", "पॉवर बँक", "ओळखपत्र",
    ],
  },
  methodology: {
    kicker: "भीडचा अंदाज कसा",
    title: "हे अंदाज आहेत, भविष्यवाणी नाही",
    intro:
      "जो दिवस अजून घडला नाही, त्याची खरी भीड आपण कधीच जाणू शकत नाही. आपल्याकडे पारदर्शक नियम आहेत, प्रत्येक एका अर्थपूर्ण कारणावर आधारित, जे एक अंदाजित गुण एकत्र करतात. आपण तो गुण चार पट्ट्यांत दाखवतो, म्हणजे तुम्ही पर्यायांची तुलना करू शकता. त्या दिवशी नेहमी पोलीस व प्रशासनाच्या सूचना पाळा.",
    bandsTitle: "चार पट्टे",
    bands: [
      { band: "very_high", range: "७५–१००", meaning: "सर्वाधिक व्यस्त दिवस. जड व्यवस्थापन, मोठी वाट." },
      { band: "high", range: "५५–७४", meaning: "मोठी भीड अपेक्षित." },
      { band: "moderate", range: "३५–५४", meaning: "लक्षणीय पर सांभाळता येईल अशी भीड." },
      { band: "lower", range: "०–३४", meaning: "शांत शुभ दिवसांत." },
    ],
    weightsTitle: "दिवसाचा गुण कसा तयार होतो",
    weights: [
      { name: "धार्मिक दर्जा", why: "राजा स्नान सर्वात वरून सुरू होते. हा सर्वात मोठा घटक आहे." },
      { name: "आठवड्याचा दिवस", why: "सप्ताहांत अधिक लोक येतात; शुक्रवार थोडे." },
      { name: "सार्वजनिक सुट्टी", why: "त्या दिवशी सुट्टी अधिक प्रवासायांना जाण्यास मोकत करते." },
      { name: "प्रमुख सण", why: "त्या दिवशी किंवा जवळपास मोठा सण भीड वाढवतो." },
      { name: "राजा स्नानाजवळपास", why: "थोडं आधी आणि नंतरचे दिवस त्याचा परिणाम घेतात." },
      { name: "पावसाळा", why: "जोरदार पावसाच्या आठवड्यात अनावश्यक प्रवास थोडा कमी होतो. लहान आणि अनिश्चित." },
      { name: "मोठ्या शहरांतून प्रवास", why: "नाशिक मुंबई आणि पुण्यातून सप्ताहांताचा प्रवास आहे, म्हणून सप्ताहांताला थोडा लाभ." },
    ],
    honestTitle: "या मॉडेलच्या मर्यादा",
    honest: [
      "२०२७ चा वास्तविक आकडा नाही ज्यावरून जुळवता येईल, म्हणून हे वजन निवड आहेत, निकाल नाही. आम्ही खोट्या अचूकतेपेक्षा पारदर्शकता निवडली.",
      "पावसाळ्याच्या परिणामाचे चिन्ह आणि प्रमाण अनिश्चित आहे. जोरदार पावस भीड कमी करू शकतो पण जमिनीवरील धोका वाढवू शकतो. आम्ही फक्त भीडचा आकार मॉडेल करतो, आणि हलका.",
      "अंदाज चुकीचे असू शकतात. प्रत्येक बदल त्याच्या कारणासह नोंदवला जातो.",
      "आम्ही कधीही कोणत्याही दिवसाला टाळण्याचा सल्ला देत नाही. प्रत्येक दिवस त्याच्या तोलमेळ्यासह दाखवला जातो, म्हणजे तुम्ही तुमच्या हिशोबाचा दिवस निवडू शकता.",
    ],
    sourceTitle: "आकडे कुठे आले",
    source:
      "धार्मिक दर्जा आणि सणांच्या तारीखा स्विस एफेमेरिसमधून मोजल्या जातात, लाहिरी (चित्रपक्ष) अयनांशासह, जो भारत सरकारच्या राष्ट्रीय पंचांगाचा मानक आहे. सार्वजनिक सुट्ट्या शासकीय तारीखा आहेत. या साइटवरील कोणतीही तारीख कधीही भाषा मॉडेलने तयार केलेली नसते.",
  },
  closing: {
    line: "लाखो येतील, आणि प्रत्येक एकटा गोदावरीच्या काठी उभा राहील.",
    disclaimer:
      "स्वतंत्र माहिती. प्रवासापूर्वी सर्व तारीखा व व्यवस्था स्थानिक अधिकाऱ्यांकडून तपासा.",
    fineprint:
      "सर्व तारीखा व आकडे अंदाजे आहेत आणि बदलू शकतात. ही साइट कोणत्याही सरकारी प्रस्थळ, धार्मिक संघटन किंवा उत्सवाच्या आयोजन समितीशी संलग्न नाही.",
    blessing: "बारा वर्षांतून एकदा, पाणी आठवते.",
  },
  footer: {
    about:
      "२०२७ च्या नाशिक-त्रिम्बकेश्वर सिंहस्थ कुंभ मेळ्याची स्वतंत्र मार्गदर्शिका. शांत आणि काळजीपूर्वक नियोजनासाठी तयार केलेली.",
    verify: "प्रवासापूर्वी सर्व काही तपासा.",
    methodNote: "भीडचे आकडे अंदाज आहेत, सुरक्षिततेचा माप नाहीत.",
  },
  common: {
    skip: "मजकुराकडे जा",
    loading: "लोड होत आहे",
    error: "काहीतरी चूक झाली",
    retry: "पुन्हा प्रयत्न करा",
  },
};

export const LANGS = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "mr", label: "मराठी" },
];

export const dicts = { en, hi, mr };
