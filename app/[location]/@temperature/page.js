// dependencies
import Card from "@/components/Card";
import LocationNotFoundComponent from "@/components/LocationNotFoundComponent";
import TemperatureComponent from "@/components/TemperatureComponent";
import { getResolvedLatLong } from "@/lib/utils/utils";

const TemperaturePage = async ({
  params: { location },
  searchParams: { lat, long },
}) => {
  const resolvedLatLong = await getResolvedLatLong(location, lat, long);

  if (resolvedLatLong?.lat && resolvedLatLong?.long) {
    return (
      <Card>
        <TemperatureComponent
          lat={resolvedLatLong?.lat}
          long={resolvedLatLong?.long}
        />
      </Card>
    );
  }

  return <LocationNotFoundComponent location={location} />;
};

export default TemperaturePage;
