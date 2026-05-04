function initMapHub() {
  const frame = document.getElementById("npsMapFrame");
  const panel = document.getElementById("mapInfoPanel");
  const tabs = document.querySelectorAll(".map-tab");
  if (!frame || !panel || typeof npsMaps === "undefined") return;

  function selectMap(mapId) {
    const item = npsMaps[mapId];
    if (!item) return;
    frame.src = item.src;
    panel.innerHTML = `
      <p class="eyebrow">Hartă selectată</p>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <small>${item.note}</small>
    `;
    tabs.forEach(tab => tab.classList.toggle("active", tab.dataset.map === mapId));
  }

  tabs.forEach(tab => tab.addEventListener("click", () => selectMap(tab.dataset.map)));

  document.querySelectorAll(".site-card").forEach(card => {
    card.addEventListener("click", () => {
      const site = card.dataset.site;
      document.querySelectorAll(".site-card").forEach(c => c.classList.remove("active"));
      card.classList.add("active");
      selectMap(site);
      document.getElementById("map-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}
