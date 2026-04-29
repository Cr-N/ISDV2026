const scenes = {
    intro: {
        title: "Introducere",
        context: "Proiectul Manhattan a fost un program secret din timpul celui de-Al Doilea Război Mondial pentru dezvoltarea bombei atomice.",
        choices: [
            { text: "Începe simularea", next: "los_alamos" }
        ]
    },

    los_alamos: {
        title: "Los Alamos",
        context: "Principalul centru de cercetare unde a fost proiectată bomba atomică.",
        choices: [
            { text: "Continuați cercetarea", next: "oak_ridge" },
            { text: "Opriți cercetarea", next: "end_stop" }
        ]
    },

    oak_ridge: {
        title: "Oak Ridge",
        context: "Locul unde se producea uraniu pentru bombă, cu costuri uriașe.",
        choices: [
            { text: "Continuați finanțarea", next: "trinity" },
            { text: "Opriți finanțarea", next: "end_fail" }
        ]
    },

    trinity: {
        title: "Testul Trinity",
        context: "Primul test nuclear din istorie, în 1945.",
        choices: [
            { text: "Autorizați testul", next: "hiroshima" },
            { text: "Anulați testul", next: "end_uncertain" }
        ]
    },

    hiroshima: {
        title: "Hiroshima",
        context: "Decizia de a folosi bomba pentru a forța capitularea Japoniei.",
        choices: [
            { text: "Folosiți bomba", next: "end_real" },
            { text: "Nu o folosiți", next: "end_alt" }
        ]
    },

    end_real: {
        title: "Realitatea istorică",
        context: "Bomba atomică a fost folosită în 1945, contribuind la sfârșitul războiului.",
        choices: [
            { text: "Reîncepe", next: "intro" }
        ]
    },

    end_alt: {
        title: "Rezultat alternativ",
        context: "Războiul ar fi putut continua mai mult timp.",
        choices: [
            { text: "Reîncepe", next: "intro" }
        ]
    },

    end_fail: {
        title: "Eșec",
        context: "Fără resurse, proiectul nu poate continua.",
        choices: [
            { text: "Reîncepe", next: "intro" }
        ]
    },

    end_stop: {
        title: "Proiect oprit",
        context: "Bomba nu a mai fost dezvoltată.",
        choices: [
            { text: "Reîncepe", next: "intro" }
        ]
    },

    end_uncertain: {
        title: "Rezultat incert",
        context: "Fără test, eficiența rămâne necunoscută.",
        choices: [
            { text: "Reîncepe", next: "intro" }
        ]
    }
};

let current = "intro";
let step = 0;

function render() {
    const scene = scenes[current];

    document.getElementById("sim-title").innerText = scene.title;
    document.getElementById("sim-context").innerText = scene.context;
    document.getElementById("sim-progress").innerText =
        current === "intro" ? "" : "Pasul " + step;

    const choicesDiv = document.getElementById("sim-choices");
    choicesDiv.innerHTML = "";

    scene.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.className = "btn btn-dark w-100 my-2";
        btn.innerText = choice.text;

        btn.onclick = () => {
            if (choice.next === "intro") {
                step = 0;
            } else {
                step++;
            }

            current = choice.next;
            render();
        };

        choicesDiv.appendChild(btn);
    });
}

const map = L.map('map').setView([39.5, -98.35], 4); // USA center

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// LOCAȚII



// Los Alamos
L.marker([35.8800, -106.3031]).addTo(map)
    .bindPopup("<b>Los Alamos</b><br>Locul unde a fost proiectată bomba atomică.");

// Oak Ridge
L.marker([36.0104, -84.2696]).addTo(map)
    .bindPopup("<b>Oak Ridge</b><br>Îmbogățirea uraniului.");

// Hanford
L.marker([46.5500, -119.5000]).addTo(map)
    .bindPopup("<b>Hanford</b><br>Producerea plutoniului.");

// Trinity Site
L.marker([33.6772, -106.4754]).addTo(map)
    .bindPopup("<b>Trinity Test</b><br>Primul test nuclear (1945).");

// Hiroshima
L.marker([34.3853, 132.4553]).addTo(map)
        .bindPopup(`
        <h5>Los Alamos</h5>
        <p>Locul unde s-a proiectat bomba atomică.</p>
        `)
marker.on('click', function() {
    map.setView(this.getLatLng(), 100);
});

render();