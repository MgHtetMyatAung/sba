"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LoaderCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  password: string;
}

export default function RegisterForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      const response = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = await response.json();
      if (response.ok) {
        signIn("credentials", {
          redirect: false,
          email: data.email,
          password: data.password,
        }).then((res) => {
          if (res?.ok) {
            router.push("/");
            router.refresh();
          }
        });
        toast.success("Registration successful");
      } else {
        toast.error(responseData.message);
      }
      setIsSubmitting(false);
    } catch (error) {
      //   throw new Error("An error occurred during registration.");
      // console.log("An error occurred during registration.");
      toast.error("An error occurred during registration.");
    }
  };
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name">Name</label>
        <Input type="text" placeholder="Name" {...register("name")} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <Input type="email" placeholder="Email" {...register("email")} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          placeholder="Password"
          {...register("password")}
        />
      </div>
      <div className=" text-center">
        <Button disabled={isSubmitting} className=" min-w-[150px] text-center">
          {isSubmitting ? (
            <LoaderCircle className=" animate-spin" />
          ) : (
            "Sign Up"
          )}
        </Button>
      </div>
    </form>
  );
}
