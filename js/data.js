const timelineEvents = [
  {
    date: "1938",
    title: "Descoperirea fisiunii nucleare",
    text: "Otto Hahn și Fritz Strassmann au observat fisiunea, iar Lise Meitner și Otto Frisch au explicat fenomenul. Descoperirea a arătat că energia nucleului putea fi eliberată în cantități uriașe.",
    why: "Este punctul științific de pornire al întregului proiect.",
    source: "https://www.nps.gov/mapr/learn/manhattan-project.htm"
  },
  {
    date: "2 august 1939",
    title: "Scrisoarea Einstein–Szilárd",
    text: "Leo Szilárd a redactat, iar Albert Einstein a semnat, o scrisoare către Franklin D. Roosevelt care avertiza asupra potențialului militar al uraniului și asupra riscului german.",
    why: "Transformă o temere științifică într-o problemă de securitate națională.",
    source: "https://ahf.nuclearmuseum.org/ahf/key-documents/einstein-szilard-letter/"
  },
  {
    date: "13 august 1942",
    title: "Manhattan Engineer District",
    text: "Armata americană creează structura administrativă care va conduce programul. Generalul Leslie Groves devine figura managerială centrală a proiectului.",
    why: "Proiectul trece de la cercetare la mobilizare industrială și militară.",
    source: "https://ahf.nuclearmuseum.org/ahf/history/big-science-1942/"
  },
  {
    date: "2 decembrie 1942",
    title: "Chicago Pile-1",
    text: "Echipa condusă de Enrico Fermi realizează prima reacție nucleară controlată autosusținută, sub tribunele stadionului Stagg Field din Chicago.",
    why: "Demonstrează practic posibilitatea controlului reacției în lanț.",
    source: "https://www.energy.gov/ne/articles/10-intriguing-facts-about-worlds-first-nuclear-chain-reaction"
  },
  {
    date: "1943",
    title: "Los Alamos devine laborator central",
    text: "Oppenheimer coordonează laboratorul unde se proiectează armele nucleare. Aici se reunesc fizicieni, chimiști, ingineri și experți în explozivi.",
    why: "Los Alamos este nodul intelectual al proiectului.",
    source: "https://ahf.nuclearmuseum.org/ahf/location/los-alamos-nm/"
  },
  {
    date: "1943–1945",
    title: "Oak Ridge și Hanford produc materialul fisionabil",
    text: "Oak Ridge se concentrează pe uraniu îmbogățit, iar Hanford pe producția industrială de plutoniu. Cele două centre furnizează materialul necesar armelor.",
    why: "Fără infrastructura industrială, proiectarea teoretică nu ar fi produs o armă reală.",
    source: "https://www.nps.gov/mapr/learn/manhattan-project.htm"
  },
  {
    date: "16 iulie 1945",
    title: "Testul Trinity",
    text: "În New Mexico are loc prima detonare nucleară din istorie. Dispozitivul testat, numit Gadget, validează designul cu implozie pe bază de plutoniu.",
    why: "Confirmă că arma nucleară este funcțională înainte de folosirea ei militară.",
    source: "https://www.osti.gov/opennet/manhattan-project-history/Events/1945/trinity.htm"
  },
  {
    date: "6 august 1945",
    title: "Hiroshima",
    text: "Bomba Little Boy, bazată pe uraniu-235, este detonată deasupra orașului Hiroshima. Impactul uman este devastator.",
    why: "Este prima folosire a unei arme nucleare în război.",
    source: "https://www.trumanlibrary.gov/education/lesson-plans/atomic-bomb-august-6-1945"
  },
  {
    date: "9 august 1945",
    title: "Nagasaki",
    text: "Bomba Fat Man, bazată pe plutoniu și design cu implozie, este detonată deasupra orașului Nagasaki.",
    why: "Confirmă intrarea lumii într-o nouă eră militară și politică.",
    source: "https://nagasakipeace.jp/en/reference/materials/kids/higai.html"
  }
];

