# Korfu Reiseplan

Persönliche, statische Single-Page-Website für unsere Korfu-Woche im Mai. Notizblatt-Look, klickbare Insel-Karte, Polaroid-Pinnwand mit 22 Spots und ein Modal pro Spot mit Foto, GPS, kurzer Story, eigenem Notizfeld und „Besucht"-Stempel.

## Lokal öffnen

```bash
python3 -m http.server 4173
# dann http://127.0.0.1:4173
```

## Aufbau

- `index.html` — Markup, Hero, Route, Spots, Apartments, Buchungen, Notizen
- `styles.css` — Notizblatt/Aquarell-Stil, Polaroid-Cards, Modal, Stempel-Animation
- `script.js` — Spot-Daten, Map-Pin-Sync, Modal-Logik, localStorage für Notizen + Visited-State
- `assets/` — Hero-Bilder, Apartment-Fotos, Spot-Bilder (Wikimedia Commons)

## Spot-Modal

Klick auf eine Polaroid-Karte oder einen Pin auf der Karte:

- Großes Foto, GPS-Koordinaten, Direktlink zu Google Maps
- Kurze Story zum Ort
- Eigenes Notizfeld (während der Reise selbst eintippen)
- „Besucht"-Stempel-Toggle mit Stempel-Animation
- Counter oben in der Sektion zeigt „X von 22 Spots entdeckt"

Notizen und Stempel werden in `localStorage` unter dem Key `corfu-guide-v1` gespeichert — bleiben also pro Browser/Gerät.

## Datenquellen

- Spot-Koordinaten: OpenStreetMap / Wikipedia
- Spot-Fotos: Wikimedia Commons (siehe `docs/spot-sources.md`)
- Reiseguide-Inhalte: Transkripte mehrerer Korfu-Reiseführer-Videos

## Privates

Persönliche Sprachnotizen (`audio/`), Buchungs-Screenshots (`assets/booking-*.png`) und identifizierende Transkripte sind via `.gitignore` ausgeschlossen — nur die generierte Aquarell-Collage zeigt die Buchungen stilisiert.
