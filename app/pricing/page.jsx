"use client";

import Pricing from "@/components/pricing";
import Footer from "@/components/footer";
import PricingTerminologies from "@/components/pricing-terminologies";
import AddonPricing from "@/components/addon-pricing";
import BackToTop from "@/components/back-to-top";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";

const PricingPage = () => {
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

    return (
        <div className="min-h-screen bg-white overflow-hidden">
            <Navbar />
            <main>
                <Pricing />

                {/* Addon Pricing Section */}
                <AddonPricing />

                {/* Pricing Terminologies */}
                <PricingTerminologies />
                {showBackToTop && <BackToTop scrollToTop={scrollToTop} />}
            </main>
            <Footer />
        </div>
    );
};

export default PricingPage;
