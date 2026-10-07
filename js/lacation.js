import { getWeather, getReverseLocation } from "./api.js";
import { displayElements, AQIdisplay } from "./display.js";
import { showLoading, hideLoading, showError } from "./utils.js";

export function getLocationFunction() {

    showLoading();

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            try {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                const locationData = await getReverseLocation(
                    latitude,
                    longitude
                );

                const nameOfCity = {
                    name: locationData.city || locationData.locality,
                    country: locationData.countryName,
                };

                const data = await getWeather(
                    latitude,
                    longitude,
                    nameOfCity
                );

                if (!data) {
                    throw new Error("Unable to get weather data.");
                }

                displayElements(data.weatherData, data.nameOfCity);
                AQIdisplay(data.AQIdata);

                hideLoading();

            } catch (err) {
                hideLoading();
                showError(err.message);
            }
        },

        (err) => {
            hideLoading();
            showError(err.message);
        }
    );
}