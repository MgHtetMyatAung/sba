import { prisma } from "@/utils/prisma";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

export default async function ProfilePage() {
  const session = await getServerSession();
  return (
    <>
      {session?.user?.email ? <ProfileUi email={session.user.email} /> : null}
    </>
  );
}

async function ProfileUi({ email }: { email?: string }) {
  const profileData = await prisma.user.findUnique({
    where: {
      email: email!,
    },
  });
  return (
    <div className=" min-h-[70vh] py-5">
      <div>
        <Image
          src={profileData?.avatar || "/icons/user.png"}
          alt="profile"
          width={100}
          height={100}
          className="rounded-full w-[80px] h-[80px] object-cover border mx-auto"
        />
      </div>
      <div className=" py-3 space-y-2">
        <h3 className=" text-xl font-semibold text-center">
          {profileData?.name}
        </h3>
        <p className=" text-center text-gray-600">{profileData?.email}</p>
      </div>
      <div>
        {profileData?.memberType && (
          <div className=" flex gap-2 items-center justify-center border p-2 rounded-lg w-fit mx-auto">
            <p className=" text-sm text-gray-600">Member Type:</p>
            <p className=" text-sm text-blue-600">{profileData?.memberType}</p>
          </div>
        )}
      </div>
    </div>
  );
}
