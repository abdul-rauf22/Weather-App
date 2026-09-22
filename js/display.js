

import { elements } from "./elements.js";
import { getWeather } from "./api.js";
import {
    getWeatherDescription,
    formattedDateAndTime,
    getWindDirection,
    getSunriseSetset,
    getWeatherIcon,
    displayHourlyForecast,
    displayDailyForecast
} from "./utils.js";

export function displayElements(weatherData, nameOfCity) {
    elements.temperature.textContent =
        `${Math.round(weatherData.current.temperature_2m)}${weatherData.current_units.temperature_2m}`;

    const weatherCode = weatherData.current.weather_code
    elements.weather.textContent = getWeatherDescription(weatherCode);

    elements.minimumTemp.textContent =
        `${Math.round(weatherData.daily.temperature_2m_min[0])}${weatherData.daily_units.temperature_2m_min}`;
    elements.maximumTemp.textContent =
        `${Math.round(weatherData.daily.temperature_2m_max[0])}${weatherData.daily_units.temperature_2m_max}`;

    elements.cityInfo.textContent = `${nameOfCity.name}, ${nameOfCity.country}`;

    const currentTime = weatherData.current.time;
    const timeAndDate = formattedDateAndTime(currentTime);
    elements.timeAndDate.textContent = `${timeAndDate}`;

    elements.feelsLikeTemp.textContent =
        `${Math.round(weatherData.current.apparent_temperature)}${weatherData.current_units.apparent_temperature}`;

    elements.humidity.textContent =
        `${Math.round(weatherData.current.relative_humidity_2m)}${weatherData.current_units.relative_humidity_2m}`;

    const windSpeed = weatherData.current.wind_speed_10m;
    elements.windSpeed.textContent =
        `${windSpeed.toFixed(1)}${weatherData.current_units.wind_speed_10m}`;

    const wind_direction = weatherData.current.wind_direction_10m;
    const windDirection = getWindDirection(wind_direction);
    elements.windDirection.textContent = windDirection;

    elements.pressure.textContent = `${Math.round(weatherData.current.pressure_msl)} ${weatherData.current_units.pressure_msl}`;

    elements.visibility.textContent = `${weatherData.current.visibility} ${weatherData.current_units.visibility}`;

    const precipitation = weatherData.daily.precipitation_sum[0];
    elements.precipitation.textContent =
        `${precipitation.toFixed(1)} ${weatherData.daily_units.precipitation_sum}`;

    const uvIndex = weatherData.current.uv_index;
    elements.uvIndex.textContent = `${uvIndex}`;

    const sunrise = weatherData.daily.sunrise[0];
    elements.sunrise.textContent = getSunriseSetset(sunrise);

    const sunset = weatherData.daily.sunset[0];
    elements.sunset.textContent = getSunriseSetset(sunset);

    displayHourlyForecast(weatherData.hourly,weatherData.current.time);

    displayDailyForecast(weatherData.daily);
}

export function displayElementsInConsoleTab(weatherData, nameOfCity) {

    // console.log(
    //     `Temperature: ${weatherData.current.temperature_2m}${weatherData.current_units.temperature_2m}`
    // );

    // console.log(`Minimum Temperature : ${weatherData.daily.temperature_2m_min[0]}${weatherData.daily_units.temperature_2m_min}`);

    // console.log(`Maximum Temperature : ${weatherData.daily.temperature_2m_max[0]}${weatherData.daily_units.temperature_2m_max}`);

    // console.log(`${nameOfCity.name}, ${nameOfCity.country}`);

    // const currentTime = weatherData.current.time;
    // const timeAndDate = formattedDateAndTime(currentTime);

    // console.log(timeAndDate);

    // console.log(`Feels Like : ${weatherData.current.apparent_temperature}${weatherData.current_units.apparent_temperature}`);

    // console.log(`Humidity : ${weatherData.current.relative_humidity_2m}${weatherData.current_units.relative_humidity_2m}`);

    // console.log(`wind speed : ${weatherData.current.wind_speed_10m}${weatherData.current_units.wind_speed_10m}`);

    // const wind_direction = getWindDirection(weatherData.current.wind_direction_10m);
    // console.log(`Wind direction : ${wind_direction}`);
    
    // console.log(`Pressure: ${weatherData.current.pressure_msl}${weatherData.current_units.pressure_msl}`);

    // console.log(`Visibility: ${weatherData.current.visibility}${weatherData.current_units.visibility}`);

    // console.log(`Precipitation : ${weatherData.daily.precipitation_sum[0]}${weatherData.daily_units.precipitation_sum}`);

    // console.log(`UV Index: ${weatherData.current.uv_index}`);

    // const sunrise = weatherData.daily.sunrise[0];
    // console.log(`Sunrise : ${getSunriseSetset(sunrise)}`);

    // const sunset = weatherData.daily.sunset[0];
    // console.log(`sunset : ${getSunriseSetset(sunset)}`);



}

