// get location info
export const getLocationInfo = async (lat, long) => {
  try {
    const res = await fetch(
      `https://api-bdc.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`
    );
    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error(error?.message || "Something went wrong!");
  }
};

// get locations list
export const getLocationLatLongList = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_OWN_API_URI}/api/location`
    );
    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error(error?.message || "Something went wrong!");
  }
};

// get location lat long by name
export const getLocationLatLong = async (locationName) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_OWN_API_URI}/api/location/${locationName}`
    );
    const data = await res.json();

    return data;
  } catch (error) {
    throw new Error(error?.message || "Something went wrong!");
  }
};
