import { prisma } from "@/utils/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(nextRequest: NextRequest) {
  const body = await nextRequest.json();
  const session = await getServerSession();
  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email! },
  });
  const hostel = await prisma.hostel.create({
    data: {
      userId: user?.id!,
      ...body,
    },
  });
  return NextResponse.json(
    { message: "Hostel created successfully" },
    { status: 200 }
  );
}
