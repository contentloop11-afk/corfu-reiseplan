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
    image: "assets/generated-corfu-watercolor-hero.png",
    note: "Steilkueste, Abendlicht, gut kombinierbar mit Cape Drastis.",
    story: "Der Sunset-Stop schlechthin im Norden. Steilkueste mit kleiner Bar oben, der Strand selbst ist nur per Treppe erreichbar — wer will, geht runter, ansonsten reicht das Abendlicht von oben.",
    coords: "39.787611, 19.666557",
    day: "Norden"
  },
  {
    name: "Canal d'Amour",
    area: "Sidari",
    type: "Bucht",
    image: "assets/antzela-apartments.jpg",
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
    image: "assets/generated-corfu-scribble-map.png",
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
    image: "assets/generated-corfu-scribble-map.png",
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
    image: "assets/akrogiali-apartments-lemnos.jpg",
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
    image: "assets/generated-corfu-watercolor-hero.png",
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
    image: "assets/generated-booking-collage.png",
    note: "Bergdorf ueber dem Suedosten, weniger Beach, mehr Blick und langsames Durchfahren.",
    story: "Eines der hoechstgelegenen Doerfer Korfus, kleine weisse Haeuser uebereinander gestapelt. Ein paar Tavernen, weniger Touristen. Der Blick auf Lefkimmi und die Lagune ist der Grund fuer den Umweg.",
    coords: "39.456684, 19.957776",
    day: "Sueden"
  },
  {
    name: "Boukari",
    area: "Suedostkueste",
    type: "Essen / Wasser",
    image: "assets/generated-corfu-watercolor-hero.png",
    note: "Kleine Kuestenlinie fuer ruhigeres Essen am Wasser, sinnvoll von Costas aus.",
    story: "Kleines Fischerdorf direkt am Wasser, ein paar Tavernen mit Tischen quasi im Meer. Klassisches Sundowner-Mittagessen, wenn man von Costas aus losgeht.",
    coords: "39.459542, 19.977214",
    day: "Sueden"
  },
  {
    name: "Gardenos Beach",
    area: "Sueden",
    type: "Strand",
    image: "assets/kalypso-studios-kavos.jpg",
    note: "Laengerer, entspannter Strand westlich von Kavos, weniger Kavos-Trubel.",
    story: "Breiter, flach abfallender Sandstrand, ein paar Tavernen, kaum Hotels. Wer Kavos zu laut findet, bekommt hier 10 Minuten weiter den entspannten Gegenentwurf.",
    coords: "39.392931, 20.027148",
    day: "Sueden"
  },
  {
    name: "Arkoudilas Beach",
    area: "Kavos",
    type: "wilder Strand",
    image: "assets/kalypso-studios-kavos.jpg",
    note: "Rauer Suedspitzen-Spot, direkt passend zum Kalypso-Cluster.",
    story: "Der wildeste Strand der Suedspitze. Steiler Trampelpfad runter durch Wald, dann Sand und meist niemand da. Im Sommer schwierig wegen Sonne — Schatten gibt es nicht. Vom Kalypso aus mit Fiat 15 Minuten.",
    coords: "39.365841, 20.101741",
    day: "Sueden"
  },
  {
    name: "Alykes Lefkimmi",
    area: "Lefkimmi",
    type: "Salinen",
    image: "assets/generated-corfu-scribble-map.png",
    note: "Flache Salinen-/Naturzone, ruhigere Alternative wenn man schon im Sueden ist.",
    story: "Alte Salzgewinnungs-Felder, jetzt Naturschutzgebiet. Sehr flach, sehr still, viele Voegel. Nicht spektakulaer, aber schoen zum Streunen wenn man von Lefkimmi aus die Schleife nach Sueden macht.",
    coords: "39.437857, 20.059674",
    day: "Sueden"
  }
];

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
      const newVal = !state.visited[spot.name];
      state.visited[spot.name] = newVal;
      saveState(state);
      updateCounter();
      renderSpotCards();
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
