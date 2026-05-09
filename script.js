const stops = [
  {
    name: "Antzela Apartments",
    place: "Sidari, Norden - nahe Canal d'Amour",
    image: "assets/antzela-apartments.jpg",
    alt: "Antzela Apartments",
    mood: "Der noerdliche Punkt: Sandstein-Klippen, Canal-d'Amour-Gegend, erster Kaffee und ein guter Start fuer kleine Buchten."
  },
  {
    name: "Akrogiali Apartments",
    place: "Barbati / Pyrgi, Ostkueste",
    image: "assets/akrogiali-apartments-lemnos.jpg",
    alt: "Akrogiali Apartments",
    mood: "Euer markierter Ostkuesten-Punkt unterhalb Pantokrator: kurzer Weg ans Wasser, Blick rueber Richtung Albanien, gute Mitte fuer Nordost."
  },
  {
    name: "Costas Apartments",
    place: "Mesongi",
    image: "assets/costas-apartments-mesongi.jpg",
    alt: "Costas Apartments Mesongi",
    mood: "Suedostkueste, direkt bei eurer Markierung hinter Messonghi Beach. Der ruhigere Gegenpol zu den lauten Plaenen."
  },
  {
    name: "Kalypso Studios",
    place: "Kavos, Suedspitze",
    image: "assets/kalypso-studios-kavos.jpg",
    alt: "Kalypso Studios in Kavos",
    mood: "Lebendiger Suedpunkt: Kavos Beach ist nah, Arkoudilas Beach ist die rauere Ausflugsidee fuer den Fiat-Tag."
  }
];

