// dependencies
import { getLocationByName } from "@/lib/utils/utils";
import { NextResponse } from "next/server";

export const GET = (_request, { params: { name } }) => {
  const location = getLocationByName(name);

  return NextResponse.json(location);
};
