import localFont from "next/font/local";
import { Fira_Sans } from "next/font/google";
import "./globals.css";

const fira = Fira_Sans({weight:['400', '500', '700'] ,subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "GYM FIT",
  description: "This web site is related to gym and fitness related",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fira.variable} ${geistMono.variable} antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
