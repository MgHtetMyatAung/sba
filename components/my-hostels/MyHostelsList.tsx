import { prisma } from "@/utils/prisma";
import { getServerSession } from "next-auth";
import React from "react";
import HostelCard from "../hostels/HostelCard";

export default async function MyHostelsList() {
  const session = await getServerSession();
  const userData = await prisma.user.findUnique({
    where: { email: session?.user?.email! },
  });
  const hostels = await prisma.hostel.findMany({
    where: { userId: userData?.id },
  });
  return (
    <div className=" space-y-6">
      {hostels.map((hostel: Hostel) => (
        <HostelCard key={hostel.id} hostel={hostel} />
      ))}
    </div>
  );
}
