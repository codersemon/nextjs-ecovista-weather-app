// dependencies
import Image from "next/image";

const LocationLayout = ({ children, aqi, weather, wind, temperature }) => {
  return (
    <div className="wrapper">
      <Image
        src="/assets/images/background.png"
        className="bg-img"
        alt="background"
        width={700}
        height={1200}
      />
      <div className="overlay"></div>
      <main className="!z-50 w-full">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            {children}
            {temperature}
            {aqi}
            {wind}
            {weather}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LocationLayout;
