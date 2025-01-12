import HostelDetail from "@/components/hostels/HostelDetail";
import { prisma } from "@/utils/prisma";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const hostelId = (await params).id;
  const hostel = await prisma.hostel.findUnique({
    where: {
      id: parseInt(hostelId),
    },
  });
  return (
    <div>
      <HostelDetail {...hostel} />
    </div>
  );
}
