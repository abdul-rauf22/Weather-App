import { elements, locationElements } from "./elements.js";
import { searchCity, validateCityName } from "./searchCity.js";
import { getWeather, getLocation } from "./api.js";
import { displayElements, displayElementsInConsoleTab, AQIdisplay } from "./display.js";
import { getLocationFunction } from "./location.js";
import { hideError } from "./utils.js";

document.getElementById("closeError").addEventListener("click", hideError);

elements.searchCity.addEventListener("input", validateCityName);

elements.searchForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const data = await searchCity();

    displayElementsInConsoleTab(data.weatherData, data.nameOfCity);
    displayElements(data.weatherData, data.nameOfCity);
    AQIdisplay(data.AQIdata);
});

locationElements.btnCurrentLocation.addEventListener("click", () => {
    getLocationFunction();
});