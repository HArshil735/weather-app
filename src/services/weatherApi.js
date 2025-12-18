const API_KEY = "00e196fca1a2d7aa4362ef540157af47";

export const fetchWeather = async (city) => {
  const weatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );

  if (!weatherRes.ok) {
    throw new Error("City not found");
  }

  const weatherData = await weatherRes.json();

  const { lat, lon } = weatherData.coord;

  const aqiRes = await fetch(
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );

  const aqiData = await aqiRes.json();

  return {
    weather: weatherData,
    aqi: aqiData.list[0],
  };
};
