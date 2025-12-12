"use client";

import CTASection from "@/components/cta";
import FAQ from "@/components/faqs";
import Features from "@/components/features";
import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Integrations from "@/components/integrations";
import Metrics from "@/components/metrics";
import Navbar from "@/components/navbar";
import PainPoints from "@/components/pain-points";
import Pricing from "@/components/pricing";
import SocialProof from "@/components/social-proof";
import Testimonials from "@/components/testimonials";
import UseCases from "@/components/use-cases";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import BackToTop from "@/components/back-to-top";
import WhatWeOffer from "@/components/what-we-offer";

export default function Home() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show back to top button after scrolling 300px
            setShowBackToTop(window.scrollY > 100);
        };

        setShowBackToTop(window.scrollY > 100);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className="min-h-screen bg-white overflow-hidden">
            <Navbar />
            <main>
                <Hero scrollToSection={scrollToSection}/>
                <SocialProof />
                {/* <PainPoints /> */}
                <WhatWeOffer />
                <Features scrollToSection={scrollToSection} />
                <Metrics />
                <HowItWorks />
                <UseCases />
                <Integrations />
                <Testimonials />
                <Pricing />
                <FAQ />
                <CTASection />
                {showBackToTop && <BackToTop scrollToTop={scrollToTop} />}
            </main>
            <Footer />
        </div>
    );
}
