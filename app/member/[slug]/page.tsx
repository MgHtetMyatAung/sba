import MembershipDetail from "@/components/member/MemberShipDetail";
import React from "react";

export default async function MemberShipDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const id = (await params).slug;
  return (
    <div className=" min-h-[70vh]">
      <MembershipDetail id={+id} />
    </div>
  );
}
