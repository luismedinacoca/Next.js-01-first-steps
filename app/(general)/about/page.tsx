import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About page",
  keywords: ["about", "portfolio", "someone", "information"],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl flex justify-center items-center">About Page</span>
    </>
  )
}