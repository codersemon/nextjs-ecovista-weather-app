// dependencies
import LocationComponent from "@/components/LocationComponent";
import LocationNotFoundComponent from "@/components/LocationNotFoundComponent";
import { getResolvedLatLong } from "@/lib/utils/utils";

const LocationPage = async ({
  params: { location },
  searchParams: { lat, long },
}) => {
  const resolvedLatLong = await getResolvedLatLong(location, lat, long);

  if (resolvedLatLong?.lat && resolvedLatLong?.long) {
    return (
      <LocationComponent
        lat={resolvedLatLong?.lat}
        long={resolvedLatLong?.long}
      />
    );
  }

  return <LocationNotFoundComponent location={location} />;
};

export default LocationPage;
