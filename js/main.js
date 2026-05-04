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

function initOverviewCards() {
  const title = document.getElementById("contentModalTitle");
  const body = document.getElementById("contentModalBody");
  const modal = document.getElementById("contentModal");
  document.querySelectorAll("[data-card]").forEach(card => {
    card.addEventListener("click", () => {
      const item = overviewCards[card.dataset.card];
      title.textContent = item.title;
      body.innerHTML = `
        <p>${item.body}</p>
        <a href="${item.source}" target="_blank" rel="noopener" class="source-link">Sursă recomandată <i class="fa-solid fa-up-right-from-square"></i></a>
      `;
      bootstrap.Modal.getOrCreateInstance(modal).show();
    });
  });
}

function initReaction() {
  const area = document.getElementById("reactionArea");
  const start = document.getElementById("startReaction");
  const reset = document.getElementById("resetReaction");
  if (!area || !start || !reset) return;

  function spawn(level = 0, x = 50, y = 50) {
    if (level > 3) return;
    const count = level === 0 ? 3 : 2;
    for (let i = 0; i < count; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";
      const angle = (Math.PI * 2 / count) * i + Math.random() * 0.8;
      const distance = 55 + level * 42 + Math.random() * 28;
      const nx = Math.min(88, Math.max(5, x + Math.cos(angle) * distance / 3.1));
      const ny = Math.min(84, Math.max(8, y + Math.sin(angle) * distance / 2.2));
      particle.style.left = `${nx}%`;
      particle.style.top = `${ny}%`;
      particle.textContent = level === 3 ? "E" : "n";
      area.appendChild(particle);
      setTimeout(() => spawn(level + 1, nx, ny), 320 + Math.random() * 260);
    }
  }

  start.addEventListener("click", () => spawn());
  reset.addEventListener("click", () => {
    area.querySelectorAll(".particle").forEach(p => p.remove());
  });
}

function initDecisions() {
  const result = document.getElementById("decisionResult");
  document.querySelectorAll(".decision-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".decision-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const item = decisions[btn.dataset.decision];
      result.innerHTML = `
        <p class="eyebrow">Analiză istorică</p>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <p class="mb-0"><strong>Concluzie:</strong> Proiectul Manhattan nu poate fi înțeles doar tehnic; decizia de folosire aparține și istoriei morale a secolului XX.</p>
      `;
    });
  });
}

function renderSources() {
  const render = (id, list) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = list.map(([title, desc, url]) => `
      <article class="source-item">
        <strong>${title}</strong>
        <p>${desc}</p>
        <a href="${url}" target="_blank" rel="noopener">Deschide sursa <i class="fa-solid fa-up-right-from-square"></i></a>
      </article>
    `).join("");
  };
  render("primarySources", sources.primary);
  render("secondarySources", sources.secondary);
  render("visualSources", sources.visuals);
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
  initTimeline();
  initMap();
  initBoard();
  initOverviewCards();
  initReaction();
  initDecisions();
  renderSources();
  initActiveNav();
});
