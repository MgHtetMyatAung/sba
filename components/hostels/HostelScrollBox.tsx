"use client";

import { Search } from "lucide-react";
import ScrollBoxWrapper from "../common/ScrollBoxWrapper";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function HostelScrollBox() {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };
  return (
    <ScrollBoxWrapper>
      <div className=" max-w-[500px] mx-auto px-5 ">
        <div className="rounded bg-gray-400 p-3 shadow-lg">
          <div className=" flex">
            <Input
              type="text"
              placeholder="Search hostels"
              className="flex-grow bg-white"
            />
            <Button className="ml-2" onClick={scrollToTop}>
              <Search className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
        </div>
      </div>
    </ScrollBoxWrapper>
  );
}
