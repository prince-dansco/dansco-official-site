import { Inter } from "next/font/google";
import "./globals.css";
import NavBarCom from "@/components/navbarCom/NavBar";
import Footer from "@/components/footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dj Dansco",
  description: "The best Dj in the world DjD",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#03071e] text-[#fff] relative`}>
        <NavBarCom />
        {children}
        <Footer />
      </body>
    </html>
  );
}
