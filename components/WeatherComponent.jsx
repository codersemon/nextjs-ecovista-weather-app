// dependencies
import { getCurrentWeatherData } from "@/lib/weather-api";
import Image from "next/image";

const WeatherComponent = async ({ lat, long }) => {
  // get current weather data
  const weather = await getCurrentWeatherData(lat, long);

  return (
    <>
      <h6 className="feature-name">Current Weather</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/assets/icons/icon_rain.png"
          alt="rain icon"
          width={100}
          height={100}
        />
        <h3 className="feature-title">{weather?.main}</h3>
        <span className="feature-name">{weather?.description}</span>
      </div>
    </>
  );
};

export default WeatherComponent;
