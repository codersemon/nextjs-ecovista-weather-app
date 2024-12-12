// dependencies
import locationData from "@/lib/data.json";
import { getLocationLatLong } from "../location-api";

// get all locations
export const getLocations = () => {
  return locationData.data;
};

// get location by name
export const getLocationByName = (locationName) => {
  if (!locationName) return;

  const location = locationData.data.find(
    (item) => item.location.toLowerCase() === locationName.toLowerCase()
  );

  return location || {};
};

// get air quality index value to text
export const getAirQualityIndex = (val) => {
  switch (val) {
    case 1:
      return "Good";
    case 2:
      return "Fair";
    case 3:
      return "Moderate";
    case 4:
      return "Poor";
    case 5:
      return "Very Poor";
    default:
      return "Unknown";
  }
};

// get resolved latitude & longitude
export const getResolvedLatLong = async (location, lat, long) => {
  // if already have latitude & longitude, then return them
  if (lat && long) {
    return { lat, long };
  }

  // getting location lat & long from db
  const locationLatlong = await getLocationLatLong(location);

  // if lat long found then return them
  if (locationLatlong.latitude && locationLatlong.longitude) {
    const lat = locationLatlong.latitude;
    const long = locationLatlong.longitude;

    return { lat, long };
  }
};
