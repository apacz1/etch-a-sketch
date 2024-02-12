const main = document.createElement("div");
main.className = "main";

const titleCont = document.createElement("div");
titleCont.className = "titleCont";

const title = document.createElement("h1");
title.textContent = "Sketch";

const slider = document.createElement("input");
slider.className = "slider";
Object.assign(slider, {
  type: "range",
  min: "5",
  max: "100",
  value: "16",
});

const sliderCont = document.createElement("div");
sliderCont.className = "sliderCont";

const sliderText = document.createElement("h3");
sliderText.textContent = "Change size";

const sliderValue = document.createElement("p");
sliderValue.textContent = slider.value + " x " + slider.value;
slider.oninput = () => {
  sliderValue.textContent = slider.value + " x " + slider.value;
};

titleCont.appendChild(title);
document.body.appendChild(titleCont);

sliderCont.appendChild(sliderText);
sliderCont.appendChild(slider);
sliderCont.appendChild(sliderValue);

const buttons = document.createElement("div");
buttons.className = "btns";

const removeBtn = document.createElement("button");
removeBtn.id = "remove";
removeBtn.textContent = "Clear";

const defaultBtn = document.createElement("button");
defaultBtn.id = "default";
defaultBtn.classname = "colors";
defaultBtn.textContent = "Default";

const rainbowBtn = document.createElement("button");
rainbowBtn.id = "rainbow";
rainbowBtn.className = "colors";
rainbowBtn.textContent = "Rainbow";

buttons.appendChild(removeBtn);
buttons.appendChild(defaultBtn);
buttons.appendChild(rainbowBtn);

const content = document.createElement("div");
content.className = "content";

content.appendChild(buttons);
content.appendChild(main);
content.appendChild(sliderCont);
document.body.appendChild(content);

let btnId = "";

function sketchPadSize() {
  main.innerHTML = "";
  for (let j = 0; j < slider.value; j++) {
    const row = document.createElement("div");
    row.className = "row";
    main.appendChild(row);
    for (let i = 0; i < slider.value; i++) {
      const square = document.createElement("div");
      square.className = "square";
      row.appendChild(square);
    }
  }
  if (btnId == "default") {
    defaultColour();
  } else {
    rainbow();
  }
}

function clearPad() {
  const squareColor = document.querySelectorAll(".square");
  Array.from(squareColor).forEach((x) => {
    x.style.backgroundColor = "white";
  });
}

function rainbow() {
  const squareColor = document.querySelectorAll(".square");
  Array.from(squareColor).forEach((x) => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    x.addEventListener("mouseover", () => {
      x.style.backgroundColor = "#" + randomColor;
    });
  });
  btnId = "rainbow";
}

function defaultColour() {
  const squareColor = document.querySelectorAll(".square");
  Array.from(squareColor).forEach((x) => {
    x.addEventListener("mouseover", () => {
      x.style.backgroundColor = "black";
    });
  });
  btnId = "default";
}

removeBtn.addEventListener("click", clearPad);

defaultBtn.addEventListener("click", defaultColour);

rainbowBtn.addEventListener("click", rainbow);

sketchPadSize();
defaultColour();
slider.addEventListener("change", sketchPadSize);
