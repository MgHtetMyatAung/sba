"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { Button } from "../ui/button";
import HostelGridPhoto from "./HostelGridPhoto";
import { useRouter } from "next/navigation";

export default function HostelCard({ hostel }: { hostel: Hostel }) {
  const router = useRouter();
  const goToDetail = (id: number) => {
    router.push(`/hostels/${id}`);
  };
  return (
    <Card>
      <CardContent className="p-0 overflow-hidden">
        <div className="">
          <div
            className=" cursor-pointer"
            onClick={() => goToDetail(hostel.id)}
          >
            <HostelGridPhoto images={hostel.images} />
          </div>
          <div className="p-6">
            <h3 className=" font-semibold mb-2">{hostel.description}</h3>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{hostel.location}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className=" font-bold text-blue-600">
                {hostel.pricePerMonth}
                <span> MMK </span>
                <span className="text-sm font-semibold text-gray-600">
                  / per-month
                </span>
              </div>
              <Button onClick={() => goToDetail(hostel.id)}>See More</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
