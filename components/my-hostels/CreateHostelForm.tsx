"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { hostelformSchema } from "@/schema/create-hostel-schema";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { revalidatePath } from "next/cache";

const contractTypes = ["MONTHLY", "YEARLY"] as const;

export function CreateHostelForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof hostelformSchema>>({
    resolver: zodResolver(hostelformSchema),
    defaultValues: {
      description: "",
      location: "",
      region: "",
      city: "",
      address: "",
      pricePerMonth: "",
      agent_fee: "",
      deposit: "",
      contract: "MONTHLY",
      contractPeriod: 1,
    },
  });

  const onSubmit = async (values: z.infer<typeof hostelformSchema>) => {
    try {
      setIsSubmitting(true);
      // Convert string values to numbers where necessary
      const processedValues = {
        ...values,
        pricePerMonth: Number(values.pricePerMonth),
        agent_fee: values.agent_fee ? Number(values.agent_fee) : undefined,
        deposit: values.deposit ? Number(values.deposit) : undefined,
      };
      // TODO: Implement form submission logic
      const response = await fetch("/api/hostels", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(processedValues),
      });
      if (response.ok) {
        toast.success("Hostel created successfully");
        router.push("/my-hostels");
      }
    } catch (error) {
      toast.error("An error occurred while creating the hostel");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Describe the hostel" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="Enter location" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="region"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Region</FormLabel>
              <FormControl>
                <Input placeholder="Enter region" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input placeholder="Enter city" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pricePerMonth"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price per Month</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter price" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="agent_fee"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Agent Fee (optional)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter agent fee" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="deposit"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Deposit (optional)</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter deposit" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contract"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contract Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select contract type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {contractTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contractPeriod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contract Period</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter contract period"
                  {...field}
                  onChange={(e) => field.onChange(parseInt(e.target.value))}
                />
              </FormControl>
              <FormDescription>
                Number of contract periods (e.g., number of months for monthly
                contracts)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          {isSubmitting ? (
            <LoaderCircle className=" animate-spin" />
          ) : (
            "Create Hostel"
          )}
        </Button>
      </form>
    </Form>
  );
}
