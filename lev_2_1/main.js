const gray = document.getElementById("grauTaste");
const white = document.getElementById("weissTaste");
const blue = document.getElementById("blauTaste");
const yellow = document.getElementById("gelbTaste");
const txt = document.getElementById("txt");
const body = document.querySelector("body");


const bcgGray = "gray";
const lightFont = "#fff";
const darkFont = "#000";

gray.addEventListener("click", () => {
  body.style.backgroundColor = bcgGray;
  txt.style.color = darkFont;
})

white.addEventListener("click", () => {
  body.style.backgroundColor = bcgGray;
  txt.style.color = lightFont;
})

blue.addEventListener("click", () => {
  body.style.backgroundColor = "blue";
  txt.style.color = lightFont;
})

yellow.addEventListener("click", () => {
  body.style.backgroundColor = "yellow";
  txt.style.color = darkFont;
})

// ===== OR ====== ins HTML onclick-fn (with color-values)

/* const changeColors = (color) => {
  color === 'white' ? body.style.backgroundColor = 'gray' : body.style.backgroundColor=`${color}`;

  color === 'white' ? txt.style.color = lightFont : 
  color === 'blue' ? txt.style.color = lightFont : 
  txt.style.color = darkFont;
} */



/* Schreibe eine kleine App, die die Hintergrundfarbe ändert.
Nutze: onclick, HTML und CSS befinden sich im Kommentar.
 */