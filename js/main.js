

import { elements } from "./elements.js";
import { searchCity } from "./searchCity.js";
import { getWeather, getLocation } from "./api.js";
import { displayElements, displayElementsInConsoleTab } from "./display.js";
// console.log(elements.searchForm);
// console.log(elements.temperature);










function formatTime(time) {
    const Tparts = time.split("T");
    const onlyTime = Tparts[1];
    const hParts = onlyTime.split(":");
    let hours = Number(hParts[0]);
    const minuts = hParts[1];

    let period;

    if (hours >= 12) {
        period = "PM";
    } else {
        period = "AM";
    }

    if (hours > 12) {
        hours = hours - 12;
    }

    if (hours === 0) {
        hours = 12;
    }

    return `${hours}:${minuts} ${period}`;
}


// console.log(elements.searchForm);

elements.searchForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    // const cityName = elements.searchCity.value;
    // searchCity();

    const data = await searchCity();
    displayElementsInConsoleTab(data.weatherData, data.nameOfCity);
    displayElements(data.weatherData, data.nameOfCity);
    // displayHourlyForecast(data.weatherData.hourly);
    // console.log(data.weatherData.hourly);
    
});
