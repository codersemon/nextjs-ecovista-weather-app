// directive
"use client";

import { getLocationLatLongList } from "@/lib/location-api";
// dependencies
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LocationSwitcher = () => {
  // location dropdown toggler state
  const [isLocationVisible, setIsLocationVisible] = useState(false);

  // location list
  const [locations, setLocations] = useState([]);

  //   fetch locations
  useEffect(() => {
    const fetchLocations = async () => {
      const data = await getLocationLatLongList();
      setLocations(data);
    };
    fetchLocations();
  }, []);

  return (
    <div className="relative">
      <button onClick={() => setIsLocationVisible((p) => !p)}>
        <Image
          className="size-9"
          src="/assets/icons/link.svg"
          alt="link icon"
          width={20}
          height={20}
        />
      </button>

      {isLocationVisible && (
        <div className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2">
          <ul
            role="list"
            className="divide-y divide-gray-100 [&>*]:py-2 [&>li]:cursor-pointer"
          >
            {locations?.map((info) => (
              <li key={info?.location}>
                <Link
                  href={`/${info?.location}/?lat=${info?.latitude}&long=${info?.longitude}`}
                >
                  {info?.location}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationSwitcher;
