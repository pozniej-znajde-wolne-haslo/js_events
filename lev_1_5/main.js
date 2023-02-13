const btn = document.getElementById("clickMe");

let clickNo = 0;

btn.addEventListener("click", () => {
    clickNo < 10 ? clickNo++ : clickNo = 0;
    btn.innerHTML = `Click me: ${clickNo}`;
  })