const localSpots = [
  {
    name: "Cape Drastis",
    area: "bei Sidari",
    type: "Strand / Aussicht",
    image: "assets/spots/cape-drastis.jpg",
    fallback: "assets/generated-corfu-scribble-map.png",
    note: "Weisse Klippen, kurzer Abstecher von Antzela, eher Sunset/Lookout als Badetag.",
    story: "Weisse Sandsteinklippen am noerdlichsten Zipfel. Der letzte Stueck Schotterpiste lieber laufen — Reifen wird man uns danken. Unter Wasser sollen Riffe und kleine Hoehlen sein, also Schnorchel mit, falls Wasser ruhig ist.",
    coords: "39.798630, 19.673811",
    day: "Norden"
  },
  {
    name: "Loggas Beach",
    area: "Peroulades",
    type: "Sunset",
    image: "assets/spots/loggas-beach.jpg",
    note: "Steilkueste, Abendlicht, gut kombinierbar mit Cape Drastis.",
    story: "Der Sunset-Stop schlechthin im Norden. Steilkueste mit kleiner Bar oben, der Strand selbst ist nur per Treppe erreichbar — wer will, geht runter, ansonsten reicht das Abendlicht von oben.",
    coords: "39.787611, 19.666557",
    day: "Norden"
  },
  {
    name: "Canal d'Amour",
    area: "Sidari",
    type: "Bucht",
    image: "assets/spots/canal-damour.jpg",
    note: "Direkt im Norden-Cluster, touristischer, aber fuer einen fruehen kurzen Stop sinnvoll.",
    story: "Sandstein-Felsen mit dem schmalen Kanal dazwischen — die Sage sagt, Paare die durchschwimmen, heiraten bald. Foto-Moment fuer uns. Frueh hin, dann ist es leerer.",
    coords: "39.797475, 19.698083",
    day: "Norden"
  },
  {
    name: "Porto Timoni",
    area: "Afionas",
    type: "Doppelbucht",
    image: "assets/spots/porto-timoni.jpg",
    note: "Einer der schoensten Westkuesten-Spots, mit kleinem Hike statt Parkplatz-vor-die-Tuer.",
    story: "Doppelbucht von oben gesehen ist das Postkartenmotiv von Korfu. 30-40 Minuten Hike vom Dorf Afionas runter, oder per Boot. Beides lohnt — runter ist anstrengender als gedacht, also Wasser mitnehmen.",
    coords: "39.720587, 19.660136",
    day: "Westen"
  },
  {
    name: "Paleokastritsa Monastery",
    area: "Paleokastritsa",
    type: "Kloster / Aussicht",
    image: "assets/spots/paleokastritsa-monastery.jpg",
    note: "Kloster aus dem 13. Jh. auf Felsklippe, Panoramablick auf die 6 Buchten.",
    story: "Das weisse Kloster thront ueber Paleokastritsa und blickt auf alle sechs Buchten gleichzeitig. Eintritt frei, kleines Museum drinnen, im Innenhof bluehen Bougainvilleen. Gute Kombi mit einem der Stadtstrand-Tage.",
    coords: "39.679167, 19.700556",
    day: "Westen"
  },
  {
    name: "Angelokastro",
    area: "Krini",
    type: "Burg-Ruine",
    image: "assets/spots/angelokastro.jpg",
    note: "Byzantinische Burg, Blick ueber die Westkueste, guter Kulturstop zwischen Meerpausen.",
    story: "Festungsruine aus dem 13. Jh. auf 305m, von dort sah man frueher angeblich bis Otranto. Kurzer steiler Aufstieg vom Parkplatz in Krini, oben winzige Kapelle und 360-Grad-Blick. Schatten ist rar — Kappe.",
    coords: "39.678268, 19.686576",
    day: "Westen"
  },
  {
    name: "Old Perithia",
    area: "Pantokrator",
    type: "altes Dorf",
    image: "assets/spots/old-perithia.jpg",
    note: "Steinhaeuser, ruhiger Bergdorf-Charakter, gut mit Pantokrator und Akrogiali/Barbati zu verbinden.",
    story: "Gegruendet im 14. Jh. als Schutz vor Piraten. Heute halb verlassen, halb wiederbelebt durch ein paar Tavernen. Steinhaeuser, Olivenhaine, Stille. Mittag dort essen, dann hoch zum Pantokrator.",
    coords: "39.764553, 19.875472",
    day: "Nordost"
  },
  {
    name: "Pantokrator",
    area: "Nordost",
    type: "Gipfel-Aussicht",
    image: "assets/spots/pantokrator.jpg",
    note: "Hoechster Inselblick, kurvige Strecke, eher frueh oder spaeter fahren.",
    story: "Mit 906m der hoechste Berg der Insel, oben ein Kloster und ein TV-Mast. Strasse ist eng und kurvig, oben aber Blick ueber die ganze Insel und an klaren Tagen bis Albanien. Frueh raus oder spaet hin — Mittagshitze nicht empfehlenswert.",
    coords: "39.747749, 19.872246",
    day: "Nordost"
  },
  {
    name: "Kassiopi",
    area: "Nordost-Kueste",
    type: "Fischerdorf",
    image: "assets/spots/kassiopi.jpg",
    note: "Hafen, Tavernen, Burg-Ruine oben — passt zu Avlaki und Patatia Beach nebenan.",
    story: "Fischerdorf um einen Naturhafen, enge Gassen mit Tavernen und Cafes. Oben die Ruinen der Kassiopi-Burg (kurzer Spaziergang). Direkt nebenan: Avlaki Beach (ruhige Steilkuesten-Bucht) und Patatia Beach. Gute Halb-Tags-Tour von Akrogiali aus.",
    coords: "39.792500, 19.925000",
    day: "Nordost"
  },
  {
    name: "Nissaki Beach",
    area: "bei Barbati",
    type: "Bucht",
    image: "assets/spots/nissaki.jpg",
    note: "Kleine Ostkuestenbucht in Akrogiali-Nahe, passt gut als kurzer Wasserstop.",
    story: "Kleine Kieselbucht mit klarem Wasser, Tavernen am Strand. Vom Akrogiali in 5 Minuten erreichbar. Gut fuer einen schnellen Sprung ins Wasser am Vormittag.",
    coords: "39.724018, 19.896985",
    day: "Nordost"
  },
  {
    name: "Saint Spiridon Church",
    area: "Korfu Old Town",
    type: "Kirche",
    image: "assets/spots/saint-spiridon.jpg",
    note: "1580er Patron-Saint-Kirche mit ikonischem rotem Glockenturm.",
    story: "Mitten in der Altstadt, Schutzpatron von Korfu (sagt, hat die Insel mehrfach vor Pest und Belagerung gerettet). Reliquien drinnen, der Glockenturm ist das hoechste Gebaeude der Altstadt. Ruhig durchgehen — wenn Service laeuft, Kopf bedecken.",
    coords: "39.624028, 19.921889",
    day: "Stadt"
  },
  {
    name: "Old Fortress",
    area: "Korfu Old Town",
    type: "Festung",
    image: "assets/spots/old-fortress.jpg",
    note: "UNESCO, venezianische Festung mit Panoramablick auf die Altstadt.",
    story: "Auf einer Felshalbinsel oestlich der Altstadt, ueber eine Bruecke erreichbar. Drinnen Reste der venezianischen Mauern, eine Garnisonskirche und das Byzantinische Museum. Ganz oben Panoramablick auf die Altstadt und die Esplanade. Eintritt klein, lohnt sich. Direkt nebenan: Museum of Asian Art im alten Palast — wenn Zeit, kombinieren.",
    coords: "39.624722, 19.928611",
    day: "Stadt"
  },
  {
    name: "Vlaherna & Pontikonisi",
    area: "Kanoni",
    type: "Kloster auf Felsinsel",
    image: "assets/spots/vlaherna-pontikonisi.jpg",
    note: "17.-Jh.-Kloster auf einer Felsinsel, daneben das Maeuse-Inselchen Pontikonisi.",
    story: "Vom Kanoni-Aussichtspunkt fuehrt eine schmale Mole zum kleinen Vlaherna-Kloster auf seiner Insel — direkt dahinter Pontikonisi mit ihrer winzigen Kapelle. Genau hier landen die Flieger fast ueber den Koepfen. Sunset-tauglich. Vom Stadtzentrum 10 Minuten suedlich.",
    coords: "39.594722, 19.913333",
    day: "Stadt"
  },
  {
    name: "Achilleion Palace",
    area: "Gastouri",
    type: "Palast",
    image: "assets/spots/achilleion.jpg",
    note: "Kaiserin Sisis Sommerresidenz von 1890 mit Mythologie-Garten.",
    story: "Sisi liess sich hier 1890 einen Sommerpalast bauen, voll mit Achill-Statuen und Bezuegen zur griechischen Mythologie. Der Garten mit Blick ueber die Suedostkueste ist der eigentliche Star. Liegt perfekt auf der Strecke vom Norden Richtung Mesongi.",
    coords: "39.564306, 19.901333",
    day: "Stadt"
  },
  {
    name: "Gardiki Castle",
    area: "bei Mesongi",
    type: "Burg-Ruine",
    image: "assets/spots/gardiki-castle.jpg",
    note: "Rohere Burgruine nahe Costas/Mesongi, guter kurzer Stop wenn man ohnehin im Sueden faehrt.",
    story: "Byzantinische Festung aus dem 13. Jh., eckiger Grundriss mit acht Tuermen. Frei zugaenglich, kein Eintritt. Liegt auf dem Weg zur Korission-Lagune und zu Issos Beach.",
    coords: "39.476778, 19.885098",
    day: "Sueden"
  },
  {
    name: "Korission Lagoon",
    area: "Suedwest",
    type: "Natur",
    image: "assets/spots/korission-lagoon.jpg",
    note: "Lagune, Duenen, Voegel, flacher als die Klippen-Spots und schoen zum Streunen.",
    story: "Salzwasserlagune mit Duenen Richtung Meer. Voegel, Flamingos im Fruehjahr/Herbst, sonst eher Sumpfvogel-Romantik. Verbindbar mit Issos Beach — der Sandstrand liegt direkt an der Lagune.",
    coords: "39.445825, 19.910801",
    day: "Sueden"
  },
  {
    name: "Issos Beach",
    area: "bei Korission",
    type: "Strand",
    image: "assets/spots/issos-beach.jpg",
    note: "Breiter Sandstrand bei den Duenen, guter Gegenpol zu kleinen Buchten.",
    story: "Langer Sandstrand mit Duenen — eher Atlantik-als-Aegaeis-Vibe. Selten ueberlaufen, weil der Weg etwas drumrum geht. Gut fuer einen langen Lauf am Wasser.",
    coords: "39.429309, 19.939326",
    day: "Sueden"
  },
  {
    name: "Chlomos",
    area: "ueber Mesongi",
    type: "Bergdorf",
    image: "assets/spots/chlomos.jpg",
    note: "Bergdorf ueber dem Suedosten, weniger Beach, mehr Blick und langsames Durchfahren.",
    story: "Eines der hoechstgelegenen Doerfer Korfus, kleine weisse Haeuser uebereinander gestapelt. Ein paar Tavernen, weniger Touristen. Der Blick auf Lefkimmi und die Lagune ist der Grund fuer den Umweg.",
    coords: "39.456684, 19.957776",
    day: "Sueden"
  },
  {
    name: "Boukari",
    area: "Suedostkueste",
    type: "Essen / Wasser",
    image: "assets/spots/boukari.jpg",
    note: "Kleine Kuestenlinie fuer ruhigeres Essen am Wasser, sinnvoll von Costas aus.",
    story: "Kleines Fischerdorf direkt am Wasser, ein paar Tavernen mit Tischen quasi im Meer. Klassisches Sundowner-Mittagessen, wenn man von Costas aus losgeht.",
    coords: "39.459542, 19.977214",
    day: "Sueden"
  },
  {
    name: "Gardenos Beach",
    area: "Sueden",
    type: "Strand",
    image: "assets/spots/gardenos.jpg",
    note: "Laengerer, entspannter Strand westlich von Kavos, weniger Kavos-Trubel.",
    story: "Breiter, flach abfallender Sandstrand, ein paar Tavernen, kaum Hotels. Wer Kavos zu laut findet, bekommt hier 10 Minuten weiter den entspannten Gegenentwurf.",
    coords: "39.392931, 20.027148",
    day: "Sueden"
  },
  {
    name: "Arkoudilas Beach",
    area: "Kavos",
    type: "wilder Strand",
    image: "assets/spots/arkoudilas.jpg",
    note: "Rauer Suedspitzen-Spot, direkt passend zum Kalypso-Cluster.",
    story: "Der wildeste Strand der Suedspitze. Steiler Trampelpfad runter durch Wald, dann Sand und meist niemand da. Im Sommer schwierig wegen Sonne — Schatten gibt es nicht. Vom Kalypso aus mit Fiat 15 Minuten.",
    coords: "39.365841, 20.101741",
    day: "Sueden"
  },
  {
    name: "Alykes Lefkimmi",
    area: "Lefkimmi",
    type: "Salinen",
    image: "assets/spots/alykes-lefkimmi.jpg",
    note: "Flache Salinen-/Naturzone, ruhigere Alternative wenn man schon im Sueden ist.",
    story: "Alte Salzgewinnungs-Felder, jetzt Naturschutzgebiet. Sehr flach, sehr still, viele Voegel. Nicht spektakulaer, aber schoen zum Streunen wenn man von Lefkimmi aus die Schleife nach Sueden macht.",
    coords: "39.437857, 20.059674",
    day: "Sueden"
  }
];

