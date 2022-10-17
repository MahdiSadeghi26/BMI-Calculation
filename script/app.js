// variabels
// document shortHand
let $ = document;
// weight Elements
const weight = $.querySelector("#weight");
const weightValuePrint = $.querySelector("#weight-val");
weightValuePrint.innerHTML = weight.value;
// height Elements
const height = $.querySelector("#height");
const heightValuePrint = $.querySelector("#height-val");
heightValuePrint.innerHTML = height.value;
// Result and catergory
const resultElm = $.querySelector("#result");
const catergory=$.querySelector('#category')

// functions
function onLoadValues() {
  weight.value = 20;
  weightValuePrint.innerHTML = `${weight.value} kg`;
  height.value = 100;
  heightValuePrint.innerHTML = `${height.value} cm`;
}
function bmiCalculator() {
  // changing the value of value printers
  heightValuePrint.innerHTML = `${height.value} cm`;
  weightValuePrint.innerHTML = `${weight.value} kg`;
  let heightCmToMeter = height.value / 100;
  //   calculate the bmi
  let calculateBmi = weight.value / (heightCmToMeter * heightCmToMeter);
  //   changing title of result elm
  let newResultTitle= resultElm.innerHTML=Math.round(calculateBmi)
}
// Event Listeners

window.addEventListener("load", onLoadValues);
weight.addEventListener("change", bmiCalculator);
height.addEventListener("change", bmiCalculator);
