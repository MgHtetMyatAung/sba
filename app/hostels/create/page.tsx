"use client";

import { useState } from "react";
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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  DollarSign,
  Users,
  Wifi,
  Coffee,
  Utensils,
  Upload,
} from "lucide-react";

export default function HostelForm() {
  const [amenities, setAmenities] = useState<string[]>([]);

  const handleAmenityChange = (amenity: string) => {
    setAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">Submit Your Hostel</CardTitle>
          <CardDescription>
            Fill out the form below to add your hostel to our platform
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="hostelName">Hostel Name</Label>
                  <Input
                    id="hostelName"
                    placeholder="Enter hostel name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <div className="flex">
                    <MapPin className="w-5 h-5 text-gray-500 mr-2" />
                    <Input id="location" placeholder="City, Country" required />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your hostel"
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Price per Night</Label>
                  <div className="flex">
                    <DollarSign className="w-5 h-5 text-gray-500 mr-2" />
                    <Input
                      id="price"
                      type="number"
                      placeholder="0"
                      min="0"
                      step="0.01"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="capacity">Capacity</Label>
                  <div className="flex">
                    <Users className="w-5 h-5 text-gray-500 mr-2" />
                    <Input
                      id="capacity"
                      type="number"
                      placeholder="0"
                      min="1"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Amenities</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Checkbox
                    id="wifi"
                    checked={amenities.includes("wifi")}
                    onCheckedChange={() => handleAmenityChange("wifi")}
                  />
                  <Label htmlFor="wifi" className="flex items-center">
                    <Wifi className="w-4 h-4 mr-2" />
                    Wi-Fi
                  </Label>
                  <Checkbox
                    id="breakfast"
                    checked={amenities.includes("breakfast")}
                    onCheckedChange={() => handleAmenityChange("breakfast")}
                  />
                  <Label htmlFor="breakfast" className="flex items-center">
                    <Coffee className="w-4 h-4 mr-2" />
                    Breakfast
                  </Label>
                  <Checkbox
                    id="kitchen"
                    checked={amenities.includes("kitchen")}
                    onCheckedChange={() => handleAmenityChange("kitchen")}
                  />
                  <Label htmlFor="kitchen" className="flex items-center">
                    <Utensils className="w-4 h-4 mr-2" />
                    Kitchen
                  </Label>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="roomType">Room Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select room type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dorm">Dormitory</SelectItem>
                    <SelectItem value="private">Private Room</SelectItem>
                    <SelectItem value="mixed">Mixed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="photos">Photos</Label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <Upload className="w-10 h-10 mb-3 text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <Input
                      id="dropzone-file"
                      type="file"
                      className="hidden"
                      multiple
                      accept="image/*"
                    />
                  </label>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Submit Hostel
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
