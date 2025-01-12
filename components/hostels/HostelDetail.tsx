import {
  Briefcase,
  Calendar,
  DollarSign,
  Heart,
  Home,
  MapPin,
  MessageCircle,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import HostelGallery from "./HostelGallery";

export default function HostelDetail({ ...props }) {
  return (
    <Card className="w-full max-w-2xl mx-auto my-8">
      <CardContent className="space-y-4 mt-5">
        <HostelGallery images={props.images} />
        <div>
          <p className="text-gray-700 mb-4">{props.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-gray-500" />
              <span>{props.address}</span>
            </div>
            <div className="flex items-center">
              <DollarSign className="mr-2 h-5 w-5 text-gray-500" />
              <span>${props.pricePerMonth} per month</span>
            </div>
            <div className="flex items-center">
              <Briefcase className="mr-2 h-5 w-5 text-gray-500" />
              <span>Agent fee: ${props.agent_fee}</span>
            </div>
            <div className="flex items-center">
              <Home className="mr-2 h-5 w-5 text-gray-500" />
              <span>Deposit: ${props.deposit}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-gray-500" />
              <span>{props.contract} contract</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-5 w-5 text-gray-500" />
              <span>{props.contractPeriod} months minimum</span>
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
