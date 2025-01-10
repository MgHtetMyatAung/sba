import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Briefcase, BedDouble, Search } from "lucide-react";
import Link from "next/link";

export default function Homepage() {
  return (
    <div className="flex-grow">
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className=" text-xl font-bold mb-6">
            Connect, Stay, Work, and Grow
          </h1>
          <p className=" text-lg md:text-xl text-gray-600 mb-8">
            Your all-in-one platform for hostels, jobs, and business networking
          </p>
          <div className="max-w-2xl mx-auto lg:flex space-y-3 lg:space-y-0">
            <Input
              type="text"
              placeholder="Search hostels, jobs, or businesses"
              className="flex-grow bg-white"
            />
            <Button className="ml-2">
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className=" text-xl md:text-3xl font-semibold text-center mb-12">
            Explore Our Services
          </h2>
          <div className="grid grid-cols-1 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BedDouble className="mr-2" /> Hostels
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Find comfortable and affordable accommodations worldwide.
                </p>
                <Link href={"/hostels"}>
                  <Button className="mt-4" variant="outline">
                    Browse Hostels
                  </Button>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Briefcase className="mr-2" /> Jobs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Discover exciting career opportunities in various industries.
                </p>
                <Button className="mt-4" variant="outline">
                  Find Jobs
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Building2 className="mr-2" /> Businesses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Connect with businesses and expand your professional network.
                </p>
                <Button className="mt-4" variant="outline">
                  Explore Businesses
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
