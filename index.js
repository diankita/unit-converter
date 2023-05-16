/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// conversion rates
const lengthConversionRate = 3.281;
const volumeConversionRate = 0.264;
const massConversionRate = 2.204;

// HTML elements
const inputEl = document.querySelector("#input-field");
const btnEl = document.querySelector("#convert-btn");
const lengthParagraphEl = document.querySelector("#length-paragraph");
const volumeParagraphEl = document.querySelector("#volume-paragraph");
const massParagraphEl = document.querySelector("#mass-paragraph");

// make unit conversions
function convertMetricToImperial(userInput, conversionRate) {
  return userInput * conversionRate;
}

function convertImperialToMetric(userInput, conversionRate) {
  return userInput / conversionRate;
}

// pass arguments with the onclick function
btnEl.addEventListener("click", function () {
  const metersToFeet = convertMetricToImperial(
    inputEl.value,
    lengthConversionRate
  );
  const litersToGallons = convertMetricToImperial(
    inputEl.value,
    volumeConversionRate
  );
  const kilogramsToPounds = convertMetricToImperial(
    inputEl.value,
    massConversionRate
  );

  const feetToMeters = convertImperialToMetric(
    inputEl.value,
    lengthConversionRate
  );
  const gallonsToLiters = convertImperialToMetric(
    inputEl.value,
    volumeConversionRate
  );
  const poundsToKilograms = convertImperialToMetric(
    inputEl.value,
    massConversionRate
  );

  render(
    inputEl.value,
    "meters",
    "feet",
    metersToFeet,
    feetToMeters,
    lengthParagraphEl
  );
  render(
    inputEl.value,
    "liters",
    "gallons",
    litersToGallons,
    gallonsToLiters,
    volumeParagraphEl
  );
  render(
    inputEl.value,
    "kilograms",
    "pounds",
    kilogramsToPounds,
    poundsToKilograms,
    massParagraphEl
  );
});

// render results on the screen
function render(
  input,
  metricUnit,
  imperialUnit,
  resultMetricToImperial,
  resultImperialToMetric,
  domEl
) {
  let output = `
    ${input} ${metricUnit} = 
    ${resultMetricToImperial.toFixed(3)} ${imperialUnit} 
    | 
    ${input} ${imperialUnit} = 
    ${resultImperialToMetric.toFixed(3)} ${metricUnit}
    `;
  domEl.innerHTML = output;
}
