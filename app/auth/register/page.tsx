import RegisterForm from "@/components/auth/RegisterForm";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default async function RegisterPage() {
  const session = await getServerSession();
  if (session?.user) redirect("/");
  return (
    <div className="py-5 space-y-5 my-5 container">
      <h3 className=" text-xl font-semibold text-center">Sign Up</h3>
      <RegisterForm />
      <div>
        <p className=" text-center text-sm">
          Already have an account?{" "}
          <Link href={"/auth/login"} className=" text-blue-500">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
