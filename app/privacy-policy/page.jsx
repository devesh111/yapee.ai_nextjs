"use client";

import Footer from "@/components/footer";
import BackToTop from "@/components/back-to-top";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicyPage = () => {
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
                            Privacy Policy
                        </h1>
                        <Separator className="max-w-xs my-2 mx-auto" />
                        <p className="text-center text-sm text-gray-500">
                            Effective Date: March 2026
                        </p>
                        <p className="text-center text-sm text-gray-500">
                            Jurisdiction: United Kingdom (UK GDPR)
                        </p>
                        <p className="text-center text-sm text-gray-500">
                            Contact Email:{" "}
                            <a href="mailto:team@yapee.ai">team@yapee.ai</a>
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            1. Introduction
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            Yapee.AI ("we", "us", "our") is committed to
                            protecting and respecting your privacy. This Privacy
                            Policy explains how we collect, use, process, store,
                            and safeguard your information when you use our
                            platform, including integrations with WhatsApp
                            Business API via Meta Platforms, Inc. By using our
                            services, you agree to the practices described in
                            this policy.
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            2. Data Controller and Processor Roles
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            Yapee.AI acts as a data controller for account,
                            billing, and business data. In relation to customer
                            communications processed through the platform,
                            Yapee.AI may act as a data processor on behalf of
                            its users (business customers).
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            3. Data We Collect
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            We may collect and process the following categories
                            of data:
                            <br />
                            - Identity Data: name, email, phone number
                            <br />
                            - Business Data: company name, address, registration
                            details
                            <br />
                            - Usage Data: system activity, feature usage, login
                            data
                            <br />
                            - Communication Data: messages sent and received via
                            the platform
                            <br />- Technical Data: IP address, browser, device
                            type, logs
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            4. How We Use Data
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            We use data to:
                            <br />
                            - Provide and operate the platform
                            <br />
                            - Enable WhatsApp Business integration
                            <br />
                            - Improve functionality and performance
                            <br />
                            - Provide customer support and onboarding
                            <br />
                            - Monitor usage and prevent fraud or misuse
                            <br />- Comply with legal obligations
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            5. Legal Basis (UK GDPR)
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            We process data under:
                            <br />
                            - Contractual necessity
                            <br />
                            - Legitimate interests (security, improvement)
                            <br />
                            - Legal obligation
                            <br />- Consent where required
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            6. WhatsApp and Meta Compliance
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            Yapee.AI integrates with Meta Platforms, Inc. and
                            complies with WhatsApp Business policies. Users must
                            ensure:
                            <br />
                            - They obtain valid opt-in consent before messaging
                            customers
                            <br />
                            - They comply with GDPR and PECR regulations
                            <br />
                            - They do not send spam or unsolicited
                            communications
                            <br />
                            Yapee.AI is not responsible for misuse of messaging
                            or violations of third-party policies.
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            7. Data Sharing
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            We may share data with:
                            <br />
                            - Cloud hosting providers
                            <br />
                            - Meta Platforms, Inc.
                            <br />
                            - Payment processors
                            <br />
                            - Legal authorities when required
                            <br />
                            We do not sell personal data.
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            8. International Transfers
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            Where data is transferred outside the UK, we ensure
                            safeguards such as Standard Contractual Clauses
                            (SCCs) are in place.
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            9. Data Retention
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            We retain data only as long as necessary for service
                            delivery, legal compliance, and dispute resolution.
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            10. Security Measures
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            We implement appropriate security including
                            encryption, access control, and monitoring systems
                            to protect data.
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            11. Your Rights
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            Under UK GDPR, you have rights to access, correct,
                            delete, restrict, or transfer your data, and to
                            object to processing. Contact:{" "}
                            <a href="mailto:team@yapee.ai">team@yapee.ai</a>
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            12. Cookies
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            We use cookies for authentication, analytics, and performance. Users can manage cookies via browser settings.
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            13. Children
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            Our services are not intended for individuals under 18.
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            14. Updates
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            We may update this policy. Continued use indicates acceptance.
                        </p>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">
                        <h2 className="text-md font-bold text-foreground leading-tight">
                            15. Contact
                        </h2>
                        <Separator className="max-w-xs my-2" />
                        <p className="text-sm lg:text-sm text-muted-foreground leading-7">
                            Email:{" "}
                            <a href="mailto:team@yapee.ai">
                                team@yapee.ai
                            </a>{" "}
                            <br />
                            Website:{" "}
                            <a href="https://www.yapee.ai">www.yapee.ai</a>
                        </p>
                    </div>
                </section>
                {showBackToTop && <BackToTop scrollToTop={scrollToTop} />}
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicyPage;
