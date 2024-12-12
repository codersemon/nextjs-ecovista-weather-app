// get current weather data
export const getCurrentWeatherData = async (lat, long) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`
    );
    const data = await res.json();

    return data?.weather?.[0];
  } catch (error) {
    throw new Error(error?.message || "Something went wrong!");
  }
};

// get temperature data
export const getTemperatureData = async (lat, long) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`
    );
    const data = await res.json();

    return data?.main;
  } catch (error) {
    throw new Error(error?.message || "Something went wrong!");
  }
};

// get wind data
export const getWindData = async (lat, long) => {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`
    );
    const data = await res.json();

    return data?.wind;
  } catch (error) {
    throw new Error(error?.message || "Something went wrong!");
  }
};

// get Air Quality Index data
export const getAQIData = async (lat, long) => {
  try {
    const res = await fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=${process.env.OPEN_WEATHER_API_KEY}&units=metric`
    );
    const data = await res.json();

    return data?.list?.[0];
  } catch (error) {
    throw new Error(error?.message || "Something went wrong!");
  }
};
