function initAOS() {
  if (typeof AOS !== "undefined") {
    AOS.init({ duration: 700, once: true, offset: 80 });
  }
}

function initReadingProgress() {
  const bar = document.getElementById("readingProgress");
  if (!bar) return;
  const update = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${percent}%`;
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

function initBriefing() {
  document.querySelectorAll(".briefing-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = document.getElementById(`briefing-${btn.dataset.briefingTarget}`);
      const item = btn.closest(".briefing-item");
      if (!target || !item) return;
      item.classList.toggle("active");
      target.classList.toggle("show");
      btn.querySelector("i")?.classList.toggle("rotate-180");
    });
  });
}

function initFlipCards() {
  document.querySelectorAll(".flip-card").forEach(card => {
    card.addEventListener("click", () => card.classList.toggle("flipped"));
  });
}

function initRadialSystem() {
  const panel = document.getElementById("radialPanel");
  if (!panel || typeof radialInfo === "undefined") return;
  document.querySelectorAll(".radial-node").forEach(node => {
    node.addEventListener("click", () => {
      const [title, text] = radialInfo[node.dataset.radial] || [];
      document.querySelectorAll(".radial-node").forEach(n => n.classList.remove("active"));
      node.classList.add("active");
      panel.innerHTML = `
        <p class="eyebrow">Domeniu integrat</p>
        <h3>${title}</h3>
        <p>${text}</p>
      `;
    });
  });
}

function initDocumentAnnotations() {
  const explainer = document.getElementById("docExplainer");
  if (!explainer || typeof documentNotes === "undefined") return;
  document.querySelectorAll(".doc-hotspot").forEach(btn => {
    btn.addEventListener("click", () => {
      const [title, text] = documentNotes[btn.dataset.doc] || [];
      document.querySelectorAll(".doc-hotspot").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      explainer.classList.remove("detail-enter");
      void explainer.offsetWidth;
      explainer.classList.add("detail-enter");
      explainer.innerHTML = `
        <p class="eyebrow">Adnotare</p>
        <h3>${title}</h3>
        <p>${text}</p>
      `;
    });
  });
}

function initTechTree() {
  const panel = document.getElementById("techTreePanel");
  if (!panel || typeof techInfo === "undefined") return;
  document.querySelectorAll(".tech-node").forEach(node => {
    node.addEventListener("click", () => {
      const [title, text] = techInfo[node.dataset.tech] || [];
      document.querySelectorAll(".tech-node").forEach(n => n.classList.remove("active"));
      node.classList.add("active");
      panel.innerHTML = `
        <h3>${title}</h3>
        <p>${text}</p>
      `;
    });
  });
}

function createStepAnimation(config) {
  let step = 0;
  let timer = null;
  const root = document.getElementById(config.rootId);
  const label = document.getElementById(config.labelId);
  const text = document.getElementById(config.textId);
  const prev = document.getElementById(config.prevId);
  const next = document.getElementById(config.nextId);
  const auto = document.getElementById(config.autoId);
  if (!root || !label || !text || !prev || !next || !auto) return;

  const update = () => {
    root.dataset.step = String(step + 1);
    label.textContent = `Pasul ${step + 1} / ${config.steps.length}`;
    text.textContent = config.steps[step];
  };

  const go = direction => {
    step = (step + direction + config.steps.length) % config.steps.length;
    update();
  };

  prev.addEventListener("click", () => go(-1));
  next.addEventListener("click", () => go(1));
  auto.addEventListener("click", () => {
    if (timer) {
      clearInterval(timer);
      timer = null;
      auto.textContent = "Rulează";
      return;
    }
    auto.textContent = "Oprește";
    timer = setInterval(() => go(1), 1100);
  });
  update();
}

function initBombAnimations() {
  createStepAnimation({
    rootId: "gunAnimation",
    labelId: "gunStepLabel",
    textId: "gunStepText",
    prevId: "gunPrev",
    nextId: "gunNext",
    autoId: "gunAuto",
    steps: gunSteps
  });
  createStepAnimation({
    rootId: "implosionAnimation",
    labelId: "implosionStepLabel",
    textId: "implosionStepText",
    prevId: "implosionPrev",
    nextId: "implosionNext",
    autoId: "implosionAuto",
    steps: implosionSteps
  });
}

function initTrinityCountdown() {
  const display = document.getElementById("trinityDisplay");
  const text = document.getElementById("trinityText");
  const next = document.getElementById("trinityNext");
  if (!display || !text || !next || typeof trinityMoments === "undefined") return;
  let index = 0;
  next.addEventListener("click", () => {
    index = (index + 1) % trinityMoments.length;
    const [time, title, body] = trinityMoments[index];
    display.textContent = time;
    display.classList.remove("pulse-once");
    void display.offsetWidth;
    display.classList.add("pulse-once");
    text.innerHTML = `
      <p class="eyebrow">Testul Trinity</p>
      <h3>${title}</h3>
      <p>${body}</p>
    `;
  });
}

function initImpactComparison() {
  const hiroshima = document.getElementById("hiroshimaCard");
  const nagasaki = document.getElementById("nagasakiCard");
  if (!hiroshima || !nagasaki || typeof impactData === "undefined") return;

  function render(type) {
    const data = impactData[type];
    const makeCard = item => `
      <div class="city-date">${item[1]}</div>
      <h3>${item[0]}</h3>
      <p>${item[2]}</p>
    `;
    hiroshima.innerHTML = makeCard(data.hiroshima);
    nagasaki.innerHTML = makeCard(data.nagasaki);
  }

  document.querySelectorAll(".impact-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".impact-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      render(tab.dataset.impact);
    });
  });
  render("design");
}

function initShockwave() {
  const panel = document.getElementById("shockPanel");
  if (!panel || typeof waveInfo === "undefined") return;
  document.querySelectorAll(".shock-node").forEach(node => {
    node.addEventListener("click", () => {
      const [title, text] = waveInfo[node.dataset.wave] || [];
      document.querySelectorAll(".shock-node").forEach(n => n.classList.remove("active"));
      node.classList.add("active");
      panel.innerHTML = `
        <p class="eyebrow">Consecință</p>
        <h3>${title}</h3>
        <p>${text}</p>
      `;
    });
  });
}

function initTribunal() {
  const result = document.getElementById("tribunalResult");
  if (!result) return;
  const selected = { pro: 0, contra: 0 };

  function update() {
    let title = "Poziție mixtă";
    let body = "Ai selectat argumente din ambele tabere. Aceasta arată complexitatea reală a dezbaterii.";
    if (selected.pro > selected.contra ) {
      title = "Cei din sectorul militari și politic.";
      body = "Selecția ta pune accent pe încheierea rapidă a războiului și pe efectul strategic al bombei.";
    } else if (selected.contra > selected.pro) {
      title = "Cercetătorii care critică folosirea bombei.";
      body = "Selecția ta pune accent pe costul uman, alternativa demonstrației și riscul unei curse a înarmării nucleare.";
    } else if (selected.pro === 0 && selected.contra === 0) {
      title = "Selectează argumente";
      body = "Alege argumente din ambele coloane.";
    }
    result.innerHTML = `
      <p class="eyebrow">Te asemeni cu:</p>
      <h3>${title}</h3>
      <p>${body}</p>
      <p class="mb-0"><strong>Scor argumentativ:</strong> ${selected.pro} pro / ${selected.contra} critic</p>
    `;
  }

  document.querySelectorAll(".argument-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const side = chip.dataset.side;
      chip.classList.toggle("active");
      selected[side] += chip.classList.contains("active") ? 1 : -1;
      update();
    });
  });
}

function renderSourceArchive(filter = "all") {
  const archive = document.getElementById("sourceArchive");
  if (!archive || typeof sourceArchive === "undefined") return;
  const items = sourceArchive.filter(item => filter === "all" || item.tags.includes(filter));
  archive.innerHTML = items.map(item => `
    <article class="source-card">
      <div class="source-tags">${item.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
      <h3>${item.title}</h3>
      <p class="used-in"><strong>Folosită în secțiunea:</strong> ${item.section}</p>
      <a href="${item.url}" target="_blank" rel="noopener">Deschide sursa <i class="fa-solid fa-up-right-from-square"></i></a>
    </article>
  `).join("");
}

function initSourceFilters() {
  document.querySelectorAll(".source-filter").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".source-filter").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderSourceArchive(btn.dataset.sourceFilter);
    });
  });
  renderSourceArchive("all");
}

function initActiveNav() {
  const links = Array.from(document.querySelectorAll(".nav-link[href^='#']"));
  const sections = links.map(link => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach(section => observer.observe(section));
}

document.addEventListener("DOMContentLoaded", () => {
  initAOS();
  initReadingProgress();
  initBriefing();
  initFlipCards();
  initRadialSystem();
  initDocumentAnnotations();
  initTimeline();
  initMapHub();
  initBoard();
  initTechTree();
  initBombAnimations();
  initTrinityCountdown();
  initImpactComparison();
  initShockwave();
  initTribunal();
  initSourceFilters();
  initActiveNav();
});
