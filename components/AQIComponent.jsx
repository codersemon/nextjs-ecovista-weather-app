import { getAirQualityIndex } from "@/lib/utils/utils";
import { getAQIData } from "@/lib/weather-api";
import Image from "next/image";

const AQIComponent = async ({ lat, long }) => {
  // get air quality index data
  const { main, components } = await getAQIData(lat, long);

  return (
    <>
      <h6 className="feature-name">Air Pollution &amp; Quality</h6>
      {/* info items */}
      <div className="mt-3 space-y-2 lg:space-y-3">
        {/* item */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/assets/icons/icon_air_element.png"
              alt="icon"
              width={30}
              height={30}
            />
            Air Quality Index
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {getAirQualityIndex(main?.aqi)}
          </span>
        </div>
        {/* item ends */}
        {/* item */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/assets/icons/icon_air_element.png"
              alt="icon"
              width={30}
              height={30}
            />
            Carbon Monoxide
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {components?.co} µg/m³
          </span>
        </div>
        {/* item ends */}
        {/* item */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/assets/icons/icon_air_element.png"
              alt="icon"
              width={30}
              height={30}
            />
            Nitric Oxide
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {components?.no} ppm
          </span>
        </div>
        {/* item ends */}
        {/* item */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/assets/icons/icon_air_element.png"
              alt="icon"
              width={30}
              height={30}
            />
            Nitrogen Dioxide
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {components?.no2} ppm
          </span>
        </div>
        {/* item ends */}
        {/* item */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/assets/icons/icon_air_element.png"
              alt="icon"
              width={30}
              height={30}
            />
            Ozone
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {components?.o3} µg/m³
          </span>
        </div>
        {/* item ends */}
        {/* item */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/assets/icons/icon_air_element.png"
              alt="icon"
              width={30}
              height={30}
            />
            Sulfur Dioxide
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {components?.so2} ppm
          </span>
        </div>
        {/* item ends */}
        {/* item */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image
              className="max-w-[18px]"
              src="/assets/icons/icon_air_element.png"
              alt="icon"
              width={30}
              height={30}
            />
            PM2.5
          </div>
          <span className="text-right text-sm text-white lg:text-base">
            {components?.pm2_5} µg/m³
          </span>
        </div>
        {/* item ends */}
      </div>
    </>
  );
};

export default AQIComponent;
