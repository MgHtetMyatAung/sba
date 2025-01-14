import { getServerSession } from "next-auth";
import { Button } from "../ui/button";
import { DropDownProfile } from "./DropDownProfile";
import Link from "next/link";
import { prisma } from "@/utils/prisma";

export default async function AuthBtn() {
  const session = await getServerSession();
  const userData = await prisma.user.findUnique({
    where: {
      email: session?.user?.email!,
    },
    select: {
      memberType: true,
    },
  });
  return (
    <div className="">
      {session?.user ? (
        <DropDownProfile memberType={userData?.memberType!} />
      ) : (
        <div className="hidden md:flex space-x-2">
          <Link href={"/auth/login"}>
            <Button variant="outline">Log In</Button>
          </Link>
          <Link href={"/auth/register"}>
            <Button>Sign Up</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
