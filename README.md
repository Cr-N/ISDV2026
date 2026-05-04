# Proiectul Manhattan – Dosarul care a schimbat lumea

Prototip web interactiv pentru Concursul Național Interdisciplinar „Istorie și Societate în Dimensiune Virtuală” 2026, secțiunea Istorie – Pagini Web.

## Tehnologii folosite

- HTML5
- CSS3
- JavaScript vanilla
- Bootstrap 5 pentru layout responsive, navbar, modale și taburi
- Leaflet.js pentru harta interactivă
- AOS.js pentru animații discrete la scroll
- Font Awesome pentru iconuri

## De ce Leaflet.js?

Leaflet este folosit doar pentru componenta de hartă. Nu este un framework de aplicație și nu controlează întregul proiect. Este potrivit deoarece oferă rapid marker-e, popup-uri, zoom și trasee vizuale între locații istorice.

## Structura proiectului

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

## Funcționalități implementate

- Hero section cu atmosferă de dosar declasificat
- Cronologie clickable
- Hartă interactivă cu marker-e pentru Los Alamos, Oak Ridge, Hanford, Chicago, Trinity, Hiroshima și Nagasaki
- Peg board interactiv cu personaje-cheie
- Modale cu fișe istorice
- Simulator vizual simplificat pentru reacția în lanț
- Secțiune Little Boy vs Fat Man
- Exercițiu interactiv de decizie morală
- Bibliografie pe taburi

## Cum rulezi proiectul

Deschide `index.html` în browser. Pentru hartă și librăriile externe este nevoie de conexiune la internet, deoarece Bootstrap, Leaflet, AOS și tile-urile OpenStreetMap sunt încărcate din CDN.

## Observații

Folderul `assets/images` este pregătit pentru imagini locale. În versiunea finală se pot adăuga imagini oficiale din sursele recomandate, cu verificarea condițiilor de reutilizare și creditare.
