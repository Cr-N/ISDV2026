function openPerson(personId) {
  const person = people[personId];
  if (!person) return;
  const modalTitle = document.getElementById("contentModalTitle");
  const modalBody = document.getElementById("contentModalBody");
  modalTitle.textContent = person.name;
  modalBody.innerHTML = `
    <p class="eyebrow">${person.role}</p>
    <p>${person.text}</p>
    <p><strong>Conexiuni:</strong> ${person.connections}</p>
    <a href="${person.source}" target="_blank" rel="noopener" class="source-link">Sursă recomandată <i class="fa-solid fa-up-right-from-square"></i></a>
  `;
  bootstrap.Modal.getOrCreateInstance(document.getElementById("contentModal")).show();
}

function initBoard() {
  document.querySelectorAll(".person-pin").forEach(pin => {
    pin.addEventListener("click", () => openPerson(pin.dataset.person));
    pin.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openPerson(pin.dataset.person);
      }
    });
  });
}
