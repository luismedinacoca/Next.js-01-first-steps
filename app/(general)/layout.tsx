import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function GeneralLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={montserrat.className}>
      <h2 className="text-3xl flex justify-center items-center text-green-500">
        Hello from General Layout 👋🏽
      </h2>
      {children}
    </div>
  );
}

