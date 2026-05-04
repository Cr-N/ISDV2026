function initMap() {
  const mapEl = document.getElementById("manhattanMap");
  if (!mapEl || typeof L === "undefined") return;

  const map = L.map("manhattanMap", { scrollWheelZoom: false }).setView([39, -96], 4);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  const markerIcon = label => L.divIcon({
    className: "",
    html: `<div class="custom-marker"><span>${label}</span></div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 34],
    popupAnchor: [0, -34]
  });

  const panel = document.getElementById("mapInfoPanel");
  const markers = [];

  mapLocations.forEach(location => {
    const marker = L.marker(location.coords, { icon: markerIcon(location.label) }).addTo(map);
    marker.bindPopup(`<strong>${location.name}</strong><br>${location.type}`);
    marker.on("click", () => {
      if (panel) {
        panel.innerHTML = `
          <p class="eyebrow">${location.type}</p>
          <h3>${location.name}</h3>
          <p>${location.text}</p>
          <a href="${location.source}" target="_blank" rel="noopener" class="source-link">Sursă <i class="fa-solid fa-up-right-from-square"></i></a>
        `;
      }
      map.flyTo(location.coords, location.id === "hiroshima" || location.id === "nagasaki" ? 6 : 6, { duration: 0.9 });
    });
    markers.push(marker);
  });

  const flowStyle = { color: "#f5c542", weight: 2, opacity: 0.75, dashArray: "8 8" };
  const lines = [
    [mapLocations.find(l => l.id === "chicago").coords, mapLocations.find(l => l.id === "hanford").coords],
    [mapLocations.find(l => l.id === "hanford").coords, mapLocations.find(l => l.id === "los-alamos").coords],
    [mapLocations.find(l => l.id === "oak-ridge").coords, mapLocations.find(l => l.id === "los-alamos").coords],
    [mapLocations.find(l => l.id === "los-alamos").coords, mapLocations.find(l => l.id === "trinity").coords]
  ];
  lines.forEach(line => L.polyline(line, flowStyle).addTo(map));

  const reset = document.getElementById("resetMap");
  if (reset) reset.addEventListener("click", () => map.flyTo([39, -96], 4));
}
