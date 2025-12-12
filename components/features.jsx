"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Features = ({ scrollToSection }) => {
    return (
        <section id="features" className="py-20 lg:py-28 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 rounded-full gradient-bg-soft border border-primary/10 text-primary text-sm font-medium mb-6">
                        Your Complete WhatsApp Toolkit
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                        Launch Forms, Accept Payments, Run CTWA &{" "}
                        <span className="gradient-text">Boost your Revenue</span>
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground">
                        Yapee.AI delivers cutting-edge WhatsApp and AI features at lightning speed ⚡
                    </p>
                </div>

                {/* Feature 1 */}
                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="mt-2">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">Launch AI-powered Click-to-WhatsApp ads</h2>
                        <p className="mt-5 text-muted-foreground leading-relaxed">Launch AI-driven ads on Facebook and Instagram that instantly open WhatsApp chats - boost your leads 5x and skyrocket conversions 2-3x right away!</p>
                        <p className="mt-5 text-muted-foreground mb-6 leading-relaxed">Kick off campaigns directly from Yapee.AI: snag premium leads powered by smart AI and conversion APIs, sort them intelligently by priority, and fire up automated chatbot flows to nurture and close deals on autopilot.</p>
                        <Button
                            variant="hero"
                            onClick={() => scrollToSection("#cta")}
                            className="group"
                        >
                            Explore Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                    <div className="mt-2">
                        <Image
                            src="/images/features-1.webp"
                            alt="Click-to-WhatsApp ads"
                            width={1536}
                            height={1024}
                            className="w-full"
                        />
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-12 lg:gap-20 items-center pt-15">
                    <div className="mt-2">
                        <Image
                            src="/images/features-2v.webp"
                            alt="WhatsApp Forms"
                            width={1168}
                            height={1024}
                            className="w-full"
                        />
                    </div>
                    <div className="mt-2">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">Create WhatsApp Forms</h2>
                        <p className="mt-5 text-muted-foreground leading-relaxed">Capture high-quality leads and gather valuable customer insights directly within WhatsApp conversations using intuitive Forms.</p>
                        <p className="mt-5 text-muted-foreground mb-6 leading-relaxed">Whether collecting feedback, user preferences, survey responses, or detailed contact information, Forms make it effortless to engage users right where they already chat - turning every interaction into actionable data without ever leaving WhatsApp.</p>
                        <Button
                            variant="hero"
                            onClick={() => scrollToSection("#cta")}
                            className="group"
                        >
                            Explore Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </div>

                {/* Feature 3 */}
                <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-12 lg:gap-20 items-center pt-15">
                    <div className="mt-2">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">Accept Payments Seamlessly Within WhatsApp Chats</h2>
                        <p className="mt-5 text-muted-foreground leading-relaxed">Collect payments seamlessly on WhatsApp with Stripe, PayPal, GoCardless, and more - supercharge your revenue growth instantly.</p>
                        <p className="mt-5 text-muted-foreground mb-6 leading-relaxed">Connect gateways to Yapee.AI fast, check payments in profiles, and hand off flows seamlessly for top satisfaction and conversions.</p>
                        <Button
                            variant="hero"
                            onClick={() => scrollToSection("#cta")}
                            className="group"
                        >
                            Explore Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                    <div className="mt-2">
                        <Image
                            src="/images/features-3.webp"
                            alt="WhatsApp Payments"
                            width={1536}
                            height={1024}
                            className="w-full"
                        />
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Features;
