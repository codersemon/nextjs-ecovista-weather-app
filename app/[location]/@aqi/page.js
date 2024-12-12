// dependencies
import AQIComponent from "@/components/AQIComponent";
import Card from "@/components/Card";
import LocationNotFoundComponent from "@/components/LocationNotFoundComponent";
import { getResolvedLatLong } from "@/lib/utils/utils";

const AQIPage = async ({
  params: { location },
  searchParams: { lat, long },
}) => {
  const resolvedLatLong = await getResolvedLatLong(location, lat, long);

  if (resolvedLatLong?.lat && resolvedLatLong?.long) {
    return (
      <Card col={6}>
        <AQIComponent lat={resolvedLatLong?.lat} long={resolvedLatLong?.long} />
      </Card>
    );
  }

  return <LocationNotFoundComponent location={location} />;
};

export default AQIPage;
