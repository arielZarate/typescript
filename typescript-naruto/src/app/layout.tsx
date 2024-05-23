import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
0;
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Naruto shippuden ",
  description: "api",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className && "min-h-screen w-full m-0 p-0"}>
        <NavBar />
        <main className="mx-auto ">{children}</main>
      </body>
    </html>
  );
}
