let $ = document;
let cDigree = $.querySelector(".C");
let fDigree = $.querySelector(".F");
let inputDigree = $.querySelector("#converter");
let convertButton = $.querySelector(".convertButton");
let resetButton = $.querySelector(".resetButton");
let changeButton = $.querySelector(".changeButton");
let title = $.querySelector("title");
let result = $.querySelector(".result");
changeFlag = true;

changeButton.addEventListener("click", function () {
  if (changeFlag) {
    cDigree.innerHTML = "°F";
    fDigree.innerHTML = "°C";
    title.innerHTML = "SalzLearn| Js | °F to °C";
    inputDigree.setAttribute("placeholder", "°F");
    changeFlag = false;
  } else {
    cDigree.innerHTML = "°C";
    fDigree.innerHTML = "°F";
    title.innerHTML = "SalzLearn| Js | °C to °F";
    inputDigree.setAttribute("placeholder", "°C");
    changeFlag = true;
  }
});

resetButton.addEventListener("click", function () {
  inputDigree.value = "";
  result.innerHTML = "";
  cDigree.innerHTML = "°C";
  fDigree.innerHTML = "°F";
  title.innerHTML = "SalzLearn| Js | °C to °F";
  inputDigree.setAttribute("placeholder", "°C");
});

convertButton.addEventListener("click", function () {
  if (inputDigree.value == "") {
    result.innerHTML = "insert digree";
  } else {
    if (inputDigree.value == "°C") {
      let celsios = inputDigree.value * 1.8 + 32;
      result.innerHTML = celsios.toFixed(2);
    } else {
      let farenhite = ((inputDigree.value - 32) * 5) / 9;
      result.innerHTML = farenhite.toFixed(2);
    }
  }
});

let newNumber = 10 ;