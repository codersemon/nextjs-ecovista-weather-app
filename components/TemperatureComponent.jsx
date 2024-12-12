import { getTemperatureData } from "@/lib/weather-api";
import Image from "next/image";

const TemperatureComponent = async ({ lat, long }) => {
  // getting temperature data
  const { temp, feels_like } = await getTemperatureData(lat, long);

  return (
    <>
      <h6 className="feature-name">Current Temperature</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/assets/icons/icon_tempareture.png"
          alt="rain icon"
          width={100}
          height={100}
        />
        <h3 className="feature-title">{temp}°C</h3>
        <span className="feature-name">Feels Like {feels_like}°C</span>
      </div>
    </>
  );
};

export default TemperatureComponent;
