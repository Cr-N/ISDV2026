const timelineEvents = [
  {
    date: "1938",
    title: "Descoperirea fisiunii nucleare",
    text: "Otto Hahn și Fritz Strassmann au observat fisiunea, iar Lise Meitner și Otto Frisch au explicat fenomenul. Descoperirea a arătat că energia nucleului putea fi eliberată în cantități uriașe.",
    why: "Este punctul științific de pornire al întregului proiect.",
    source: "https://www.nps.gov/mapr/learn/manhattan-project.htm",
    related: "Domeniu: fizică nucleară"
  },
  {
    date: "2 august 1939",
    title: "Scrisoarea Einstein–Szilárd",
    text: "Leo Szilárd a redactat, iar Albert Einstein a semnat, o scrisoare către Franklin D. Roosevelt care avertiza asupra potențialului militar al uraniului și asupra riscului german.",
    why: "Transformă o temere științifică într-o problemă de securitate națională.",
    source: "https://ahf.nuclearmuseum.org/ahf/key-documents/einstein-szilard-letter/",
    related: "Conexiuni: Szilárd, Einstein, Roosevelt"
  },
  {
    date: "13 august 1942",
    title: "Manhattan Engineer District",
    text: "Armata americană creează structura administrativă care va conduce programul. La scurt timp, generalul Leslie Groves devine figura managerială centrală a proiectului.",
    why: "Proiectul trece de la cercetare la mobilizare industrială și militară.",
    source: "https://www.nps.gov/mapr/learn/manhattan-project.htm",
    related: "Conexiuni: Groves, armată, industrie"
  },
  {
    date: "2 decembrie 1942",
    title: "Chicago Pile-1",
    text: "Echipa condusă de Enrico Fermi realizează prima reacție nucleară controlată autosusținută, sub tribunele stadionului Stagg Field din Chicago.",
    why: "Demonstrează practic posibilitatea controlului reacției în lanț.",
    source: "https://www.energy.gov/ne/articles/10-intriguing-facts-about-worlds-first-nuclear-chain-reaction",
    related: "Conexiuni: Fermi, reactoare, plutoniu"
  },
  {
    date: "1943",
    title: "Los Alamos devine laborator central",
    text: "Oppenheimer coordonează laboratorul unde se proiectează armele nucleare. Aici se reunesc fizicieni, chimiști, ingineri și experți în explozivi.",
    why: "Los Alamos este nodul intelectual al proiectului.",
    source: "https://www.nps.gov/mapr/learn/manhattan-project.htm",
    related: "Locație: Los Alamos"
  },
  {
    date: "1943–1945",
    title: "Oak Ridge și Hanford produc materialul fisionabil",
    text: "Oak Ridge se concentrează pe uraniu îmbogățit, iar Hanford pe producția industrială de plutoniu. Cele două centre furnizează materialul necesar armelor.",
    why: "Fără infrastructura industrială, proiectarea teoretică nu ar fi produs o armă reală.",
    source: "https://www.nps.gov/mapr/learn/manhattan-project.htm",
    related: "Locații: Oak Ridge, Hanford"
  },
  {
    date: "16 iulie 1945",
    title: "Testul Trinity",
    text: "În New Mexico are loc prima detonare nucleară din istorie. Dispozitivul testat, numit Gadget, validează designul cu implozie pe bază de plutoniu.",
    why: "Confirmă că arma nucleară este funcțională înainte de folosirea ei militară.",
    source: "https://www.osti.gov/opennet/manhattan-project-history/Events/1945/trinity.htm",
    related: "Tehnologie: implozie, plutoniu"
  },
  {
    date: "6 august 1945",
    title: "Hiroshima",
    text: "Bomba Little Boy, bazată pe uraniu-235, este detonată deasupra orașului Hiroshima. Impactul uman este devastator.",
    why: "Este prima folosire a unei arme nucleare în război.",
    source: "https://www.city.hiroshima.lg.jp/english/peace/1029920/1009857.html",
    related: "Armă: Little Boy"
  },
  {
    date: "9 august 1945",
    title: "Nagasaki",
    text: "Bomba Fat Man, bazată pe plutoniu și design cu implozie, este detonată deasupra orașului Nagasaki.",
    why: "Confirmă intrarea lumii într-o nouă eră militară și politică.",
    source: "https://nagasakipeace.jp/en/reference/materials/kids/higai.html",
    related: "Armă: Fat Man"
  },
  {
    date: "14 august 1945",
    title: "Japonia anunță capitularea",
    text: "După bombardamentele atomice și intrarea URSS în războiul împotriva Japoniei, guvernul japonez anunță acceptarea capitulării.",
    why: "Încheie războiul din Pacific și deschide lumea postbelică nucleară.",
    source: "https://www.trumanlibrary.gov/education/lesson-plans/atomic-bomb-august-6-1945",
    related: "Consecință: finalul războiului în Pacific"
  }
];

