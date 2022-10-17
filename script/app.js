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
  let calculateBmi = weight.value / (heightCmToMeter * heightCmToMeter);
  console.log(calculateBmi);
}
// Event Listeners

window.addEventListener("load", onLoadValues);
weight.addEventListener("change", bmiCalculator);
height.addEventListener("change", bmiCalculator);
