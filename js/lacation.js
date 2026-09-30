

import { getWeather, getReverseLocation } from "./api.js";
import { displayElements, AQIdisplay } from "./display.js";


export function getLocationFunction() {


    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // console.log(latitude, longitude);
            const locationData = await getReverseLocation(latitude, longitude);

            const nameOfCity = {
                name: locationData.city || locationData.locality,
                country: locationData.countryName,
            };

            const data = await getWeather(
                latitude,
                longitude,
                nameOfCity,
            );

            if (!data) return;

            displayElements(data.weatherData, data.nameOfCity);
            AQIdisplay(data.AQIdata);

        },
        (err) => {
            alert(err.message);
        }
    );
}