function openPerson(personId) {
  const person = people[personId];
  if (!person) return;
  const modalTitle = document.getElementById("contentModalTitle");
  const modalBody = document.getElementById("contentModalBody");
  modalTitle.textContent = person.name;
  modalBody.innerHTML = `
    <div class="person-file">
      <p class="eyebrow">${person.role}</p>
      <p>${person.text}</p>
      <div class="file-grid">
        <div><strong>Contribuție</strong><span>${person.contribution}</span></div>
        <div><strong>Perspectivă</strong><span>${person.moral}</span></div>
      </div>
      <a href="${person.source}" target="_blank" rel="noopener" class="source-link mt-3 d-inline-block">Sursă <i class="fa-solid fa-up-right-from-square"></i></a>
    </div>
  `;
  bootstrap.Modal.getOrCreateInstance(document.getElementById("contentModal")).show();
}

function initBoard() {
  const pins = document.querySelectorAll(".person-pin");
  const threads = document.querySelectorAll(".thread-layer line");

  pins.forEach(pin => {
    pin.addEventListener("click", () => openPerson(pin.dataset.person));
    pin.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openPerson(pin.dataset.person);
      }
    });
    pin.addEventListener("mouseenter", () => highlightThreads(pin.dataset.person));
    pin.addEventListener("mouseleave", () => clearThreads());
  });

  function highlightThreads(personId) {
    threads.forEach(line => {
      const connects = (line.dataset.thread || "").split(" ");
      line.classList.toggle("thread-active", connects.includes(personId));
    });
  }

  function clearThreads() {
    threads.forEach(line => line.classList.remove("thread-active"));
  }

  document.querySelectorAll(".board-filter").forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;
      document.querySelectorAll(".board-filter").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      pins.forEach(pin => {
        const tags = (pin.dataset.tags || "").split(" ");
        const visible = filter === "all" || tags.includes(filter);
        pin.classList.toggle("is-dimmed", !visible);
        pin.classList.toggle("is-highlighted", visible && filter !== "all");
      });
    });
  });
}
