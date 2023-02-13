const bold = document.getElementById("bold");
const italic = document.getElementById("italic");
const underline = document.getElementById("underline");
const left = document.getElementById("left");
const center = document.getElementById("center");
const right = document.getElementById("right");
const justify = document.getElementById("justify");
const input = document.getElementById("input");
const ucase = document.getElementById("ucase");
const color = document.getElementById("color");

const textarea = document.getElementById("textarea");

bold.addEventListener("click", () => {
  style(bold, "bold");
});

italic.addEventListener("click", () => {
  style(italic, "italic");
});

underline.addEventListener("click", () => {
  style(underline, "underline");
});

left.addEventListener("click", () => {
  align("left");
});

right.addEventListener("click", () => {
  align("right");
});

center.addEventListener("click", () => {
  align("center");
});

justify.addEventListener("click", () => {
  align("justify");
});

input.addEventListener("change", (e) => {
  textarea.style.fontSize = e.target.value + "px";
});

ucase.addEventListener("click", () => {
  if (textarea.style.textTransform === "uppercase") {
    textarea.style.textTransform = "lowercase";
  } else {
    textarea.style.textTransform = "uppercase";
  }
});

color.addEventListener("input", (e) => {
  textarea.style.color = e.target.value;
});

function style(tigger, clName) {
  textarea.classList.toggle(clName);
  tigger.classList.toggle("active");
}

function align(alignment) {
  if (textarea.style.textAlign === alignment) {
    textarea.style.textAlign = "";
  } else {
    textarea.style.textAlign = alignment;
  }
}