const people = {
  oppenheimer: {
    name: "J. Robert Oppenheimer",
    role: "Director științific la Los Alamos",
    text: "A coordonat laboratorul în care au fost proiectate și integrate armele nucleare. Rolul său a fost atât științific, cât și organizațional.",
    contribution: "Recrutarea elitelor științifice, coordonarea designului armelor și integrarea cercetării teoretice cu ingineria practică.",
    moral: "După război a devenit una dintre figurile centrale ale dezbaterii despre responsabilitatea savantului.",
    connections: "Conectat cu Groves, Los Alamos, Trinity, dezbaterea morală postbelică.",
    source: "https://ahf.nuclearmuseum.org/ahf/profile/j-robert-oppenheimer/"
  },
  groves: {
    name: "Leslie R. Groves",
    role: "Director militar al Proiectului Manhattan",
    text: "A controlat construcțiile, securitatea, prioritățile industriale și managementul întregului proiect.",
    contribution: "A coordonat relația dintre armată, corporații, universități și laboratoare secrete.",
    moral: "Reprezintă dimensiunea militar-administrativă a proiectului: eficiență, secretizare și obiectiv strategic.",
    connections: "Conectat cu Oak Ridge, Hanford, Los Alamos și decizia de transformare rapidă a cercetării în armă.",
    source: "https://ahf.nuclearmuseum.org/ahf/profile/leslie-r-groves/"
  },
  truman: {
    name: "Harry S. Truman",
    role: "Președinte al SUA în 1945",
    text: "A moștenit proiectul după moartea lui Roosevelt și a aprobat folosirea bombelor asupra Japoniei.",
    contribution: "A primit informațiile despre proiect în aprilie 1945 și a luat decizia politică finală privind folosirea armelor.",
    moral: "Este figura politică legată de responsabilitatea folosirii bombei, nu de crearea ei tehnică.",
    connections: "Conectat cu Hiroshima, Nagasaki, Potsdam și decizia politică finală.",
    source: "https://www.trumanlibrary.gov/museum/presidential-years/decision-to-drop-the-bomb"
  },
  fermi: {
    name: "Enrico Fermi",
    role: "Fizician; coordonator Chicago Pile-1",
    text: "A condus prima reacție nucleară controlată autosusținută și a contribuit la dezvoltarea reactoarelor.",
    contribution: "Chicago Pile-1 a demonstrat controlul reacției în lanț și a deschis drumul producerii plutoniului în reactoare.",
    moral: "Fermi reprezintă transferul cercetării fundamentale către aplicații tehnice cu implicații istorice enorme.",
    connections: "Conectat cu Chicago, Hanford, fizica reactoarelor și producția de plutoniu.",
    source: "https://ahf.nuclearmuseum.org/ahf/profile/enrico-fermi/"
  },
  szilard: {
    name: "Leo Szilárd",
    role: "Fizician; avertisment nuclear și critic moral",
    text: "A avut un rol crucial în Scrisoarea Einstein–Szilárd și ulterior în Petiția Szilárd, care cerea evitarea folosirii surpriză a bombei.",
    contribution: "A formulat ideea reacției nucleare în lanț și a contribuit decisiv la alertarea administrației Roosevelt.",
    moral: "Este una dintre vocile centrale ale opoziției morale față de folosirea surpriză a bombei asupra Japoniei.",
    connections: "Conectat cu Einstein, Roosevelt, Chicago și dezbaterea etică.",
    source: "https://ahf.nuclearmuseum.org/ahf/key-documents/szilard-petition/"
  },
  teller: {
    name: "Edward Teller",
    role: "Fizician teoretician",
    text: "A lucrat în proiect și a devenit ulterior o figură centrală în dezvoltarea bombei cu hidrogen.",
    contribution: "A contribuit la probleme teoretice din Los Alamos și la direcția ulterioară a armamentului nuclear.",
    moral: "Teller ilustrează continuitatea dintre Proiectul Manhattan și intensificarea cursei nucleare postbelice.",
    connections: "Conectat cu emigranții europeni, Los Alamos și dezvoltarea ulterioară a armamentului nuclear.",
    source: "https://ahf.nuclearmuseum.org/ahf/profile/edward-teller/"
  },
  roosevelt: {
    name: "Franklin D. Roosevelt",
    role: "Președintele care a inițiat programul",
    text: "A primit avertismentul Einstein–Szilárd și a aprobat trecerea la un program atomic de amploare în timpul războiului.",
    contribution: "A creat cadrul politic care a permis colaborarea dintre armată, universități și corporații.",
    moral: "Decizia inițierii proiectului a fost alimentată de teama că Germania nazistă ar putea obține prima arma atomică.",
    connections: "Conectat cu scrisoarea din 1939, mobilizarea statului american și începutul proiectului.",
    source: "https://ahf.nuclearmuseum.org/ahf/profile/franklin-d-roosevelt/"
  }
};

