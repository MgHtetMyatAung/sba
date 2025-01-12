"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

export default function FormBtn({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  const { pending } = useFormStatus();
  return <Button className={className}>{pending ? "loading" : title}</Button>;
}
