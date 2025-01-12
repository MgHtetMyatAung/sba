import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-600">
              SocialBiz is your go-to platform for finding hostels, jobs, and
              business connections all in one place.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/hostels">Hostels</Link>
              </li>
              <li>
                <Link href="/jobs">Jobs</Link>
              </li>
              <li>
                <Link href="/businesses">Businesses</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-sm text-gray-600">Email: info@socialbiz.com</p>
            <p className="text-sm text-gray-600">Phone: (123) 456-7890</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Facebook
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Twitter
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          © 2023 SocialBiz. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