const radialInfo = {
  physics: ["Fizică nucleară", "A explicat fisiunea, reacția în lanț și condițiile necesare pentru atingerea masei critice."],
  chemistry: ["Chimie", "A fost esențială pentru separarea și purificarea plutoniului, mai ales în instalațiile de la Hanford."],
  metal: ["Metalurgie", "Materialele fisile trebuiau prelucrate în forme precise, cu proprietăți fizice controlate."],
  industry: ["Industrie", "Proiectul a cerut fabrici uriașe, energie electrică, contractori industriali și logistică națională."],
  military: ["Armată", "Manhattan Engineer District a impus ritmul, secretizarea, securitatea și prioritățile strategice."],
  politics: ["Politică", "Deciziile Roosevelt și Truman au transformat cercetarea nucleară într-un program de stat și apoi într-o decizie militară."]
};

const documentNotes = {
  uranium: ["Uraniul", "Uraniul era materialul de interes deoarece izotopul U-235 putea susține o reacție în lanț. Dificultatea era separarea lui din uraniul natural, unde apare în proporție mică."],
  chain: ["Reacția în lanț", "O reacție în lanț apare când neutronii eliberați de o fisiune provoacă alte fisiuni. Dacă procesul se amplifică rapid, energia eliberată devine enormă."],
  germany: ["Germania nazistă", "Temerea centrală era că Germania, cu cercetători de prim rang și un program nuclear propriu, ar putea ajunge prima la arma atomică. Retrospectiv, programul german s-a dovedit insuficient industrializat, dar acest lucru nu era clar atunci."],
  roosevelt: ["Franklin D. Roosevelt", "Scrisoarea a transformat o problemă științifică într-o problemă de securitate națională, determinând pași politici care au dus ulterior la Manhattan Engineer District."]
};

