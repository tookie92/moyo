import type { Metadata } from "next";
import {  Poppins, Noto_Serif_Georgian} from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

 const notoSerifGeorgian = Noto_Serif_Georgian({
  variable: "--font-noto-serif-georgian",
   subsets: ["latin"],
 });  
 

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Moyo - Volunteer App Design",
  description: "A social app designed to make volunteering simple, social, and rewarding.",
  icons: {
    icon: "/herz.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${poppins.variable} ${notoSerifGeorgian.variable} bg-foundation  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
