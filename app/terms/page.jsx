"use client";

import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";

const TermsPage = () => {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
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
                <section id="pricing" className="py-20 lg:py-28 bg-background">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
                        <h1 className="gradient-text text-3xl lg:text-4xl font-bold text-foreground text-center">
                            Terms & Conditions
                        </h1>
                        <Separator className="max-w-xs my-2 mx-auto" />
                        <p className="text-center text-sm text-gray-500">
                            Effective Date: March 2026
                        </p>
                        <p className="text-center text-sm text-gray-500">
                            Governing Law: England & Wales
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            1. Introduction
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            These Terms & Conditions ("Terms") govern your
                            access to and use of the Yapee.AI platform
                            ("Service"), operated by Yapee.AI ("we", "us",
                            "our"). By accessing or using the Service, you agree
                            to be bound by these Terms. If you do not agree, you
                            must not use the Service.{" "}
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            2. Definitions
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            "Account" means a registered user account.
                            <br />
                            "User" means any individual or business using the
                            Service. <br />
                            "Subscription" means a paid plan. <br />
                            "Trial Period" means the 7-day free trial. <br />
                            "Third-Party Services" includes Meta (WhatsApp
                            Business API). <br />
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            3. Description of Service 
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            Yapee.AI provides a business messaging platform enabling organisations to manage WhatsApp communication via a shared inbox, automation tools, and AI-assisted messaging. The Service integrates with third-party providers including Meta Platforms, Inc.
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            4. Eligibility  
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            You must be at least 18 years old and capable of entering into a legally binding agreement. 
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            5. Account Registration & Security   
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            You are responsible for maintaining the confidentiality of your login details and all activity under your account. 
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            6. Acceptable Use   
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            You agree not to use the Service for unlawful purposes, spam, harassment, fraud, or abuse.
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            7. Third-Party Services 
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            The Service relies on third-party providers such as Meta. Yapee.AI is not responsible for their downtime, policies, or fees. 
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            8. Fees & Billing  
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            Subscriptions are billed in advance. Fees are non-refundable except where required by law. 
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            9. Free Trial & Automatic Subscription   
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            Yapee.AI offers a 7-day free trial. Unless cancelled before the trial ends, your subscription will automatically convert to a paid plan and be charged. 
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            10. Data Protection & Privacy 
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            We process personal data in accordance with UK GDPR.  
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            11. Intellectual Property 
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            All platform content and technology are owned by Yapee.AI.   
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            12. Service Availability
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            We do not guarantee uninterrupted access. 
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            13. Limitation of Liability 
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            Liability is limited to the amount paid in the previous 30 days. 
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            14. Indemnity  
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            You agree to indemnify Yapee.AI against claims arising from misuse. 
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            15. Termination 
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            We may suspend or terminate accounts for breaches. 
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            16. Changes to Terms  
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            We may update these Terms at any time.  
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            17. Governing Law  
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            These Terms are governed by the laws of England and Wales.   
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            18. Contact   
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            Email: <a href="mailto:team@yapee.co.uk">team@yapee.co.uk</a> <br />
                            Website: <a href="https://www.yapee.ai">www.yapee.ai</a>  
                        </p>
                    </div>
                </section>
                {showBackToTop && <BackToTop scrollToTop={scrollToTop} />}
            </main>
            <Footer />
        </div>
    );
};

export default TermsPage;