const npsMaps = {
  all: {
    title: "Cele trei locații principale",
    src: "https://www.nps.gov/maps/embed.html?mapId=9b558c7b-d98b-416b-944c-3929de019ddf",
    text: "Harta oficială NPS prezintă centrele majore ale proiectului: Los Alamos, Oak Ridge și Hanford.",
    note: "Aceasta este harta de ansamblu potrivită pentru introducerea secțiunii."
  },
  hanford: {
    title: "Hanford, Washington",
    src: "https://www.nps.gov/maps/embed.html?mapId=daecca55-af56-4e1f-a9d7-4b96e5744c8d",
    text: "Hanford a fost centrul producției industriale de plutoniu. Reactorul B și instalațiile chimice au făcut posibilă calea plutoniului.",
    note: "Conectat cu Trinity și Fat Man."
  },
  losAlamos: {
    title: "Los Alamos, New Mexico",
    src: "https://www.nps.gov/maps/embed.html?mapId=3ebb4ae9-6c66-4305-951e-dd9012d15ff6",
    text: "Los Alamos a fost laboratorul central de proiectare și asamblare a armelor, sub conducerea științifică a lui Oppenheimer.",
    note: "Conectat cu designurile Little Boy, Fat Man și testul Trinity."
  },
  oakRidge: {
    title: "Oak Ridge, Tennessee",
    src: "https://www.nps.gov/maps/embed.html?mapId=97b8d01b-3da9-45b7-849d-c2e2ceacc027",
    text: "Oak Ridge a fost centrul de îmbogățire a uraniului, folosind metode precum separarea electromagnetică, difuzia gazoasă și difuzia termică.",
    note: "Conectat cu Little Boy."
  }
};

const techInfo = {
  cp1: ["Chicago Pile-1", "Prima reacție nucleară controlată autosusținută a demonstrat că reacția în lanț putea fi controlată și exploatată tehnic."],
  uranium: ["U-235", "Calea uraniului cerea separarea izotopului U-235 din uraniul natural. A fost dificilă industrial, dar designul final al bombei era relativ mai simplu."],
  plutonium: ["Pu-239", "Plutoniul putea fi produs în reactoare, dar proprietățile sale au făcut imposibil un design simplu de tip gun-type."],
  oak: ["Oak Ridge", "A folosit simultan mai multe metode de îmbogățire, deoarece nimeni nu era sigur care va funcționa suficient de repede la scară industrială."],
  hanford: ["Hanford", "A transformat principiul reactorului în producție industrială de plutoniu, folosind Reactorul B și extracție chimică."],
  littleBoy: ["Little Boy", "Bomba cu uraniu folosită la Hiroshima. Designul de tip gun-type nu a fost testat nuclear înainte, fiind considerat mai sigur tehnic."],
  trinity: ["Trinity / Fat Man", "Designul cu implozie a fost testat la Trinity și apoi folosit pentru Fat Man la Nagasaki."]
};

const gunSteps = [
  "Două mase subcritice de uraniu-235 sunt separate.",
  "Un mecanism de tip «tun» accelerează o masă spre cealaltă.",
  "Cele două piese se unesc și formează o masă supercritică.",
  "Reacția în lanț se amplifică rapid.",
  "Se eliberează o cantitate uriașă de energie."
];

const implosionSteps = [
  "Explozivi convenționali sunt dispuși simetric în jurul miezului de plutoniu.",
  "Undele de șoc trebuie sincronizate cu mare precizie.",
  "Miezul de plutoniu este comprimat spre centru.",
  "Compresia produce o stare supercritică.",
  "Designul este validat la Trinity și folosit pentru Fat Man."
];

