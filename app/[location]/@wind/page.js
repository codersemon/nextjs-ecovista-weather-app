// dependencies
import Card from "@/components/Card";
import LocationNotFoundComponent from "@/components/LocationNotFoundComponent";
import WindComponent from "@/components/WindComponent";
import { getResolvedLatLong } from "@/lib/utils/utils";

const WindPage = async ({
  params: { location },
  searchParams: { lat, long },
}) => {
  const resolvedLatLong = await getResolvedLatLong(location, lat, long);

  if (resolvedLatLong?.lat && resolvedLatLong?.long) {
    return (
      <Card>
        <WindComponent
          lat={resolvedLatLong?.lat}
          long={resolvedLatLong?.long}
        />
      </Card>
    );
  }

  return <LocationNotFoundComponent location={location} />;
};

export default WindPage;
