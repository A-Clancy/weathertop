//assign the weather icons and descriptions using key value pairs and inject using literals.

const weatherIconMapping = {
  // Thunderstorm
  200: { icon: "11d", description: "Thunderstorm with light rain" },
  201: { icon: "11d", description: "Thunderstorm with rain" },
  202: { icon: "11d", description: "Thunderstorm with heavy rain" },
  210: { icon: "11d", description: "Light thunderstorm" },
  211: { icon: "11d", description: "Thunderstorm" },
  212: { icon: "11d", description: "Heavy thunderstorm" },
  221: { icon: "11d", description: "Ragged thunderstorm" },
  230: { icon: "11d", description: "Thunderstorm with light drizzle" },
  231: { icon: "11d", description: "Thunderstorm with drizzle" },
  232: { icon: "11d", description: "Thunderstorm with heavy drizzle" },

  // Drizzle
  300: { icon: "09d", description: "Light intensity drizzle" },
  301: { icon: "09d", description: "Drizzle" },
  302: { icon: "09d", description: "Heavy intensity drizzle" },
  310: { icon: "09d", description: "Light intensity drizzle rain" },
  311: { icon: "09d", description: "Drizzle rain" },
  312: { icon: "09d", description: "Heavy intensity drizzle rain" },
  313: { icon: "09d", description: "Shower rain and drizzle" },
  314: { icon: "09d", description: "Heavy shower rain and drizzle" },
  321: { icon: "09d", description: "Shower drizzle" },

  // Rain
  500: { icon: "10d", description: "Light rain" },
  501: { icon: "10d", description: "Moderate rain" },
  502: { icon: "10d", description: "Heavy intensity rain" },
  503: { icon: "10d", description: "Very heavy rain" },
  504: { icon: "10d", description: "Extreme rain" },
  511: { icon: "13d", description: "Freezing rain" },
  520: { icon: "09d", description: "Light shower rain" },
  521: { icon: "09d", description: "Shower rain" },
  522: { icon: "09d", description: "Heavy shower rain" },
  531: { icon: "09d", description: "Ragged shower rain" },

  // Snow
  600: { icon: "13d", description: "Light snow" },
  601: { icon: "13d", description: "Snow" },
  602: { icon: "13d", description: "Heavy snow" },
  611: { icon: "13d", description: "Sleet" },
  612: { icon: "13d", description: "Light shower sleet" },
  613: { icon: "13d", description: "Shower sleet" },
  615: { icon: "13d", description: "Light rain and snow" },
  616: { icon: "13d", description: "Rain and snow" },
  620: { icon: "13d", description: "Light shower snow" },
  621: { icon: "13d", description: "Shower snow" },
  622: { icon: "13d", description: "Heavy shower snow" },

  // Atmosphere
  701: { icon: "50d", description: "Mist" },
  711: { icon: "50d", description: "Smoke" },
  721: { icon: "50d", description: "Haze" },
  731: { icon: "50d", description: "Sand/dust whirls" },
  741: { icon: "50d", description: "Fog" },
  751: { icon: "50d", description: "Sand" },
  761: { icon: "50d", description: "Dust" },
  762: { icon: "50d", description: "Ash" },
  771: { icon: "50d", description: "Squall" },
  781: { icon: "50d", description: "Tornado" },

  // Clear
  800: { icon: "01d", description: "Clear sky" },

  // Clouds
  801: { icon: "02d", description: "Few clouds" },
  802: { icon: "03d", description: "Scattered clouds" },
  803: { icon: "04d", description: "Broken clouds" },
  804: { icon: "04d", description: "Overcast clouds" },
};

export function getIconUrl(weatherCode) {
  const iconCode = weatherIconMapping[weatherCode]?.icon || "01d";
  return `http://openweathermap.org/img/wn/${iconCode}.png`;
}

export function getWeatherDescription(weatherCode) {
  return (
    weatherIconMapping[weatherCode]?.description || "Unknown weather condition"
  );
}
