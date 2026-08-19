const searchInput = document.getElementById("searchWeather");
const searchBTN = document.getElementById("searchWeatherBTN");

const city = document.getElementById("city");
const temperature = document.getElementById("temperature");

const error = document.getElementById("error");

const weather = document.getElementById("weather");
const windSpeed = document.getElementById("windSpeed");
const humidity = document.getElementById("humidity");
const feelsLikeTemp = document.getElementById("feelsLikeTemp");
const windDirection = document.getElementById("windDirection");

async function getWeather(latitude, longitude) {
    try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m,apparent_temperature,wind_direction_10m`;

        const response = await fetch(url, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
        }

        const responseData = await response.json();
        console.log(responseData);

        console.log(
            `Temperature: ${responseData.current.temperature_2m} ${responseData.current_units.temperature_2m}`,
        );
        temperature.textContent = `Temperature: ${responseData.current.temperature_2m} ${responseData.current_units.temperature_2m}`;

        const weatherDescription = getWeatherDescription(responseData.current.weather_code,);
        console.log(weatherDescription);
        weather.textContent = `${weatherDescription}`;

        console.log(`wind speed : ${responseData.current.wind_speed_10m} ${responseData.current_units.wind_speed_10m}`);
        windSpeed.textContent = `Wind Speed : ${responseData.current.wind_speed_10m} ${responseData.current_units.wind_speed_10m}`;

        console.log(`Humidity : ${responseData.current.relative_humidity_2m} ${responseData.current_units.relative_humidity_2m}`);
        humidity.textContent = `Humidity : ${responseData.current.relative_humidity_2m} ${responseData.current_units.relative_humidity_2m}`;

        console.log(`Feels Like : ${responseData.current.apparent_temperature} ${responseData.current_units.apparent_temperature}`);
        feelsLikeTemp.textContent = `Feels like : ${responseData.current.apparent_temperature} ${responseData.current_units.apparent_temperature}`;

        const wind_direction = getWindDirection(responseData.current.wind_direction_10m);
        console.log(`Wind direction : ${wind_direction}`);
        windDirection.textContent = wind_direction;
    } catch (err) {
        console.log(`${err}`);
        error.textContent = `Unable to get weather data.`;
    }
}

// getWeather(31.558, 74.35071);

async function getLocation(cityName) {
    error.textContent = `Loding...`;
    try {
        const url = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`;

        const response = await fetch(url, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error(`error status : ${response.status}`);
        }

        const locationData = await response.json();
        console.log(locationData);

        if (!locationData.results || locationData.results.length === 0) {
            console.log(`city not found!`);
            error.textContent = `City Not Found!`;
            return;
        }
        console.log(`latitude: ${locationData.results[0].latitude}`);
        console.log(`longitude: ${locationData.results[0].longitude}`);
        console.log(`Name: ${locationData.results[0].name}`);

        city.textContent = locationData.results[0].name;
        error.textContent = "";

        getWeather(
            locationData.results[0].latitude,
            locationData.results[0].longitude,
        );
    } catch (err) {
        console.log(err);
        error.textContent = "Unable to find city.";
    }
}

function searchWeather() {
    const cityName = searchInput.value.trim();

    if (cityName === "") {
        console.log(`please enter city name!`);
        searchInput.classList.add("inputError");
    } else {
        searchInput.classList.remove("inputError");

        console.log(`you searched : ${cityName}`);

        getLocation(cityName);

        searchInput.value = "";
    }
}

function getWeatherDescription(code) {
    switch (code) {
        case 0:
            return "Clear sky";

        case 1:
            return "Mainly clear";

        case 2:
            return "Partly cloudy";

        case 3:
            return "Overcast";

        case 45:
            return "Foggy";

        case 48:
            return "Freezing fog";

        case 51:
            return "Light drizzle";

        case 53:
            return "Moderate drizzle";

        case 55:
            return "Heavy drizzle";

        case 56:
            return "Light freezing drizzle";

        case 57:
            return "Heavy freezing drizzle";

        case 61:
            return "Light rain";

        case 63:
            return "Moderate rain";

        case 65:
            return "Heavy rain";

        case 66:
            return "Light freezing rain";

        case 67:
            return "Heavy freezing rain";

        case 71:
            return "Light snow";

        case 73:
            return "Moderate snow";

        case 75:
            return "Heavy snow";

        case 77:
            return "Snow grains";

        case 80:
            return "Light rain showers";

        case 81:
            return "Moderate rain showers";

        case 82:
            return "Heavy rain showers";

        case 85:
            return "Light snow showers";

        case 86:
            return "Heavy snow showers";

        case 95:
            return "Thunderstorm";

        case 96:
            return "Thunderstorm with light hail";

        case 99:
            return "Thunderstorm with heavy hail";

        default:
            return "Unknown weather";
    }
}

function getWindDirection(degree) {

    if (degree >= 0 && degree < 22.5) return `Wind Direction : N (north)`;

    if (degree >= 22.5 && degree < 67.5) return `Wind Direction : NE (northeast)`;

    if (degree >= 67.5 && degree < 112.5) return `Wind Direction : E (east)`;

    if (degree >= 112.5 && degree < 157.5) return `Wind Direction : SE (southeast)`;

    if (degree >= 157.5 && degree < 202.5) return `Wind Direction : S (south)`;

    if (degree >= 202.5 && degree < 247.5) return `Wind Direction : SW (southwest)`;

    if (degree >= 247.5 && degree < 292.5) return `Wind Direction : W (west)`;

    if (degree >= 292.5 && degree < 337.5) return `Wind Direction : NW (northwest)`;

    if (degree >= 337.5 && degree <= 360) return `Wind Direction : N (north)`;

    return `Wrong direction!`;
}
searchBTN.addEventListener("click", searchWeather);
searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchWeather();
    }
});
