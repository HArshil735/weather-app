function AQICard({ aqi }) {
  if (!aqi) return null;

  const levels = ["Good", "Fair", "Moderate", "Poor", "Very Poor"];
  const colors = [
    "text-green-400",
    "text-lime-400",
    "text-yellow-400",
    "text-orange-400",
    "text-red-500",
  ];

  const index = aqi.main.aqi - 1;

  return (
    <div className="bg-black p-6 rounded-xl border border-gray-800">
      <h3 className="text-lg font-semibold mb-2">Air Quality</h3>

      <p className={`text-xl font-bold ${colors[index]}`}>
        {levels[index]}
      </p>

      <div className="grid grid-cols-2 gap-3 mt-3 text-sm">
        <p>PM2.5: {aqi.components.pm2_5}</p>
        <p>PM10: {aqi.components.pm10}</p>
        <p>CO: {aqi.components.co}</p>
        <p>NO₂: {aqi.components.no2}</p>
      </div>
    </div>
  );
}

export default AQICard;
