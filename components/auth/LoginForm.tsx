"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { Label } from "../ui/label";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
interface FormData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit } = useForm<FormData>();

  const handleLogin = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      const response = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      if (response?.ok) {
        router.push("/"); // Redirect after login
        router.refresh();
        toast.success("Login successful");
      } else {
        toast.error("Login failed");
      }
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      toast.error("Login failed");
    }
  };

  return (
    <form action="" onSubmit={handleSubmit(handleLogin)} className=" space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          placeholder="user@gmail.com"
          {...register("email")}
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          placeholder="12345"
          {...register("password")}
        />
      </div>
      <div className=" text-center">
        <Button disabled={isSubmitting} className=" min-w-[150px] text-center">
          {isSubmitting ? <LoaderCircle className=" animate-spin" /> : "Login"}
        </Button>
      </div>
    </form>
  );
}
