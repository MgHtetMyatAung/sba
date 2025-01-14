import MyHostelsList from "@/components/my-hostels/MyHostelsList";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function MyHostelsPage() {
  return (
    <div className=" min-h-[70vh] py-5 px-5 lg:px-0">
      <div className=" flex justify-between items-center py-3">
        <h3 className=" text-xl font-semibold">My Hostels</h3>
        <Link href={"/my-hostels/create"}>
          <Button variant={"outline"} className=" rounded-2xl">
            <Plus />
            Create a Hostel
          </Button>
        </Link>
      </div>
      <div className=" mt-3">
        <MyHostelsList />
      </div>
    </div>
  );
}