// ---------- Quests / Gamification ----------
const QUEST_POINTS = { spot: 10, photo: 25, experience: 20 };

const photoQuests = [
  { id: "p1",  title: "Cape-Drastis-Klippen im grünen Atmo-Look",      hint: "Lange Belichtung, Cypress-Schatten, Klippen oben rechts." },
  { id: "p2",  title: "Loggas-Sunset-Silhouette",                       hint: "Du oder Zoe als Schattenriss gegen die Abendsonne." },
  { id: "p3",  title: "Selfie mit Saint-Spiridon-Glockenturm",           hint: "Tilt-Up, Glockenturm muss komplett rein." },
  { id: "p4",  title: "Porto-Timoni von oben",                          hint: "Postkarten-Doppelbucht-Shot vom Hike." },
  { id: "p5",  title: "Pantokrator-Panorama in 4K",                     hint: "180°-Schwenk Korfu → Albanien." },
  { id: "p6",  title: "Foto im Olivenhain bei Old Perithia",             hint: "Knorrige Olivenstämme, Spotlight zwischen Blättern." },
  { id: "p7",  title: "Vlaherna-Mole mit Flieger im Bild",               hint: "Timing: Anflug auf Korfu Town." },
  { id: "p8",  title: "Boukari-Tisch direkt im Wasser",                  hint: "Glas, Teller, Meerblick — klassiker." },
  { id: "p9",  title: "Canal-d'Amour-Sandstein-Detail",                  hint: "Macro auf die Sandstein-Texturen." },
  { id: "p10", title: "Korission-Lagune mit Vogel-Bonus",                hint: "Reiher, Möwe, Flamingo — irgendwas mit Federn." }
];

