// directives
"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const LocationDetector = () => {
  // hooks init
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  // loading state
  const [isLoading, setIsLoading] = useState(false);

  // detect location
  useEffect(() => {
    // enabling loader
    setIsLoading(true);

    const params = new URLSearchParams(searchParams);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        params.set("lat", position.coords.latitude);
        params.set("long", position.coords.longitude);

        router.push(`/current?${params.toString()}`);
      });
    }
  }, [searchParams, pathname, router]);

  return <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
    {
            isLoading && (
                <>
                    <Image
                        src="/assets/images/network.gif"
                        alt="Loading..."
                        height={500}
                        width={500}
                        className="border rounded-md my-4" />
                    <p className="text-4xl text-center animate-bounce">Detecting Location...</p>
                </>
            )
        }
  </div>;
};

export default LocationDetector;
