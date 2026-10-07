

// import { showError } from "./utils.js";
// import { searchCity } from "./searchCity.js";


export async function getWeather(latitude, longitude, nameOfCity) {
    try {
        const queryParams = new URLSearchParams({
            latitude,
            longitude,
            current: "temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m,apparent_temperature,wind_direction_10m,visibility,uv_index,pressure_msl",
            daily: "temperature_2m_min,temperature_2m_max,weather_code,precipitation_sum,sunrise,sunset",
            hourly: "temperature_2m,weather_code,precipitation_probability",
            forecast_days: 7,
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
        // console.log(weatherData.daily);
        const AQIdata = await getAirQuality(latitude, longitude);

        return {
            weatherData,
            nameOfCity,
            AQIdata
        };

    } catch (err) {
        throw err;
    }
}


export async function getLocation(cityName) {

    try {
        const url = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`;

        const response = await fetch(url, {
            method: "GET",
        });

        if (!response.ok) {
            throw new Error(`error status : ${response.status}`);
        }

        const locationData = await response.json();
        // console.log(locationData);

        if (!locationData.results || locationData.results.length === 0) {
            throw new Error("City not found. Please check the city name.");
        }

        const latitude = locationData.results[0].latitude;
        const longitude = locationData.results[0].longitude;
        const nameOfCity = locationData.results[0];

        // console.log(latitude);
        // console.log(longitude);
        // console.log(nameOfCity);

        return getWeather(latitude, longitude, nameOfCity);
    } catch (err) {
        throw err;
    }
}


export async function getAirQuality(latitude, longitude) {
    try {
        const AQIParams = new URLSearchParams({
            latitude,
            longitude,
            current: "us_aqi,pm2_5,pm10,carbon_monoxide,nitrogen_dioxide,ozone",
            timezone: "auto"
        });
        const url = `https://air-quality-api.open-meteo.com/v1/air-quality?${AQIParams}`;

        const resAQI = await fetch(url);

        if (!resAQI.ok) {
            throw new Error(`Request failed: ${resAQI.status}`);
        }

        const AQIdata = await resAQI.json();

        // console.log(AQIdata);

        return AQIdata;
    } catch (err) {
        throw err;
    }
}



export async function getReverseLocation(latitude, longitude) {
    try {
        const locationParams = new URLSearchParams({
            latitude: latitude,
            longitude: longitude,
            localityLanguage: "en",
        });
        const url =
            `https://api.bigdatacloud.net/data/reverse-geocode-client?${locationParams}`;

        const responseLocation = await fetch(url);
        if (!responseLocation.ok) {

            throw new Error(responseLocation.status);
        }

        const locationData = await responseLocation.json();

        // console.log(locationData);

        return locationData;

    } catch (error) {
        throw error;
    }

}