// dependencies
import { getLocationInfo } from "@/lib/location-api";
import LocationSwitcher from "./LocationSwitcher";

const LocationComponent = async ({ lat, long }) => {
  // get location info
  const locationInfo = await getLocationInfo(lat, long);

  return (
    <div className="col-span-12 flex flex-col justify-end lg:col-span-8 2xl:col-span-8">
      <div>
        <div className="mb-2 flex items-center gap-2">
          <h2 className="text-3xl font-bold text-white lg:text-4xl 2xl:text-[40px]">
            {locationInfo?.continent}
          </h2>
          <LocationSwitcher />
        </div>
        <p className="text-lg text-[#C4C4C4] lg:text-xl">
          {locationInfo?.countryName} | {locationInfo?.city}
        </p>
        <div className="flex items-center gap-2 text-xs text-[#92B6F5] lg:text-sm">
          <span>{new Date().toLocaleTimeString()}</span>{" "}
          <span>{new Date().toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default LocationComponent;
