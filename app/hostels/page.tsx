// import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import HostelCard from "@/components/hostels/HostelCard";
import HostelScrollBox from "@/components/hostels/HostelScrollBox";
import { prisma } from "@/utils/prisma";

export default async function HostelList() {
  // const [priceRange, setPriceRange] = useState([0, 100]);
  const hostels = await prisma.hostel.findMany();

  if (!hostels) return <p>Loading ...</p>;

  return (
    <div className="container px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Find Your Perfect Hostel</h1>

      <div className="">
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

        <div className="">
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
              <HostelCard key={hostel.id} data={hostel} />
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
        <div className=" fixed bottom-[5px] w-full left-0 right-0">
          <HostelScrollBox />
        </div>
      </div>
    </div>
  );
}