const experienceQuests = [
  { id: "e1", title: "Im Meer schwimmen",                          hint: "Mindestens 5 Minuten, kein Tauchgang im Pool zählt." },
  { id: "e2", title: "Souvlaki essen wo nur Locals sitzen",        hint: "Kein Restaurant mit englischer Karte vor der Tür." },
  { id: "e3", title: "Sonnenaufgang auf Pantokrator",              hint: "Frühaufstehen-Quest. Wert: ungeschlagen." },
  { id: "e4", title: "Bootstour zu Porto Timoni",                  hint: "30 € pro Person, alternativ kleines Boot in Paleokastritsa." },
  { id: "e5", title: "Olivenöl mitbringen",                        hint: "Direktverkauf vom Bauern, nicht Supermarkt." },
  { id: "e6", title: "In Kassiopi an einer Taverne sitzen",        hint: "Pflicht: Frappé oder Mythos — eines davon." },
  { id: "e7", title: "Frappé am Strand bestellen",                 hint: "Iced, mit oder ohne Zucker, Diskussion danach." },
  { id: "e8", title: "Eine Nacht ohne Handy verbringen",            hint: "Stempel hier ist Vertrauenssache." }
];

const achievements = [
  { id: "a1", title: "Norden komplett",        bonus: 75,  cond: ["Cape Drastis", "Loggas Beach", "Canal d'Amour"] },
  { id: "a2", title: "Westen komplett",        bonus: 75,  cond: ["Porto Timoni", "Paleokastritsa Monastery", "Angelokastro"] },
  { id: "a3", title: "Stadt komplett",         bonus: 75,  cond: ["Saint Spiridon Church", "Old Fortress", "Vlaherna & Pontikonisi", "Achilleion Palace"] },
  { id: "a4", title: "Süden komplett",         bonus: 75,  cond: ["Gardiki Castle", "Korission Lagoon", "Issos Beach", "Boukari", "Gardenos Beach", "Arkoudilas Beach"] },
  { id: "a5", title: "Vier-Regionen-Sweep",    bonus: 200, cond: "ALL_REGIONS" },
  { id: "a6", title: "Insel-Master",           bonus: 250, cond: "ALL_SPOTS" }
];

const RANK_THRESHOLDS = [
  { score: 0,    label: "Hello Korfu" },
  { score: 100,  label: "Inselgast" },
  { score: 250,  label: "Strand-Stammgast" },
  { score: 450,  label: "Olivenöl-Kenner" },
  { score: 700,  label: "Dorf-Verschwoerer" },
  { score: 950,  label: "Korfu-Veteran" },
  { score: 1100, label: "Insel-Master" }
];

