// dependencies
import { getLocations } from "@/lib/utils/utils";
import { NextResponse } from "next/server";

export const GET = () => {
  const locations = getLocations();

  return NextResponse.json(locations);
};