const trinityMoments = [
  ["T - 10", "Asamblarea dispozitivului", "Dispozitivul «Gadget» a fost pregătit ca prototip cu plutoniu bazat pe implozie."],
  ["T - 5", "Turnul de 30 m", "Dispozitivul a fost ridicat pe un turn în deșertul Jornada del Muerto."],
  ["T - 2", "Vremea amână testul", "Testul a fost întârziat din cauza condițiilor meteo, un detaliu important pentru cronologia dimineții."],
  ["T - 0", "Detonarea", "La 16 iulie 1945, în jurul orei 5:30, are loc prima detonare nucleară din istorie."],
  ["21 kt", "Design validat", "Randamentul istoric oficial este de aproximativ 21 kilotone TNT, validând designul cu implozie folosit apoi la Fat Man."]
];

const impactData = {
  design: {
    hiroshima: ["Hiroshima", "Little Boy", "Design de tip gun-type, considerat mai simplu tehnic. A folosit două mase de uraniu-235 reunite rapid."],
    nagasaki: ["Nagasaki", "Fat Man", "Design cu implozie, bazat pe plutoniu-239. A fost mult mai complicat și a necesitat validarea prin Trinity."]
  },
  material: {
    hiroshima: ["Hiroshima", "Uraniu-235", "Materialul a fost produs prin îmbogățire la Oak Ridge."],
    nagasaki: ["Nagasaki", "Plutoniu-239", "Materialul a fost produs în reactoarele și instalațiile chimice de la Hanford."]
  },
  date: {
    hiroshima: ["Hiroshima", "6 august 1945", "Prima folosire a unei arme nucleare în război."],
    nagasaki: ["Nagasaki", "9 august 1945, ora 11:02", "A doua folosire a unei arme nucleare în război." ]
  },
  victims: {
    hiroshima: ["Hiroshima", "~140.000 morți până la finalul lui 1945", "Estimarea oficială locală explică amploarea catastrofei umane."],
    nagasaki: ["Nagasaki", "73.884 morți și 74.909 răniți", "Geografia orașului a limitat parțial unda de șoc, dar impactul uman a rămas uriaș." ]
  },
  sources: {
    hiroshima: ["Hiroshima", "Sursă oficială", "City of Hiroshima: date istorice și estimări ale victimelor."],
    nagasaki: ["Nagasaki", "Sursă oficială", "Nagasaki Peace: materiale istorice și cifre privind impactul." ]
  }
};

const waveInfo = {
  coldWar: ["Războiul Rece", "Arma nucleară a devenit parte centrală a competiției globale dintre SUA și URSS."],
  armsRace: ["Cursa înarmărilor", "După 1945, statele au urmărit să nu rămână în urmă tehnologic și strategic în domeniul nuclear."],
  iaea: ["IAEA", "Agenția Internațională pentru Energie Atomică a fost creată în 1957 pe fondul speranțelor și temerilor legate de tehnologia nucleară."],
  npt: ["Tratatul de Neproliferare Nucleară", "Deschis spre semnare în 1968 și intrat în vigoare în 1970, urmărește limitarea răspândirii armelor nucleare."],
  energy: ["Energie nucleară civilă", "Aceeași infrastructură intelectuală care a produs bomba a contribuit la dezvoltarea reactoarelor pentru energie."],
  bigScience: ["Big Science", "Proiectul a creat modelul modern al colaborării masive dintre stat, universități, armată și industrie."]
};