function maxPossibleScore() {
  return localSpots.length * QUEST_POINTS.spot
    + photoQuests.length * QUEST_POINTS.photo
    + experienceQuests.length * QUEST_POINTS.experience
    + achievements.reduce((s, a) => s + a.bonus, 0);
}

const STORAGE_KEY = "corfu-guide-v1";

function loadState() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); }
  catch { return {}; }
}
function saveState(state) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch {}
}
let state = loadState();
state.visited = state.visited || {};
state.notes = state.notes || {};
state.quests = state.quests || {};
state.achievements = state.achievements || {};

const panel = document.querySelector("#stopPanel");
const points = [...document.querySelectorAll(".photo-pin")];
const cards = [...document.querySelectorAll("[data-stop-card]")];
const spotMarkers = [...document.querySelectorAll("[data-spot]")];
const spotGrid = document.querySelector("#spotGrid");
const spotlight = document.querySelector("#spotlight");
const visitedCount = document.querySelector("#visitedCount");
const visitedTotal = document.querySelector("#visitedTotal");

function selectStop(index) {
  const stop = stops[index];
  points.forEach((point) => point.classList.toggle("is-active", Number(point.dataset.stop) === index));
  panel.innerHTML = `
    <img src="${stop.image}" alt="${stop.alt}">
    <p class="eyebrow">Stop ${index + 1}</p>
    <h3>${stop.name}</h3>
    <p class="place">${stop.place}</p>
    <p class="mood">${stop.mood}</p>
  `;
}

points.forEach((point) => point.addEventListener("click", () => selectStop(Number(point.dataset.stop))));
cards.forEach((card) => card.addEventListener("click", () => {
  const index = Number(card.dataset.stopCard);
  if (!Number.isFinite(index) || !stops[index]) return;
  selectStop(index);
  document.querySelector("#route").scrollIntoView({ behavior: "smooth", block: "start" });
}));

function selectSpot(index, scroll = false) {
  const spot = localSpots[index];
  if (!spot || !spotlight) return;
  spotMarkers.forEach((marker) => marker.classList.toggle("is-active", Number(marker.dataset.spot) === index));
  [...document.querySelectorAll("[data-spot-card]")].forEach((card) => {
    card.classList.toggle("is-active", Number(card.dataset.spotCard) === index);
  });
  spotlight.innerHTML = `
    <p class="eyebrow">${spot.area}</p>
    <h3>${spot.name}</h3>
    <p>${spot.note}</p>
    <span>${spot.type}</span>
  `;
  if (scroll) document.querySelector("#locals").scrollIntoView({ behavior: "smooth", block: "start" });
}

function updateCounter() {
  const visited = Object.values(state.visited).filter(Boolean).length;
  if (visitedCount) visitedCount.textContent = String(visited);
  if (visitedTotal) visitedTotal.textContent = String(localSpots.length);
}

function renderSpotCards() {
  if (!spotGrid) return;
  spotGrid.innerHTML = localSpots.map((spot, index) => {
    const isVisited = !!state.visited[spot.name];
    return `
    <article class="spot-card${isVisited ? " is-visited" : ""}" data-spot-card="${index}" style="--r:${index % 2 ? "1.2deg" : "-.8deg"}">
      <span class="tape" aria-hidden="true"></span>
      <img src="${spot.image}" alt="${spot.name}" onerror="this.src='${spot.fallback || "assets/generated-corfu-scribble-map.png"}'">
      <h3>${spot.name}</h3>
      <p>${spot.note}</p>
      <span class="spot-card__meta">${spot.area} - ${spot.type}</span>
      <span class="stamp" aria-hidden="true">Besucht</span>
    </article>
  `}).join("");
  [...document.querySelectorAll("[data-spot-card]")].forEach((card) => {
    card.addEventListener("click", () => {
      const idx = Number(card.dataset.spotCard);
      selectSpot(idx);
      openModal(idx);
    });
  });
}
renderSpotCards();
updateCounter();

spotMarkers.forEach((marker) => marker.addEventListener("click", () => {
  const idx = Number(marker.dataset.spot);
  selectSpot(idx, true);
  openModal(idx);
}));

// ---------- Modal ----------
const modal = document.querySelector("#spotModal");
const modalBody = document.querySelector("#spotModalBody");

