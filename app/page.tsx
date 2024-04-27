'use client';
import { Button, Card, Navbar } from "flowbite-react";
import HeaderWithSubNavbar from "@/components/landing/HeaderWithSubNavbar";
import FooterSection from "@/components/landing/FooterSection";
import CustomerLogos from "@/components/landing/CustomerLogos";
import HeroSection from "@/components/landing/HeroSection";
import ImageWithCTAButtonSection from "@/components/landing/ImageWithCtaButtonSections";
import ContactUsSection from "@/components/landing/ContactUsSection";
import OurTrucksSection from "@/components/landing/OurTrucksSection";
import {OurTrucksSideBySideSection} from "@/components/landing/OurTrucksSideBySideSection";
import OurTeamSection from "@/components/landing/OurTeamSection";

export default function Page() {
  return (
      <>
        <HeaderWithSubNavbar />
        <HeroSection />
        <ImageWithCTAButtonSection />
        <OurTrucksSideBySideSection />
        <OurTeamSection />
        <CustomerLogos />
        <ContactUsSection />
      </>
  );
}