const sourceArchive = [
  { title: "Atomic Heritage Foundation – Scrisoarea Einstein–Szilárd", tags: ["primara", "etica"], section: "Context", desc: "Documentul care a avertizat administrația Roosevelt asupra potențialului militar al uraniului.", url: "https://ahf.nuclearmuseum.org/ahf/key-documents/einstein-szilard-letter/" },
  { title: "Atomic Heritage Foundation – Petiția Szilárd", tags: ["primara", "etica"], section: "Etică", desc: "Petiție redactată în 1945 împotriva folosirii surpriză a bombei asupra Japoniei.", url: "https://ahf.nuclearmuseum.org/ahf/key-documents/szilard-petition/" },
  { title: "National Security Archive – Szilárd Petition", tags: ["primara", "etica"], section: "Etică", desc: "Versiune arhivistică a documentului și contextului său politic.", url: "https://nsarchive.gwu.edu/document/28456-document-38-e-lapp-leo-szilard-et-al-petition-president-united-states-july-17-1945" },
  { title: "Truman Library – Declarația din 6 august 1945", tags: ["primara", "oficiala"], section: "Hiroshima", desc: "Comunicatul prezidențial care anunță folosirea bombei asupra Hiroshimei.", url: "https://www.trumanlibrary.gov/library/public-papers/93/statement-president-announcing-use-bomb-hiroshima" },
  { title: "OSTI – Trinity Test", tags: ["oficiala", "tehnologie"], section: "Trinity", desc: "Prezentare istorică a testului Trinity din 16 iulie 1945.", url: "https://www.osti.gov/opennet/manhattan-project-history/Events/1945/trinity.htm" },
  { title: "National Park Service – Manhattan Project", tags: ["oficiala", "harti"], section: "Hartă", desc: "Sinteză oficială despre locurile, oamenii și istoria Proiectului Manhattan.", url: "https://www.nps.gov/mapr/learn/manhattan-project.htm" },
  { title: "Department of Energy – Oak Ridge", tags: ["oficiala", "tehnologie"], section: "Desfășurare", desc: "Istoria centrului de îmbogățire a uraniului de la Oak Ridge.", url: "https://www.energy.gov/orem/history" },
  { title: "Los Alamos National Laboratory – Two Bomb Designs", tags: ["oficiala", "tehnologie"], section: "Tehnologie", desc: "Explicații despre cele două designuri de bombe: gun-type și implozie.", url: "https://www.lanl.gov/media/publications/the-vault/1023-a-tale-of-two-bomb-designs" },
  { title: "IAEA – Istorie", tags: ["oficiala"], section: "Impact", desc: "Contextul apariției Agenției Internaționale pentru Energie Atomică.", url: "https://www.iaea.org/about/overview/history" },
  { title: "IAEA – Tratatul de Neproliferare", tags: ["oficiala"], section: "Impact", desc: "Prezentare despre TNP și obiectivele de non-proliferare.", url: "https://www.iaea.org/topics/non-proliferation-treaty" },
  { title: "City of Hiroshima", tags: ["oficiala", "victime"], section: "Rezultat", desc: "Date oficiale despre victimele și impactul bombardamentului de la Hiroshima.", url: "https://www.city.hiroshima.lg.jp/english/peace/1029920/1009857.html" },
  { title: "Nagasaki Peace", tags: ["oficiala", "victime"], section: "Rezultat", desc: "Date oficiale despre victimele și impactul bombardamentului de la Nagasaki.", url: "https://nagasakipeace.jp/en/reference/materials/kids/higai.html" },
  { title: "NPS Map – cele trei locații principale", tags: ["harti", "oficiala"], section: "Hartă", desc: "Hartă interactivă oficială cu cele trei situri principale ale Proiectului Manhattan.", url: "https://www.nps.gov/maps/embed.html?mapId=9b558c7b-d98b-416b-944c-3929de019ddf" },
  { title: "NPS Map – Hanford", tags: ["harti", "oficiala"], section: "Hartă", desc: "Hartă oficială pentru situl Hanford.", url: "https://www.nps.gov/maps/embed.html?mapId=daecca55-af56-4e1f-a9d7-4b96e5744c8d" },
  { title: "NPS Map – Los Alamos", tags: ["harti", "oficiala"], section: "Hartă", desc: "Hartă oficială pentru situl Los Alamos.", url: "https://www.nps.gov/maps/embed.html?mapId=3ebb4ae9-6c66-4305-951e-dd9012d15ff6" },
  { title: "NPS Map – Oak Ridge", tags: ["harti", "oficiala"], section: "Hartă", desc: "Hartă oficială pentru situl Oak Ridge.", url: "https://www.nps.gov/maps/embed.html?mapId=97b8d01b-3da9-45b7-849d-c2e2ceacc027" }
];