const mapLocations = [
  {
    id: "los-alamos",
    name: "Los Alamos",
    coords: [35.8800, -106.3031],
    label: "LA",
    type: "Laborator",
    text: "Laboratorul de proiectare și asamblare a armelor. Oppenheimer a coordonat aici integrarea fizicii teoretice cu ingineria explozivilor.",
    source: "https://ahf.nuclearmuseum.org/ahf/location/los-alamos-nm/"
  },
  {
    id: "oak-ridge",
    name: "Oak Ridge",
    coords: [36.0104, -84.2696],
    label: "OR",
    type: "Uraniu îmbogățit",
    text: "Centrul de îmbogățire a uraniului. Instalațiile Y-12, K-25 și S-50 au contribuit la materialul folosit pentru Little Boy.",
    source: "https://www.energy.gov/orem/history"
  },
  {
    id: "hanford",
    name: "Hanford",
    coords: [46.5507, -119.4889],
    label: "HF",
    type: "Plutoniu",
    text: "Complex industrial pentru producția de plutoniu. Reactorul B a fost primul reactor de producție de plutoniu la scară industrială.",
    source: "https://www.hanford.gov/page.cfm/BReactor"
  },
  {
    id: "chicago",
    name: "Chicago",
    coords: [41.7897, -87.5997],
    label: "CP",
    type: "Chicago Pile-1",
    text: "Locul primei reacții nucleare controlate autosusținute, coordonate de Enrico Fermi la 2 decembrie 1942.",
    source: "https://www.energy.gov/ne/articles/10-intriguing-facts-about-worlds-first-nuclear-chain-reaction"
  },
  {
    id: "trinity",
    name: "Trinity Site",
    coords: [33.6773, -106.4754],
    label: "TR",
    type: "Primul test nuclear",
    text: "Locul testului Trinity din 16 iulie 1945, prima detonare nucleară din istorie.",
    source: "https://www.osti.gov/opennet/manhattan-project-history/Events/1945/trinity.htm"
  },
  {
    id: "hiroshima",
    name: "Hiroshima",
    coords: [34.3853, 132.4553],
    label: "HI",
    type: "Little Boy",
    text: "Primul oraș lovit cu o armă nucleară, la 6 august 1945. Bomba folosită a fost Little Boy.",
    source: "https://www.city.hiroshima.lg.jp/english/peace/1029920/1009857.html"
  },
  {
    id: "nagasaki",
    name: "Nagasaki",
    coords: [32.7503, 129.8777],
    label: "NA",
    type: "Fat Man",
    text: "Orașul lovit la 9 august 1945 cu bomba Fat Man, bazată pe plutoniu și design cu implozie.",
    source: "https://nagasakipeace.jp/en/reference/materials/kids/higai.html"
  }
];

const people = {
  oppenheimer: {
    name: "J. Robert Oppenheimer",
    role: "Director științific la Los Alamos",
    text: "A coordonat laboratorul în care au fost proiectate și integrate armele nucleare. Rolul său a fost atât științific, cât și organizațional.",
    connections: "Conectat cu Groves, Los Alamos, Trinity, dezbaterea morală postbelică.",
    source: "https://ahf.nuclearmuseum.org/ahf/profile/j-robert-oppenheimer/"
  },
  groves: {
    name: "Leslie R. Groves",
    role: "Director militar al Proiectului Manhattan",
    text: "A controlat construcțiile, securitatea, prioritățile industriale și managementul întregului proiect.",
    connections: "Conectat cu Oak Ridge, Hanford, Los Alamos și decizia de transformare rapidă a cercetării în armă.",
    source: "https://ahf.nuclearmuseum.org/ahf/profile/leslie-r-groves/"
  },
  truman: {
    name: "Harry S. Truman",
    role: "Președinte al SUA în 1945",
    text: "A moștenit proiectul după moartea lui Roosevelt și a aprobat folosirea bombelor asupra Japoniei.",
    connections: "Conectat cu Hiroshima, Nagasaki, Potsdam și decizia politică finală.",
    source: "https://www.trumanlibrary.gov/museum/presidential-years/decision-to-drop-the-bomb"
  },
  fermi: {
    name: "Enrico Fermi",
    role: "Fizician; coordonator Chicago Pile-1",
    text: "A condus prima reacție nucleară controlată autosusținută și a contribuit la dezvoltarea reactoarelor.",
    connections: "Conectat cu Chicago, Hanford, fizica reactoarelor și producția de plutoniu.",
    source: "https://ahf.nuclearmuseum.org/ahf/profile/enrico-fermi/"
  },
  szilard: {
    name: "Leo Szilárd",
    role: "Fizician; avertisment nuclear și critic moral",
    text: "A avut un rol crucial în Scrisoarea Einstein–Szilárd și ulterior în Petiția Szilárd, care cerea evitarea folosirii surpriză a bombei.",
    connections: "Conectat cu Einstein, Roosevelt, Chicago și dezbaterea etică.",
    source: "https://ahf.nuclearmuseum.org/ahf/key-documents/szilard-petition/"
  },
  teller: {
    name: "Edward Teller",
    role: "Fizician teoretician",
    text: "A lucrat în proiect și a devenit ulterior o figură centrală în dezvoltarea bombei cu hidrogen.",
    connections: "Conectat cu emigranții europeni, Los Alamos și dezvoltarea ulterioară a armamentului nuclear.",
    source: "https://ahf.nuclearmuseum.org/ahf/profile/edward-teller/"
  },
  roosevelt: {
    name: "Franklin D. Roosevelt",
    role: "Președintele care a inițiat programul",
    text: "A primit avertismentul Einstein–Szilárd și a aprobat trecerea la un program atomic de amploare în timpul războiului.",
    connections: "Conectat cu scrisoarea din 1939, mobilizarea statului american și începutul proiectului.",
    source: "https://ahf.nuclearmuseum.org/ahf/profile/franklin-d-roosevelt/"
  }
};

