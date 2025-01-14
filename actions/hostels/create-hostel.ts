"use server";

import { prisma } from "@/utils/prisma";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createHostel(prevState: string, data: FormData) {
  const session = await getServerSession();
  const user = await prisma.user.findUnique({
    where: { email: session?.user?.email! },
  });
  const hostel = await prisma.hostel.create({
    data: {
      description: data.get("description") as string,
      location: data.get("location") as string,
      region: data.get("region") as string,
      city: data.get("city") as string,
      address: data.get("address") as string,
      pricePerMonth: Number(data.get("pricePerMonth")),
      agent_fee: Number(data.get("agent_fee")),
      deposit: Number(data.get("deposit")),
      contract: data.get("contract") as "MONTHLY" | "YEARLY",
      contractPeriod: Number(data.get("contractPeriod")),
      userId: user?.id!,
    },
  });

  if (!hostel) {
    throw new Error("Hostel not created");
  }

  return { message: "success" };
}
