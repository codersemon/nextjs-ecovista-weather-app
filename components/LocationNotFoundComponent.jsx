// dependencies
import Link from "next/link";
import Card from "./Card";

const LocationNotFoundComponent = ({ location }) => {
  return (
    <Card>
      <div className="flex flex-col justify-center items-center h-full gap-4">
        <p className="text-xl text-center">
          The location &quot;{location}&quot; you are trying to search, is not
          available
        </p>
        <Link
          href="/"
          className=" bg-gray-900 inline-block px-4 py-2 rounded-md hover:bg-opacity-80"
        >
          Get your location weather
        </Link>
      </div>
    </Card>
  );
};

export default LocationNotFoundComponent;
