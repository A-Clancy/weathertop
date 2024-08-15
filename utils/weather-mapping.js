//assign the weather icons using literals. 

const weatherIconMapping = {
  // Thunderstorm
  '200': '11d', // Thunderstorm with light rain
  '201': '11d', // Thunderstorm with rain
  '202': '11d', // Thunderstorm with heavy rain
  '210': '11d', // Light thunderstorm
  '211': '11d', // Thunderstorm
  '212': '11d', // Heavy thunderstorm
  '221': '11d', // Ragged thunderstorm
  '230': '11d', // Thunderstorm with light drizzle
  '231': '11d', // Thunderstorm with drizzle
  '232': '11d', // Thunderstorm with heavy drizzle

  // Drizzle
  '300': '09d', // Light intensity drizzle
  '301': '09d', // Drizzle
  '302': '09d', // Heavy intensity drizzle
  '310': '09d', // Light intensity drizzle rain
  '311': '09d', // Drizzle rain
  '312': '09d', // Heavy intensity drizzle rain
  '313': '09d', // Shower rain and drizzle
  '314': '09d', // Heavy shower rain and drizzle
  '321': '09d', // Shower drizzle

  // Rain
  '500': '10d', // Light rain
  '501': '10d', // Moderate rain
  '502': '10d', // Heavy intensity rain
  '503': '10d', // Very heavy rain
  '504': '10d', // Extreme rain
  '511': '13d', // Freezing rain
  '520': '09d', // Light shower rain
  '521': '09d', // Shower rain
  '522': '09d', // Heavy shower rain
  '531': '09d', // Ragged shower rain

  // Snow
  '600': '13d', // Light snow
  '601': '13d', // Snow
  '602': '13d', // Heavy snow
  '611': '13d', // Sleet
  '612': '13d', // Light shower sleet
  '613': '13d', // Shower sleet
  '615': '13d', // Light rain and snow
  '616': '13d', // Rain and snow
  '620': '13d', // Light shower snow
  '621': '13d', // Shower snow
  '622': '13d', // Heavy shower snow

  // Atmosphere
  '701': '50d', // Mist
  '711': '50d', // Smoke
  '721': '50d', // Haze
  '731': '50d', // Sand/dust whirls
  '741': '50d', // Fog
  '751': '50d', // Sand
  '761': '50d', // Dust
  '762': '50d', // Ash
  '771': '50d', // Squall
  '781': '50d', // Tornado

  // Clear
  '800': '01d', // Clear sky

  // Clouds
  '801': '02d', // Few clouds
  '802': '03d', // Scattered clouds
  '803': '04d', // Broken clouds
  '804': '04d', // Overcast clouds
};

function getIconUrl(weatherCode) {
  const iconCode = weatherIconMapping[weatherCode] || '01d';
  return `http://openweathermap.org/img/wn/${iconCode}.png`;
}

function setWeatherIcon(weatherCode, elementId) {
  const iconUrl = getIconUrl(weatherCode);
  document.getElementById(elementId).src = iconUrl;
}
