

import { elements, locationElements } from "./elements.js";
import { searchCity } from "./searchCity.js";
import { getWeather, getLocation } from "./api.js";
import { displayElements, displayElementsInConsoleTab, AQIdisplay } from "./display.js";
import { getLocationFunction } from "./lacation.js";
// console.log(elements.searchForm);
// console.log(elements.temperature);

elements.searchForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    // const cityName = elements.searchCity.value;
    // searchCity();

    const data = await searchCity();
    displayElementsInConsoleTab(data.weatherData, data.nameOfCity);
    displayElements(data.weatherData, data.nameOfCity);
    AQIdisplay(data.AQIdata);

});

locationElements.btnCurrentLocation.addEventListener("click", () => {
    getLocationFunction();
});