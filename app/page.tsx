import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-5xl">Hello World!</span>
      <Link href="/about" className="text-blue-500 hover:text-blue-400 hover:font-bold">
        About Page
      </Link>
    </main>
  );
}
