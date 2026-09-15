

export function getWeatherDescription(code) {
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


export function formattedDateAndTime(currentTime) {
    const date = new Date(currentTime);

    const day = date.toLocaleDateString("en-US", {
        weekday: "short"
    });

    const dayNumber = date.toLocaleDateString("en-US", {
        day: "numeric"
    });

    const month = date.toLocaleDateString("en-US", {
        month: "short"
    });

    const year = date.toLocaleDateString("en-US", {
        year: "numeric"
    });

    const time = date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });

    const formattedDate =
        `${day}, ${dayNumber} ${month}, ${year} | ${time}`;

    return formattedDate;
}

export function getWindDirection(degree) {

    if (degree >= 0 && degree < 22.5) return `N (north)`;

    if (degree >= 22.5 && degree < 67.5) return `NE (northeast)`;

    if (degree >= 67.5 && degree < 112.5) return `E (east)`;

    if (degree >= 112.5 && degree < 157.5) return `SE (southeast)`;

    if (degree >= 157.5 && degree < 202.5) return `S (south)`;

    if (degree >= 202.5 && degree < 247.5) return `SW (southwest)`;

    if (degree >= 247.5 && degree < 292.5) return `W (west)`;

    if (degree >= 292.5 && degree < 337.5) return `NW (northwest)`;

    if (degree >= 337.5 && degree <= 360) return `N (north)`;

    return `Wrong direction!`;
}

export function getSunriseSetset(time) {
    const sunTime = new Date(time).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    });

    return sunTime;

}