function openModal(index) {
  const spot = localSpots[index];
  if (!spot || !modal) return;
  const isVisited = !!state.visited[spot.name];
  const note = state.notes[spot.name] || "";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.coords)}`;
  modalBody.innerHTML = `
    <button class="modal__close" aria-label="Schliessen" type="button">&times;</button>
    <div class="modal__photo">
      <img src="${spot.image}" alt="${spot.name}" onerror="this.src='${spot.fallback || "assets/generated-corfu-scribble-map.png"}'">
      <span class="modal__day">${spot.day || spot.area}</span>
      ${isVisited ? '<span class="stamp stamp--big is-on" aria-hidden="true">Besucht</span>' : ''}
    </div>
    <div class="modal__copy">
      <p class="eyebrow">${spot.area}</p>
      <h3>${spot.name}</h3>
      <p class="modal__type">${spot.type}</p>
      <p class="modal__story">${spot.story || spot.note}</p>
      <div class="modal__coords">
        <code>${spot.coords}</code>
        <a class="modal__maps" href="${mapsUrl}" target="_blank" rel="noopener">Google Maps oeffnen ↗</a>
      </div>
      <label class="modal__notelabel" for="modalNote">Eigene Notiz</label>
      <textarea id="modalNote" rows="3" placeholder="Was uns hier passiert ist...">${note.replace(/</g, "&lt;")}</textarea>
      <button class="modal__stamp${isVisited ? " is-on" : ""}" type="button">
        ${isVisited ? "Besucht ✓ — Stempel entfernen" : "Hier waren wir — abstempeln"}
      </button>
    </div>
  `;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");

  const noteEl = modalBody.querySelector("#modalNote");
  if (noteEl) {
    noteEl.addEventListener("input", () => {
      state.notes[spot.name] = noteEl.value;
      saveState(state);
    });
  }
  const stampBtn = modalBody.querySelector(".modal__stamp");
  if (stampBtn) {
    stampBtn.addEventListener("click", () => {
      const wasVisited = !!state.visited[spot.name];
      const newVal = !wasVisited;
      state.visited[spot.name] = newVal;
      saveState(state);
      updateCounter();
      renderSpotCards();
      const delta = newVal ? QUEST_POINTS.spot : -QUEST_POINTS.spot;
      refreshScore(delta);
      if (newVal) {
        fireConfetti();
        setTimeout(checkAchievements, 200);
      }
      if (typeof renderQuests === "function") {
        renderQuests();
        updateTabBadges();
      }
      openModal(index);
    });
  }
  modalBody.querySelector(".modal__close").addEventListener("click", closeModal);
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

if (modal) {
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
}

// ---------- Score & Animation ----------
const scoreEl = document.querySelector("#scoreValue");
const scoreBarFill = document.querySelector("#scoreBarFill");
const scoreRankEl = document.querySelector("#scoreRank");
const scorePill = document.querySelector("#scorePill");
const scorePops = document.querySelector("#scorePops");
let displayedScore = 0;
let scoreAnimRaf = null;

function computeScore() {
  let total = 0;
  Object.values(state.visited).forEach(v => { if (v) total += QUEST_POINTS.spot; });
  Object.entries(state.quests).forEach(([id, done]) => {
    if (!done) return;
    if (id.startsWith("p")) total += QUEST_POINTS.photo;
    else if (id.startsWith("e")) total += QUEST_POINTS.experience;
  });
  Object.entries(state.achievements).forEach(([id, done]) => {
    if (!done) return;
    const a = achievements.find(x => x.id === id);
    if (a) total += a.bonus;
  });
  return total;
}

function rankFor(score) {
  let r = RANK_THRESHOLDS[0];
  for (const t of RANK_THRESHOLDS) if (score >= t.score) r = t;
  return r;
}

function animateScoreTo(target) {
  if (!scoreEl) return;
  if (scoreAnimRaf) cancelAnimationFrame(scoreAnimRaf);
  const start = displayedScore;
  const startTime = performance.now();
  const duration = Math.min(900, 250 + Math.abs(target - start) * 6);
  const max = maxPossibleScore();
  const step = (now) => {
    const t = Math.min(1, (now - startTime) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    const current = Math.round(start + (target - start) * eased);
    displayedScore = current;
    scoreEl.textContent = String(current);
    if (scoreBarFill) scoreBarFill.style.width = (Math.min(100, (current / max) * 100)).toFixed(2) + "%";
    if (scoreRankEl) scoreRankEl.textContent = rankFor(current).label;
    if (t < 1) scoreAnimRaf = requestAnimationFrame(step);
  };
  scoreAnimRaf = requestAnimationFrame(step);
}

function popPoints(amount) {
  if (!scorePops) return;
  const pop = document.createElement("span");
  pop.className = "score-pop";
  pop.textContent = (amount > 0 ? "+" : "") + amount;
  if (amount < 0) pop.classList.add("score-pop--neg");
  scorePops.appendChild(pop);
  if (scorePill) {
    scorePill.classList.add("is-pulse");
    setTimeout(() => scorePill.classList.remove("is-pulse"), 480);
  }
  setTimeout(() => pop.remove(), 1400);
}

function fireConfetti(big = false) {
  if (typeof confetti !== "function") return;
  if (big) {
    confetti({ particleCount: 140, spread: 90, origin: { y: 0.3 }, scalar: 1.1, colors: ["#ef6f61","#277c8e","#7f8a4d","#fff0ba","#8fc8d4"] });
    setTimeout(() => confetti({ particleCount: 80, angle: 60, spread: 55, origin: { x: 0, y: 0.4 } }), 180);
    setTimeout(() => confetti({ particleCount: 80, angle: 120, spread: 55, origin: { x: 1, y: 0.4 } }), 320);
  } else {
    confetti({ particleCount: 35, spread: 55, origin: { y: 0.18, x: 0.92 }, scalar: .8, colors: ["#ef6f61","#277c8e","#fff0ba"] });
  }
}

function showAchievementBanner(a) {
  let banner = document.querySelector(".ach-banner");
  if (!banner) {
    banner = document.createElement("div");
    banner.className = "ach-banner";
    document.body.appendChild(banner);
  }
  banner.innerHTML = `
    <div class="ach-banner__inner">
      <div class="ach-banner__eyebrow">Achievement freigeschaltet</div>
      <div class="ach-banner__title">${a.title}</div>
      <div class="ach-banner__bonus">+${a.bonus} Punkte</div>
    </div>
  `;
  banner.classList.add("is-on");
  setTimeout(() => banner.classList.remove("is-on"), 3200);
}

function checkAchievements() {
  const visitedNames = new Set(Object.entries(state.visited).filter(([_, v]) => v).map(([k]) => k));
  let unlockedNew = [];
  achievements.forEach(a => {
    if (state.achievements[a.id]) return;
    let ok = false;
    if (a.cond === "ALL_SPOTS") ok = visitedNames.size === localSpots.length;
    else if (a.cond === "ALL_REGIONS") {
      const regions = new Set();
      visitedNames.forEach(n => {
        const sp = localSpots.find(s => s.name === n);
        if (sp) regions.add(sp.day);
      });
      ok = ["Norden","Westen","Nordost","Stadt","Sueden"].every(r => regions.has(r));
    } else if (Array.isArray(a.cond)) {
      ok = a.cond.every(name => visitedNames.has(name));
    }
    if (ok) {
      state.achievements[a.id] = true;
      unlockedNew.push(a);
    }
  });
  if (unlockedNew.length) {
    saveState(state);
    unlockedNew.forEach((a, i) => {
      setTimeout(() => {
        showAchievementBanner(a);
        fireConfetti(true);
        popPoints(a.bonus);
      }, i * 1200);
    });
  }
}

function refreshScore(delta) {
  const newScore = computeScore();
  animateScoreTo(newScore);
  if (delta) popPoints(delta);
}

// ---------- Quest Rendering ----------
const questGrid = document.querySelector("#questGrid");
const questTabs = [...document.querySelectorAll(".quest-tab")];
let currentTab = "photo";

function questCardHtml(q, kind, points) {
  const done = !!state.quests[q.id];
  return `
    <article class="quest-card${done ? " is-done" : ""}" data-quest-id="${q.id}" data-quest-kind="${kind}">
      <span class="quest-card__points">+${points}</span>
      <h3>${q.title}</h3>
      <p>${q.hint}</p>
      <button class="quest-card__btn" type="button">${done ? "✓ Erledigt" : "Abhaken"}</button>
      <span class="quest-card__stamp" aria-hidden="true">Done</span>
    </article>
  `;
}

function achievementCardHtml(a) {
  const done = !!state.achievements[a.id];
  let progress = "";
  if (Array.isArray(a.cond)) {
    const have = a.cond.filter(n => state.visited[n]).length;
    progress = `${have} / ${a.cond.length} Spots`;
  } else if (a.cond === "ALL_SPOTS") {
    const v = Object.values(state.visited).filter(Boolean).length;
    progress = `${v} / ${localSpots.length} Spots`;
  } else if (a.cond === "ALL_REGIONS") {
    const regions = new Set();
    Object.entries(state.visited).forEach(([n, v]) => {
      if (!v) return;
      const sp = localSpots.find(s => s.name === n);
      if (sp) regions.add(sp.day);
    });
    progress = `${regions.size} / 5 Regionen`;
  }
  return `
    <article class="quest-card quest-card--ach${done ? " is-done" : ""}" data-ach-id="${a.id}">
      <span class="quest-card__points">+${a.bonus}</span>
      <h3>🏆 ${a.title}</h3>
      <p>${progress}</p>
      <span class="quest-card__stamp quest-card__stamp--gold" aria-hidden="true">Unlocked</span>
    </article>
  `;
}

function renderQuests() {
  if (!questGrid) return;
  let html = "";
  if (currentTab === "photo") {
    html = photoQuests.map(q => questCardHtml(q, "photo", QUEST_POINTS.photo)).join("");
  } else if (currentTab === "experience") {
    html = experienceQuests.map(q => questCardHtml(q, "experience", QUEST_POINTS.experience)).join("");
  } else if (currentTab === "achievement") {
    html = achievements.map(a => achievementCardHtml(a)).join("");
  }
  questGrid.innerHTML = html;
  questGrid.querySelectorAll("[data-quest-id]").forEach(card => {
    card.addEventListener("click", (e) => {
      const id = card.dataset.questId;
      const kind = card.dataset.questKind;
      const wasDone = !!state.quests[id];
      state.quests[id] = !wasDone;
      saveState(state);
      const points = QUEST_POINTS[kind];
      const delta = wasDone ? -points : points;
      refreshScore(delta);
      if (!wasDone) fireConfetti();
      renderQuests();
      updateTabBadges();
    });
  });
}

function updateTabBadges() {
  questTabs.forEach(tab => {
    const t = tab.dataset.tab;
    const badge = tab.querySelector("span");
    if (!badge) return;
    if (t === "photo") {
      const done = photoQuests.filter(q => state.quests[q.id]).length;
      badge.textContent = `${done}/${photoQuests.length}`;
    } else if (t === "experience") {
      const done = experienceQuests.filter(q => state.quests[q.id]).length;
      badge.textContent = `${done}/${experienceQuests.length}`;
    } else if (t === "achievement") {
      const done = achievements.filter(a => state.achievements[a.id]).length;
      badge.textContent = `${done}/${achievements.length}`;
    }
  });
}

questTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    questTabs.forEach(t => t.classList.toggle("is-on", t === tab));
    currentTab = tab.dataset.tab;
    renderQuests();
  });
});

renderQuests();
updateTabBadges();
refreshScore(0);

// ---------- KML Export ----------
function escapeXml(s) {
  return String(s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function buildKml() {
  const folders = {};
  localSpots.forEach((s) => {
    const day = s.day || "Sonstige";
    folders[day] = folders[day] || [];
    folders[day].push(s);
  });
  const stayMarkers = stops.map((stp, i) => ({
    name: `Stop ${i+1}: ${stp.name}`,
    place: stp.place,
    coords: STAY_COORDS[i],
    desc: stp.mood
  })).filter(s => s.coords);

  const placemark = (s, kind = "spot") => {
    const [lat, lng] = s.coords.split(",").map(x => x.trim());
    const desc = (s.story || s.note || s.desc || "").replace(/\s+/g, " ").trim();
    const styleUrl = kind === "stay" ? "#stay" : "#spot";
    return `    <Placemark>
      <name>${escapeXml(s.name)}</name>
      <description>${escapeXml(desc)}</description>
      <styleUrl>${styleUrl}</styleUrl>
      <Point><coordinates>${lng},${lat}</coordinates></Point>
    </Placemark>`;
  };

  let kml = `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
