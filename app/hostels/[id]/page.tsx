import HostelDetail from "@/components/hostels/HostelDetail";
import React from "react";

// const getHostelDetail = async (id: string) => {
//   const data = await fetch(`http://localhost:3001/hostels/${id}`);
//   return data.json();
// };

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  //   const hostelId = (await params).id;
  //   const hostel = await getHostelDetail(hostelId);
  return <div>{/* <HostelDetail hostel={hostel} /> */}</div>;
}
