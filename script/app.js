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
const catergory = $.querySelector("#category");
// functions
function onLoadValues() {
  weight.value = 20;
  weightValuePrint.innerHTML = `${weight.value} kg`;
  height.value = 100;
  heightValuePrint.innerHTML = `${height.value} cm`;
  let heightCmToMeter = height.value / 100;
  let calculateBmiOnLoad = weight.value / (heightCmToMeter * heightCmToMeter);
  let roundedBmi = calculateBmiOnLoad.toPrecision(3);
  bmiStatus(roundedBmi);
}
// getting weight and height and calculate BMI
function bmiCalculator() {
  // changing the value of value printers
  heightValuePrint.innerHTML = `${height.value} cm`;
  weightValuePrint.innerHTML = `${weight.value} kg`;
  let heightCmToMeter = height.value / 100;
  //   calculate the bmi
  let calculateBmi = weight.value / (heightCmToMeter * heightCmToMeter);
  let roundedBmi = calculateBmi.toPrecision(3);
  //   changing title of result elm
  bmiStatus(roundedBmi);
}
// Chossing the status of category
function bmiStatus(bmi) {
  //   conditions of Bmi
  resultElm.innerHTML = bmi;
  if (bmi < 18.5) {
    resultElm.style.color = "rgb(255,196,77)";
    catergory.innerHTML = "Under weight";
  }
  if (bmi >= 18.5 && bmi <= 24.9) {
    catergory.innerHTML = "Normal Weight";
    resultElm.style.color = "rgb(11,232,129)";
  }
  if (bmi >= 25 && bmi <= 29.9) {
    catergory.innerHTML = "Obese";
    resultElm.style.color = "rgb(255,94,87)";
  }
  if (bmi > 29.9) {
    catergory.innerHTML = "Over Weight";
    resultElm.style.color = "red";
  }
}
// Event Listeners
window.addEventListener("load", onLoadValues);
weight.addEventListener("change", bmiCalculator);
height.addEventListener("change", bmiCalculator);
