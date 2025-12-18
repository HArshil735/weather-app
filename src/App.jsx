import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import AQICard from "./components/AQICard";
import { fetchWeather } from "./services/weatherApi";

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!city.trim()) return;

    try {
      setError("");
      setData(null);

      const result = await fetchWeather(city);
      setData(result);
    } catch (err) {
      setError("City not found");
      setData(null);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-center">
          Weather + AQI
        </h1>

        <SearchBar
          city={city}
          setCity={setCity}
          onSearch={handleSearch}
        />

        {error && (
          <p className="text-red-500 text-center text-2xl">
            {error}
          </p>
        )}

        {data && (
          <>
            <WeatherCard weather={data.weather} />
            <AQICard aqi={data.aqi} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
