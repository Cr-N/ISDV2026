# Proiectul Manhattan – Dosar istoric interactiv 

Proiect web HTML/CSS/JavaScript pentru concursul ISDV 2026, secțiunea Istorie – Pagini Web.

## Ce este nou în V2

- Rezumat transformat în „briefing declasificat” cu paragrafe extensibile.
- Secțiunea „Ce este și de ce contează?” cu flip cards și diagramă radială.
- Document adnotat pentru Scrisoarea Einstein–Szilárd.
- Timeline interactiv extins, cu conexiuni istorice.
- Harta Leaflet/OSM a fost înlocuită cu iframe-uri oficiale NPS pentru:
  - cele trei locații principale;
  - Hanford;
  - Los Alamos;
  - Oak Ridge.
- Peg board cu filtre: oameni de știință, militar, politic, emigranți europeni, etică.
- Arbore tehnologic uraniu/plutoniu.
- Animații pe pași pentru designul gun-type și designul cu implozie.
- Countdown interactiv pentru testul Trinity.
- Panou comparativ Hiroshima/Nagasaki.
- „Undă de șoc istorică” pentru impactul pe termen lung.
- Tribunal moral interactiv.
- Secțiune de limitări și nivel de certitudine.
- Arhivă digitală filtrabilă pentru surse.

## Librării/Resurse folosite

- Bootstrap 5: layout, navbar, butoane, design responsive .
- AOS.js.
- Font Awesome.

## Structura fișierelor

```text
manhattan-isdv/
├── index.html
├── css/
│   ├── style.css
│   ├── timeline.css
│   ├── map.css
│   └── board.css
├── js/
│   ├── data.js
│   ├── timeline.js
│   ├── map.js
│   ├── board.js
│   └── main.js
└── assets/
    ├── images/
    ├── documents/
    └── icons/
```

## Cum rulezi

Deschide `index.html` în browser. Pentru hărți și librăriile externe este nevoie de conexiune la internet.

## Recomandare pentru imagini

Momentan site-ul folosește mai ales elemente vizuale generate prin CSS și surse externe prin link. Pentru versiunea finală, descarcă imagini istorice cu licență clară și pune-le în `assets/images/`, apoi înlocuiește placeholder-ele cu fotografii reale.


## Imagini pentru peg board

Pune imaginile descărcate în folderul `assets/images/` cu exact aceste nume:

- `oppenheimer.jpg`
- `groves.jpg`
- `truman.jpg`
- `fenri.jpg` pentru Enrico Fermi (`fermi.jpg` funcționează ca fallback dacă redenumești fișierul)
- `szilard.jpg`
- `teller.png`
- `roosevelt.jpg`

Dacă o imagine lipsește, cardul afișează automat inițiala personajului, deci layout-ul nu se strică.
