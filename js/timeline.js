function initTimeline() {
  const track = document.getElementById("timelineTrack");
  const detail = document.getElementById("timelineDetail");
  if (!track || !detail) return;

  timelineEvents.forEach((event, index) => {
    const button = document.createElement("button");
    button.className = `timeline-event ${index === 0 ? "active" : ""}`;
    button.type = "button";
    button.innerHTML = `<span>${event.date}</span><strong>${event.title}</strong>`;
    button.addEventListener("click", () => {
      document.querySelectorAll(".timeline-event").forEach(el => el.classList.remove("active"));
      button.classList.add("active");
      detail.innerHTML = `
        <span class="timeline-detail-date">${event.date}</span>
        <h3>${event.title}</h3>
        <p>${event.text}</p>
        <p class="why"><strong>De ce contează?</strong> ${event.why}</p>
        <a href="${event.source}" target="_blank" rel="noopener" class="source-link">Sursă recomandată <i class="fa-solid fa-up-right-from-square"></i></a>
      `;
    });
    track.appendChild(button);
  });
}
