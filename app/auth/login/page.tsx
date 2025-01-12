import LoginForm from "@/components/auth/LoginForm";
import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

export default async function LoginPage() {
  const session = await getServerSession();
  if (session?.user) redirect("/");
  return (
    <div className=" py-5 space-y-5 my-5 container">
      <h3 className=" text-xl font-semibold text-center">Login</h3>
      <LoginForm />
      <div>
        <p className=" text-center text-sm">
          Don't have an account?{" "}
          <Link href={"/auth/register"} className=" text-blue-500">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
