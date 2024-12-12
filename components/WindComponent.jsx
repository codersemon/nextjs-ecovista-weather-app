// dependencies
import { getWindData } from "@/lib/weather-api";
import Image from "next/image";

const WindComponent = async ({ lat, long }) => {
  // get wind data
  const { speed, deg } = await getWindData(lat, long);

  return (
    <>
      <h6 className="feature-name">Wind</h6>
      <div className="feature-main">
        <Image
          className="max-w-20"
          src="/assets/icons/icon_wind.png"
          alt="rain icon"
          width={100}
          height={100}
        />
        <h3 className="feature-title">{speed} <span className="text-sm">meter/sec</span></h3>
        <span className="feature-name">{deg} degrees</span>
      </div>
    </>
  );
};

export default WindComponent;
