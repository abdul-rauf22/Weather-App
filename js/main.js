

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

function getWeatherIcon(code) {
    switch (code) {
        case 0:
            return "☀️";

        case 1:
        case 2:
            return "🌤️";

        case 3:
            return "☁️";

        case 45:
        case 48:
            return "🌫️";

        case 51:
        case 53:
        case 55:
        case 61:
        case 63:
        case 65:
        case 80:
        case 81:
        case 82:
            return "🌧️";

        case 71:
        case 73:
        case 75:
        case 77:
        case 85:
        case 86:
            return "❄️";

        case 95:
        case 96:
        case 99:
            return "⛈️";

        default:
            return "❓";
    }
}

// console.log(elements.searchForm);

elements.searchForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    // const cityName = elements.searchCity.value;
    // searchCity();

    const data = await searchCity();
    displayElementsInConsoleTab(data.weatherData, data.nameOfCity);
    displayElements(data.weatherData, data.nameOfCity);
});
