const container = document.querySelector(".container");

// Color code container

for (let index = 0; index < 60; index++) {
  const colorContainer = document.createElement("div");
  colorContainer.classList.add("color-container");

  container.appendChild(colorContainer);
}

const colorContainer = document.querySelectorAll(".color-container");

// Generate the color codes
function generateColors() {
  colorContainer.forEach((colorContainerEl) => {
    const newColorCode = randomColor();
    colorContainerEl.style.backgroundColor = "#" + newColorCode;
    colorContainerEl.innerText = "#" + newColorCode;
  });
}
generateColors();

// Create the color codes
function randomColor() {
  const chars = "0123456789abcdef";
  const colorCodeLength = 6;
  let colorCode = "";
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    colorCode += chars.substring(randomNumber, randomNumber + 1);
  }
  return colorCode;
}
