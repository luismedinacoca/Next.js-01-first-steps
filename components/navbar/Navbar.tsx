import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { path: "/about", text: "About" },
  { path: "/contact", text: "Contact" },
  { path: "/pricing", text: "Pricing" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-900 bg-opacity-30 p-2 m-2 rounded text-blue-100">
      <Link href="/" className="flex items-center mr-2">
        <HomeIcon /> <span>Home</span>
      </Link>
      <div className="flex- flex-1"></div>
      {navItems.map((navItem) => {
        return <ActiveLink key={navItem.path} {...navItem} />;
        {
          /*<Link key={navItem.path} href={navItem.path} className="mr-3">
          {navItem.text}
        </Link>*/
        }
      })}
    </nav>
  );
};
