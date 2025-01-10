"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { Button } from "../ui/button";
import HostelGridPhoto from "./HostelGridPhoto";
import { useRouter } from "next/navigation";

export default function HostelCard({ data }: { data: Hostel }) {
  const router = useRouter();
  const goToDetail = (id: number) => {
    router.push(`/hostels/${id}`);
  };
  return (
    <Card>
      <CardContent className="p-0 overflow-hidden">
        <div className="">
          <div className=" cursor-pointer" onClick={() => goToDetail(data.id)}>
            <HostelGridPhoto images={data.images} />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">{data.description}</h3>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{data.location}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold text-blue-600">
                {data.pricePerMonth}000
                <span> MMK </span>
                <span className="text-sm font-semibold text-gray-600">
                  / per-month
                </span>
              </div>
              <Button onClick={() => goToDetail(data.id)}>See More</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
