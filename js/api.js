


// import { searchCity } from "./searchCity.js";


export async function getWeather(latitude, longitude, nameOfCity) {
    try {
        const queryParams = new URLSearchParams({
            latitude,
            longitude,
            current: "temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m,apparent_temperature,wind_direction_10m,visibility,uv_index,pressure_msl",
            daily: "temperature_2m_min,temperature_2m_max,precipitation_sum,sunrise,sunset",
            timezone: "auto"
        });
        const url = `https://api.open-meteo.com/v1/forecast?${queryParams}`;

        const weatherResponse = await fetch(url, {
            method: "GET",
        });

        if (!weatherResponse.ok) {
            throw new Error(`Request failed with status: ${weatherResponse.status}`);
        }

        const weatherData = await weatherResponse.json();
        console.log(weatherData);



        return {
            weatherData,
            nameOfCity
        };

    } catch (err) {
        console.log(`${err}`);
        // error.textContent = `Unable to get weather data.`;
    }
}

// getWeather(31.558, 74.35071);

export async function getLocation(cityName) {
    // error.textContent = `Loding...`;

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
            // error.textContent = `City Not Found!`;
            return;
        }
        const latitude = locationData.results[0].latitude;
        const longitude = locationData.results[0].longitude;
        const nameOfCity = locationData.results[0];

        console.log(latitude);
        console.log(longitude);
        console.log(nameOfCity);

        // city.textContent = `${locationData.results[0].name}, ${locationData.results[0].country}`;
        // error.textContent = "";

        return getWeather(latitude, longitude, nameOfCity);
    } catch (err) {
        console.log(err);
        // error.textContent = "Unable to find city.";
    }
}

// getLocation("lahore");