import { elements } from "./elements.js";
import { getLocation } from "./api.js";
import { showLoading, hideLoading, isValidCityName, showError } from "./utils.js";


export async function searchCity() {
    const cityName = elements.searchCity.value.trim();

    if (cityName === "" || !isValidCityName(cityName)) {
        elements.searchCity.classList.add("inputError");
        return;
    }

    elements.searchCity.classList.remove("inputError");

    showLoading();

    try {
        const weatherData = await getLocation(cityName);

        hideLoading();
        elements.searchCity.value = "";

        return weatherData;

    } catch (err) {
        hideLoading();
        showError("Unable to get weather data. Please try again.");
    }
}

export function validateCityName() {
    const cityName = elements.searchCity.value.trim();


    if (cityName !== "" && !isValidCityName(cityName)) {
        elements.searchCity.classList.add("inputError");
    } else {
        elements.searchCity.classList.remove("inputError");
    }
}