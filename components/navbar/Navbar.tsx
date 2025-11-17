import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/pricing", label: "Pricing" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-900 bg-opacity-30 p-2 m-2 rounded text-blue-100">
      <Link href="/" className="flex items-center mr-2">
        <HomeIcon /> <span>Home</span>
      </Link>
      <div className="flex- flex-1"></div>
      {navItems.map((navItem) => (
        <Link key={navItem.href} href={navItem.href} className="mr-3">
          {navItem.label}
        </Link>
      ))}

      {/*
        <Link href="/about" className="mr-3">
          About
        </Link>
        <Link href="/contact" className="mr-3">
          Contact
        </Link>
        <Link href="/pricing" className="mr-3">
          Pricing
        </Link>
      */}
    </nav>
  );
};
