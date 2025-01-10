"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, MapPin, Star, Users, DollarSign } from "lucide-react";
import Image from "next/image";

// Mock data for hostels
const hostels = [
  {
    id: 1,
    name: "Sunny Beach Hostel",
    location: "Miami, FL",
    rating: 4.5,
    price: 25,
    capacity: 50,
    image: "/imgs/hostel.png",
  },
  {
    id: 2,
    name: "Mountain View Lodge",
    location: "Denver, CO",
    rating: 4.2,
    price: 30,
    capacity: 40,
    image: "/imgs/hostel.png",
  },
  {
    id: 3,
    name: "City Center Backpackers",
    location: "New York, NY",
    rating: 4.7,
    price: 35,
    capacity: 60,
    image: "/imgs/hostel.png",
  },
  {
    id: 4,
    name: "Coastal Retreat Hostel",
    location: "San Francisco, CA",
    rating: 4.4,
    price: 28,
    capacity: 45,
    image: "/imgs/hostel.png",
  },
];

export default function HostelList() {
  const [priceRange, setPriceRange] = useState([0, 100]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Find Your Perfect Hostel</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="miami">Miami, FL</SelectItem>
                    <SelectItem value="denver">Denver, CO</SelectItem>
                    <SelectItem value="newyork">New York, NY</SelectItem>
                    <SelectItem value="sanfrancisco">
                      San Francisco, CA
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price Range
                </label>
                <Slider
                  min={0}
                  max={100}
                  step={1}
                  value={priceRange}
                  onValueChange={setPriceRange}
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Rating
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select rating" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5 Stars & Up</SelectItem>
                    <SelectItem value="4">4 Stars & Up</SelectItem>
                    <SelectItem value="3">3 Stars & Up</SelectItem>
                    <SelectItem value="2">2 Stars & Up</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full">Apply Filters</Button>
            </CardContent>
          </Card>
        </div> */}

        <div className="md:col-span-3">
          <div className="mb-6 flex">
            <Input
              type="text"
              placeholder="Search hostels"
              className="flex-grow"
            />
            <Button className="ml-2">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>

          <div className="space-y-6">
            {hostels.map((hostel) => (
              <Card key={hostel.id}>
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <Image
                        src={hostel.image}
                        alt={hostel.name}
                        width={300}
                        height={200}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h2 className="text-xl font-semibold mb-2">
                        {hostel.name}
                      </h2>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{hostel.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-2">
                        <Star className="h-4 w-4 mr-1 text-yellow-400" />
                        <span>{hostel.rating} / 5</span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-4">
                        <Users className="h-4 w-4 mr-1" />
                        <span>Capacity: {hostel.capacity} beds</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-2xl font-bold text-blue-600">
                          <DollarSign className="h-6 w-6 inline-block" />
                          {hostel.price}
                          <span className="text-sm font-normal text-gray-600">
                            /night
                          </span>
                        </div>
                        <Button>Book Now</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="mr-2">
              Previous
            </Button>
            <Button variant="outline" className="ml-2">
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
