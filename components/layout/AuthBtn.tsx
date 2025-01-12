import { getServerSession } from "next-auth";
import { Button } from "../ui/button";
import { DropDownProfile } from "./DropDownProfile";
import Link from "next/link";

export default async function AuthBtn() {
  const session = await getServerSession();
  return (
    <div className="">
      {session?.user ? (
        <DropDownProfile />
      ) : (
        <div className="hidden md:flex space-x-2">
          <Link href={"/auth/login"}>
            <Button variant="outline">Log In</Button>
          </Link>
          <Button>Sign Up</Button>
        </div>
      )}
    </div>
  );
}
