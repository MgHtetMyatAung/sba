import React from "react";
import { MembershipData } from "./data";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function MemberPage() {
  return (
    <div className=" py-5 px-5">
      <h2 className=" font-semibold text-xl md:text-2xl text-center">
        MEMBERSHIP
      </h2>
      <div className=" space-y-5 mt-5">
        {MembershipData.map((data) => (
          <div key={data.id}>
            <div className=" p-3 border rounded-lg bg-blue-50 space-y-2">
              <h3 className=" font-semibold py-2 px-3 rounded-full bg-white w-fit text-blue-600">
                {data.title}
              </h3>
              <p className=" text-gray-600">{data.description}</p>
              <div className=" flex flex-col md:flex-row md:justify-between md:items-center">
                <p>
                  <span className=" font-semibold">{data.price}</span> MMK / per
                  month
                </p>
                <Link href={`/member/${data.id}`}>
                  <button className=" mt-2 md:mt-0 w-fit flex gap-1 items-center text-sm bg-blue-400 py-1 px-3 rounded-full text-white">
                    View Benefits <ChevronRight size={15} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