const overviewCards = {
  military: {
    title: "Program militar secret",
    body: "Proiectul Manhattan a fost un program militaro-științific secret al Statelor Unite, realizat cu sprijin britanic și canadian. Scopul lui imediat a fost construirea unei arme nucleare înainte ca Germania nazistă să poată ajunge la același rezultat.",
    source: "https://www.nps.gov/mapr/learn/manhattan-project.htm"
  },
  science: {
    title: "Proiect științific și industrial",
    body: "Proiectul a transformat cercetarea asupra fisiunii nucleare într-un sistem industrial uriaș: reactoare, separare izotopică, producție de plutoniu, proiectarea mecanismelor și calcul teoretic.",
    source: "https://ahf.nuclearmuseum.org/ahf/history/big-science-1942/"
  },
  history: {
    title: "Moment de ruptură în istorie",
    body: "Folosirea bombelor atomice asupra Hiroshimei și Nagasaki a marcat finalul războiului în Pacific, dar și începutul erei nucleare, al cursei înarmărilor și al dezbaterilor globale despre responsabilitatea științei.",
    source: "https://www.trumanlibrary.gov/education/lesson-plans/atomic-bomb-august-6-1945"
  }
};

const decisions = {
  demo: {
    title: "Demonstrație publică",
    text: "Această idee a fost apropiată de recomandările Raportului Franck: o demonstrație pe o zonă nelocuită ar fi putut avertiza Japonia și lumea fără lovirea directă a unui oraș. Criticii spuneau însă că o demonstrație eșuată ar fi diminuat efectul psihologic."
  },
  direct: {
    title: "Folosire militară directă",
    text: "Aceasta a fost opțiunea aleasă. Argumentul principal era grăbirea sfârșitului războiului și evitarea unei invazii terestre. Critica majoră: costul civil imens și începutul unei epoci a distrugerii nucleare."
  },
  wait: {
    title: "Așteptare și presiune diplomatică",
    text: "Unii istorici discută rolul intrării URSS în război împotriva Japoniei și slăbirea militară a Japoniei. Totuși, decidenții americani nu știau sigur cât va dura capitularea și urmăreau încheierea rapidă a conflictului."
  },
  warning: {
    title: "Avertisment explicit",
    text: "Petiția Szilárd cerea ca președintele să nu autorizeze folosirea surpriză fără o analiză morală și politică. Un avertisment putea reduce caracterul de șoc, dar ar fi păstrat o minimă deschidere diplomatică."
  }
};

const sources = {
  primary: [
    ["Scrisoarea Einstein–Szilárd", "Documentul care a avertizat administrația Roosevelt asupra riscului unei arme atomice.", "https://ahf.nuclearmuseum.org/ahf/key-documents/einstein-szilard-letter/"],
    ["Petiția Szilárd", "Document moral și politic prin care cercetători cereau evitarea folosirii surpriză a bombei.", "https://ahf.nuclearmuseum.org/ahf/key-documents/szilard-petition/"],
    ["Declarația lui Truman din 6 august 1945", "Comunicatul prezidențial prin care SUA anunță folosirea bombei asupra Hiroshimei.", "https://www.trumanlibrary.gov/library/public-papers/93/statement-president-announcing-use-bomb-hiroshima"],
    ["National Security Archive", "Documente declasificate despre decizia de folosire a bombei.", "https://nsarchive.gwu.edu/document/28516-document-15-minutes-third-target-committee-meeting-washington-may-28-1945-top-secret"]
  ],
  secondary: [
    ["National Park Service – Manhattan Project", "Sinteză istorică despre oamenii, locurile și semnificația proiectului.", "https://www.nps.gov/mapr/learn/manhattan-project.htm"],
    ["Department of Energy – Oak Ridge", "Istoria centrului de producție și îmbogățire a uraniului.", "https://www.energy.gov/orem/history"],
    ["Atomic Heritage Foundation", "Articole, biografii și mărturii despre participanții la proiect.", "https://ahf.nuclearmuseum.org/"],
    ["IAEA – Non-Proliferation Treaty", "Contextul instituțional al non-proliferării nucleare.", "https://www.iaea.org/topics/non-proliferation-treaty"]
  ],
  visuals: [
    ["Trinity test", "Imagini și context despre primul test nuclear.", "https://www.nps.gov/mapr/learn/historyculture/trinity.htm"],
    ["Hărți Manhattan Project", "Hărți oficiale ale siturilor principale.", "https://www.nps.gov/mapr/planyourvisit/maps.htm"],
    ["Little Boy vs Fat Man", "Explicații și diagrame despre cele două designuri.", "https://www.lanl.gov/media/publications/the-vault/1023-a-tale-of-two-bomb-designs"],
    ["Reactorul B Hanford", "Fotografii și informații despre producția de plutoniu.", "https://www.hanford.gov/page.cfm/BReactor"]
  ]
};
