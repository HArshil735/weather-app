function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <div className="bg-black p-6 rounded-xl text-center border border-gray-800">
      <h2 className="text-xl font-semibold">
        {weather.name}, {weather.sys.country}
      </h2>

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
        className="mx-auto"
      />

      <p className="text-4xl font-bold">
        {Math.round(weather.main.temp)}°C
      </p>

      <p className="capitalize text-gray-300">
        {weather.weather[0].description}
      </p>

      <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind: {weather.wind.speed} m/s</p>
      </div>
    </div>
  );
}

export default WeatherCard;
