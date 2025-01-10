import { Button } from "@/components/ui/button";
import { NavLinks } from "./NavLinks";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600 flex items-center">
          <Image src="/icons/logo.png" alt="" className=" h-[40px]" />
          SBA
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <NavLinks />
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex space-x-2">
          <Button variant="outline">Log In</Button>
          <Button>Sign Up</Button>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
