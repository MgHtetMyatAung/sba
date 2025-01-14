import { getServerSession } from "next-auth";
import { Button } from "../ui/button";
import { DropDownProfile } from "./DropDownProfile";
import Link from "next/link";
import { prisma } from "@/utils/prisma";

export default async function AuthBtn() {
  const session = await getServerSession();
  return (
    <div className="">
      {session?.user ? (
        <DropDownBox email={session?.user?.email!} />
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

async function DropDownBox({ email }: { email?: string }) {
  const userData = await prisma.user.findUnique({
    where: {
      email: email!,
    },
    select: {
      memberType: true,
    },
  });
  return <DropDownProfile memberType={userData?.memberType!} />;
}
