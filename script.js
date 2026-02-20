function berechneMengen() {
  const input = document.getElementById('portion-input');
  let neuePortionen = parseFloat(input.value);
  const basisPortionen = 4;

  // Schutz: Nicht ins Minus gehen oder Null erlauben
  if (neuePortionen < 1 || isNaN(neuePortionen)) {
    alert("Bitte eine Zahl größer als 0 eingeben.");
    input.value = 1;
    neuePortionen = 1;
  }

  // Alle Listen-Elemente durchgehen
  const zutaten = document.querySelectorAll('#ingredient-list li');

  zutaten.forEach(li => {
    const basisMenge = parseFloat(li.getAttribute('data-menge'));
    const einheit = li.getAttribute('data-einheit');

    // Die Zutat finden (alles Text nach der ursprünglichen Zahl und Einheit)
    // Wir nehmen hier den ursprünglichen Textinhalt und säubern ihn
    const zutatName = li.textContent.split(einheit)[1] || "";

    // Berechnung: (Grundmenge / 4) * neue Portionen
    let neueMenge = (basisMenge / basisPortionen) * neuePortionen;

    // Ergebnis runden (auf 2 Nachkommastellen, falls nötig)
    neueMenge = Number.isInteger(neueMenge) ? neueMenge : neueMenge.toFixed(2);

    // Inhalt aktualisieren
    li.innerHTML = `${neueMenge} ${einheit} ${zutatName.trim()}`;
  });
}

function sendMail(event) {
  event.preventDefault();
  const data = new FormData(event.target);

  fetch("https://formspree.io/f/xeelzyvg", {
    method: "POST",
    body: new FormData(event.target),
    headers: {
      'Accept': 'application/json'
    }
  }).then(() => {
    window.location.href = "./send_mail.html";
  }).catch((error) => {
    console.log(error);
  });
}
