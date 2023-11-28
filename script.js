const container = document.querySelector(".container");

for (let index = 0; index < 60; index++) {
  const colorContainer = document.createElement("div");
  colorContainer.classList.add("color-container");

  container.appendChild(colorContainer);
}