<Document>
  <name>Korfu Reiseplan</name>
  <description>22 Spots + 4 Apartments fuer unsere Korfu-Woche.</description>
  <Style id="spot"><IconStyle><color>ff5161ef</color><Icon><href>http://maps.google.com/mapfiles/kml/shapes/placemark_circle.png</href></Icon></IconStyle></Style>
  <Style id="stay"><IconStyle><color>ff8e7c27</color><Icon><href>http://maps.google.com/mapfiles/kml/shapes/lodging.png</href></Icon></IconStyle></Style>
`;
  if (stayMarkers.length) {
    kml += `  <Folder><name>Apartments</name>\n`;
    stayMarkers.forEach(s => { kml += placemark(s, "stay") + "\n"; });
    kml += `  </Folder>\n`;
  }
  Object.keys(folders).forEach(day => {
    kml += `  <Folder><name>${escapeXml(day)}</name>\n`;
    folders[day].forEach(s => { kml += placemark(s, "spot") + "\n"; });
    kml += `  </Folder>\n`;
  });
  kml += `</Document>
</kml>`;
  return kml;
}

const STAY_COORDS = [
  "39.795000, 19.706800",  // Antzela / Sidari
  "39.731000, 19.881700",  // Akrogiali / Barbati
  "39.481200, 19.928900",  // Costas / Mesongi
  "39.387200, 20.110100"   // Kalypso / Kavos
];

const kmlDownloadBtn = document.querySelector("#kmlDownload");
const kmlMapsLink = document.querySelector("#kmlMapsOpen");
if (kmlDownloadBtn) {
  kmlDownloadBtn.addEventListener("click", () => {
    const kml = buildKml();
    const blob = new Blob([kml], { type: "application/vnd.google-earth.kml+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "korfu-reiseplan.kml";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 100);
  });
}
if (kmlMapsLink) {
  kmlMapsLink.href = "https://www.google.com/maps/d/u/0/?action=open";
  kmlMapsLink.title = "Erst KML herunterladen, dann in Google My Maps -> Neue Karte -> KML importieren";
}

// ---------- Misc ----------
const miloToggle = document.querySelector("#miloToggle");
miloToggle.addEventListener("click", () => {
  const active = miloToggle.classList.toggle("is-on");
  miloToggle.setAttribute("aria-pressed", String(active));
  miloToggle.textContent = active ? "Milo bekommt Extra-Liebe danach" : "Milo bleibt zuhause";
});

const heroImage = document.querySelector(".hero__image");
window.addEventListener("scroll", () => {
  const offset = Math.min(window.scrollY * 0.14, 90);
  heroImage.style.transform = `translateY(${offset}px) scale(1.04)`;
}, { passive: true });
