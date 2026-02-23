function calculatedQuantity() {
  const input = document.getElementById("portion-input");
  let newPortion = parseFloat(input.value);
  const basicPortion = 4;

  if (newPortion < 1 || newPortion > 20 || isNaN(newPortion)) {
    alert("Bitte eine Zahl zwischen 1 und 20 eingeben.");
    input.value = basicPortion;
    newPortion = basicPortion;
  }

  const ingredients = document.querySelectorAll("#ingredient-list li");

  ingredients.forEach((li) => {
    const basicQuantity = parseFloat(li.getAttribute("data-menge"));
    const unit = li.getAttribute("data-einheit");

    const ingredienceName = li.textContent.split(unit)[1] || "";

    let newQuantity = (basicQuantity / basicPortion) * newPortion;

    newQuantity = Number.isInteger(newQuantity)
      ? newQuantity
      : newQuantity.toFixed(2);

    li.innerText = `${newQuantity} ${unit} ${ingredienceName.trim()}`;
  });
}

function sendMail(event) {
  event.preventDefault();
  const data = new FormData(event.target);

  fetch("https://formspree.io/f/xeelzyvg", {
    method: "POST",
    body: new FormData(event.target),
    headers: {
      Accept: "application/json",
    },
  })
    .then(() => {
      window.location.href = "./send_mail.html";
    })
    .catch((error) => {
      console.log(error);
    });
}

function toggleMenu() {
  let getMenu = document.querySelector(".mainMenu");
  let hamburger = document.getElementById("toggle-bar");

  getMenu.classList.toggle("hamburger");
  hamburger.classList.toggle("hidden");
}

let getHamburger = document.querySelector("#toggle-bar");

getHamburger.addEventListener("click", toggleMenu);

// function hideMenu() {
//   let hideBurger = document.getElementById("toggle-bar")
//   hideBurger.classList.toggle("tootle-menu");
// }

// let getHamburger = document.querySelector("#toggle-bar");

// getHamburger.addEventListener("click", toggleMenu);
