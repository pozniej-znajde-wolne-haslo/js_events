const selectList = document.getElementById("my-select");
const output = document.getElementById("option-selected");


selectList.addEventListener("change", (e) => {
  let optionOutput = e.target.value;
  output.textContent = `You've chosen: ${optionOutput}`;
})


/* 
In dieser Übung werden wir den Eventhandler change kennenlernen.

Der Eventhandler change wird bei einer erfolgten Änderung ausgelöst. Diese Wertänderung wird im Normalfall in einem Formularelement stattfinden.

Schreibe eine Funktion, die im Paragraph den Text anpasst, nachdem du ein Element aus der Liste ausgewählt hast.
Assets:
e.target.value
addEventListener("change", (event) => {...} )
innerHTML oder textContent
 */