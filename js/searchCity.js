
import { elements } from "./elements.js";
import { getLocation } from "./api.js";

// console.log(elements.searchForm);


export function searchCity() {
    const cityName = elements.searchCity.value.trim();

    if (cityName === "") {
        console.log(`please enter city name!`);
        elements.searchCity.classList.add("inputError");
    } else {
        elements.searchCity.classList.remove("inputError");

        console.log(`you searched : ${cityName}`);

        const weatherData = getLocation(cityName);

        elements.searchCity.value = "";

        return weatherData;
    }
}