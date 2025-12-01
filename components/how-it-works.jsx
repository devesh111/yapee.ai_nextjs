"use client";

import { Link, Brain, Rocket } from "lucide-react";

const steps = [
    {
        icon: Link,
        number: "01",
        title: "Connect your tools",
        description:
            "Connect your helpdesk, CRM, calendar, and data sources in a few clicks. Yapee.AI syncs your knowledge base and conversation history automatically.",
    },
    {
        icon: Brain,
        number: "02",
        title: "Train your AI",
        description:
            "Choose what the AI should (and shouldn't) handle. Import FAQs, canned responses, and workflows to create on-brand, compliant replies.",
    },
    {
        icon: Rocket,
        number: "03",
        title: "Launch & optimize",
        description:
            "Go live on your website, in-app, or social channels. Track performance with real-time analytics, then iterate with insights on resolution rates and revenue influence.",
    },
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-20 lg:py-28 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 rounded-full gradient-bg-soft border border-primary/10 text-primary text-sm font-medium mb-6">
                        How it works
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                        From setup to ROI in{" "}
                        <span className="gradient-text">days, not months</span>
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground">
                        Yapee.AI is designed to plug neatly into your existing
                        stack—no heavy IT projects, just faster replies and
                        happier customers.
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            {/* Connector line */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-14 left-[60%] w-full h-0.5 bg-linear-to-r from-primary/30 to-transparent" />
                            )}

                            <div className="text-center">
                                {/* Number badge */}
                                <div className="relative inline-block mb-6">
                                    <div className="w-28 h-28 rounded-3xl gradient-bg flex items-center justify-center mx-auto group-hover:scale-105 cursor-pointer transition-transform duration-300 shadow-lg">
                                        <step.icon className="w-12 h-12 text-primary-foreground" />
                                    </div>
                                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center text-sm font-bold text-primary">
                                        {step.number}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed text-md">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
