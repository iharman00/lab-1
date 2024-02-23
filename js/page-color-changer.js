const html = document.querySelector("html");

// Get sliders
const redSlider = document.querySelector("#red");
const greenSlider = document.querySelector("#green");
const blueSlider = document.querySelector("#blue");

// Define Change event functions
const handleSliderChange = () => {
  // Get values for the sliders
  let redColorValue = redSlider.value;
  let greenColorValue = greenSlider.value;
  let blueColorValue = blueSlider.value;

  // Sets background color on html
  html.style.backgroundColor = `rgb(${redColorValue} ${greenColorValue} ${blueColorValue})`;
};

redSlider.addEventListener("change", handleSliderChange);
greenSlider.addEventListener("change", handleSliderChange);
blueSlider.addEventListener("change", handleSliderChange);
