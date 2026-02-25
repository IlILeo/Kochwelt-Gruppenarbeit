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

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
  console.log("hello");

}
