import Link from "next/link";
import React from "react";

export const NavLinks = () => (
  <>
    <Link href="/hostels" className="text-gray-600 hover:text-blue-600">
      Hostels
    </Link>
    <Link href="/jobs" className="text-gray-600 hover:text-blue-600">
      Jobs
    </Link>
    <Link href="/services" className="text-gray-600 hover:text-blue-600">
      Services
    </Link>
  </>
);
