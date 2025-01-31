import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Steps from "@/components/Steps";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Brands from "@/components/Brands";
import Work from "@/components/Work";
import Stats from "@/components/Stats";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Developed by BENNACER Noureddine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        {/* page wrapper */}
        <Header />
        <main>
          {children}
          <Hero />
          <Steps />
          <About />
          <Testimonials />
          <Brands />
          <Work />
          <Stats />
          <News />
          <Contact />
          <Footer />
        </main>
      </body>
    </html>
  );
}
