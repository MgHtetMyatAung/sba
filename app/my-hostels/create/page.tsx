import { CreateHostelForm } from "@/components/my-hostels/CreateHostelForm";
import React from "react";

export default function HostelCreatePage() {
  return (
    <div className=" py-5 px-5 lg:px-0">
      <h3 className="text-2xl font-bold mb-3">Create New Hostel</h3>
      <div>
        <CreateHostelForm />
      </div>
    </div>
  );
}
