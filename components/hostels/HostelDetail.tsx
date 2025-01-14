import {
  Briefcase,
  Calendar,
  ChevronLeft,
  DollarSign,
  Heart,
  Home,
  MapPin,
  MessageCircle,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import HostelGallery from "./HostelGallery";
import Link from "next/link";

export default function HostelDetail({ hostel }: { hostel: Hostel }) {
  return (
    <Card className="w-full max-w-2xl mx-auto border-none">
      <CardContent className="space-y-4 md:mt-5 pt-3">
        <Link href={"/hostels"} className=" flex items-center gap-2">
          <ChevronLeft /> Back
        </Link>
        <HostelGallery images={hostel.images} />
        <div>
          <p
            className="text-gray-700 mb-4 font-semibold"
            dangerouslySetInnerHTML={{ __html: hostel.description }}
          ></p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border rounded-md p-3">
            <div className="flex items-center text-sm">
              <MapPin className="mr-2 h-5 w-5 text-gray-500" />
              <span>{hostel.address}</span>
            </div>
            <div className="flex items-center text-sm">
              <DollarSign className="mr-2 h-5 w-5 text-gray-500" />
              <span> per month</span>
              <span className=" font-medium ms-1">
                {hostel.pricePerMonth} MMK
              </span>{" "}
            </div>
            <div className="flex items-center text-sm">
              <Briefcase className="mr-2 h-5 w-5 text-gray-500" />
              <span>Agent fee: </span>
              <span className=" font-medium ms-1">{hostel.agent_fee} MMK</span>
            </div>
            <div className="flex items-center text-sm">
              <Home className="mr-2 h-5 w-5 text-gray-500" />
              <span>Deposit: </span>
              <span className=" font-medium ms-1">{hostel.deposit} MMK</span>
            </div>
            <div className="flex items-center text-sm">
              <Calendar className="mr-2 h-5 w-5 text-gray-500" />
              <span>contract </span>
              <span className=" font-medium ms-1">{hostel.contract} </span>
            </div>
            <div className="flex items-center text-sm">
              <Calendar className="mr-2 h-5 w-5 text-gray-500" />
              <span>minimum</span>
              <span className=" font-medium ms-1">
                {hostel.contractPeriod} months
              </span>{" "}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex space-x-2">
          <Button variant="outline" size="icon">
            <Heart className="h-4 w-4" />
            <span className="sr-only">Like</span>
          </Button>
          <Button variant="outline" size="icon">
            <MessageCircle className="h-4 w-4" />
            <span className="sr-only">Comment</span>
          </Button>
          <Button variant="outline" size="icon">
            <Share2 className="h-4 w-4" />
            <span className="sr-only">Share</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
