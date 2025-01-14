import { prisma } from "@/utils/prisma";
import { getServerSession } from "next-auth";
import React from "react";
import HostelCard from "../hostels/HostelCard";

export default async function MyHostelsList() {
  const session = await getServerSession();

  return (
    <>{session?.user?.email ? <ListBox email={session.user.email} /> : null}</>
  );
}

async function ListBox({ email }: { email?: string }) {
  const userData = await prisma.user.findUnique({
    where: { email: email! },
  });

  return <>{userData?.id ? <HostelsBox id={userData.id} /> : null}</>;
}

async function HostelsBox({ id }: { id: number }) {
  const hostels = await prisma.hostel.findMany({
    where: { userId: id },
  });
  return (
    <div className=" space-y-6">
      {hostels.map((hostel: Hostel) => (
        <HostelCard key={hostel.id} hostel={hostel} />
      ))}
    </div>
  );
}
