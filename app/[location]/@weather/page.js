import Card from "@/components/Card";
import LocationNotFoundComponent from "@/components/LocationNotFoundComponent";
import WeatherComponent from "@/components/WeatherComponent";
import { getResolvedLatLong } from "@/lib/utils/utils";

const WeatherPage = async ({
  params: { location },
  searchParams: { lat, long },
}) => {
  const resolvedLatLong = await getResolvedLatLong(location, lat, long);

  if (resolvedLatLong?.lat && resolvedLatLong?.long) {
    return (
      <Card>
        <WeatherComponent
          lat={resolvedLatLong?.lat}
          long={resolvedLatLong?.long}
        />
      </Card>
    );
  }

  return <LocationNotFoundComponent location={location} />;
};

export default WeatherPage;
