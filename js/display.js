

import { elements } from "./elements.js";
import { getWeather } from "./api.js";
import { getWeatherDescription } from "./utils.js";

export function displayElements(weatherData) {
    elements.temperature.textContent =
        `${Math.round(weatherData.current.temperature_2m)}${weatherData.current_units.temperature_2m}`;

    const weatherCode = weatherData.current.weather_code
    elements.weather.textContent = getWeatherDescription(weatherCode);

    elements.minimumTemp.textContent =
        `${Math.round(weatherData.daily.temperature_2m_min[0])}${weatherData.daily_units.temperature_2m_min}`;
    elements.maximumTemp.textContent =
        `${Math.round(weatherData.daily.temperature_2m_max[0])}${weatherData.daily_units.temperature_2m_max}`;
}

export function displayElementsInConsoleTab(weatherData) {
    console.log(
        `Temperature: ${weatherData.current.temperature_2m}${weatherData.current_units.temperature_2m}`
    );
    // temperature.textContent = `Temperature: ${weatherData.current.temperature_2m}${weatherData.current_units.temperature_2m}`;

    // console.log(getWeatherDescription(weatherData.current.weather_code));
    // weather.textContent = getWeatherDescription(weatherData.current.weather_code);

    // console.log(getWeatherIcon(weatherData.current.weather_code));
    // weatherIcon.textContent = getWeatherIcon(weatherData.current.weather_code);


    console.log(`wind speed : ${weatherData.current.wind_speed_10m}${weatherData.current_units.wind_speed_10m}`);
    // windSpeed.textContent = `Wind Speed : ${weatherData.current.wind_speed_10m}${weatherData.current_units.wind_speed_10m}`;

    console.log(`Humidity : ${weatherData.current.relative_humidity_2m}${weatherData.current_units.relative_humidity_2m}`);
    // humidity.textContent = `Humidity : ${weatherData.current.relative_humidity_2m}${weatherData.current_units.relative_humidity_2m}`;

    console.log(`Feels Like : ${weatherData.current.apparent_temperature}${weatherData.current_units.apparent_temperature}`);
    // feelsLikeTemp.textContent = `Feels like : ${weatherData.current.apparent_temperature}${weatherData.current_units.apparent_temperature}`;

    // const wind_direction = getWindDirection(weatherData.current.wind_direction_10m);
    // console.log(`Wind direction : ${wind_direction}`);
    // windDirection.textContent = wind_direction;

    console.log(`Minimum Temperature : ${weatherData.daily.temperature_2m_min[0]}${weatherData.daily_units.temperature_2m_min}`);
    // minimumTemp.textContent = `Minimum Temperature : ${weatherData.daily.temperature_2m_min[0]}${weatherData.daily_units.temperature_2m_min}`

    console.log(`Maximum Temperature : ${weatherData.daily.temperature_2m_max[0]}${weatherData.daily_units.temperature_2m_max}`);
    // maximumTemp.textContent = `Maximum Temperature : ${weatherData.daily.temperature_2m_max[0]}${weatherData.daily_units.temperature_2m_max}`;

    console.log(`Precipitation : ${weatherData.daily.precipitation_sum[0]}${weatherData.daily_units.precipitation_sum}`);
    // precipitation.textContent = `Precipitation : ${weatherData.daily.precipitation_sum[0]}${weatherData.daily_units.precipitation_sum}`;

    console.log(`Sunrise : ${weatherData.daily.sunrise[0]}`);
    console.log(`sunset : ${weatherData.daily.sunset[0]}`);
    // const FORMAT_TIME = formatTime(weatherData.daily.sunrise[0]);
    // console.log(`sunrise : ${formatTime(weatherData.daily.sunrise[0])}`);
    // sunrise.textContent = `Sunrise : ${formatTime(weatherData.daily.sunrise[0])}`;

    // console.log(`sunset : ${formatTime(weatherData.daily.sunset[0])}`);
    // sunset.textContent = `Sunset : ${formatTime(weatherData.daily.sunset[0])}`;

    console.log(`Visibility: ${weatherData.current.visibility}${weatherData.current_units.visibility}`);
    // visibility.textContent = `Visibility: ${weatherData.current.visibility}${weatherData.current_units.visibility}`;

    console.log(`UV Index: ${weatherData.current.uv_index}`);
    // uvIndex.textContent = `UV Index: ${weatherData.current.uv_index}`;

    console.log(`Pressure: ${weatherData.current.pressure_msl}${weatherData.current_units.pressure_msl}`);
    // pressure.textContent = `Pressure: ${weatherData.current.pressure_msl}${weatherData.current_units.pressure_msl}`;

}
