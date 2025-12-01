"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
    {
        name: "Starter",
        price: "$49",
        period: "/ month",
        tagline: "For lean teams getting started with automation",
        features: [
            "Up to 3 team members",
            "AI chatbot on 1 website",
            "Basic helpdesk automation",
            "Email support",
        ],
        highlighted: false,
    },
    {
        name: "Growth",
        price: "$149",
        period: "/ month",
        tagline: "For growing teams that need serious scale",
        features: [
            "Up to 15 team members",
            "Multi-channel live chat",
            "Advanced routing & workflows",
            "CRM & calendar integrations",
            "Priority support",
        ],
        highlighted: true,
    },
    {
        name: "Scale",
        price: "Talk to us",
        period: "",
        tagline: "For high-volume teams with custom needs",
        features: [
            "Unlimited team members",
            "Custom SLAs",
            "Dedicated success manager",
            "Security and compliance review",
            "Custom integrations",
        ],
        highlighted: false,
    },
];

const Pricing = () => {
    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="pricing" className="py-20 lg:py-28 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 rounded-full gradient-bg-soft border border-primary/10 text-primary text-sm font-medium mb-6">
                        Simple, scalable pricing
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                        Start small,{" "}
                        <span className="gradient-text">
                            scale when you're ready
                        </span>
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground">
                        All plans include a 14-day free trial and concierge
                        onboarding.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl p-8 ${
                                plan.highlighted
                                    ? "gradient-bg text-white shadow-2xl scale-105 lg:scale-110"
                                    : "bg-background border border-border/50 card-shadow"
                            } transition-all duration-300`}
                        >
                            {plan.highlighted && (
                                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-primary text-sm font-semibold rounded-full shadow-lg">
                                    Most popular
                                </span>
                            )}

                            <h3
                                className={`text-xl font-bold ${
                                    plan.highlighted
                                        ? "text-white"
                                        : "text-foreground"
                                }`}
                            >
                                {plan.name}
                            </h3>
                            <div className="mt-4 flex items-baseline gap-1">
                                <span
                                    className={`text-4xl font-extrabold ${
                                        plan.highlighted
                                            ? "text-white"
                                            : "text-foreground"
                                    }`}
                                >
                                    {plan.price}
                                </span>
                                <span
                                    className={`text-lg ${
                                        plan.highlighted
                                            ? "text-white/80"
                                            : "text-muted-foreground"
                                    }`}
                                >
                                    {plan.period}
                                </span>
                            </div>
                            <p
                                className={`mt-2 text-sm ${
                                    plan.highlighted
                                        ? "text-white/80"
                                        : "text-muted-foreground"
                                }`}
                            >
                                {plan.tagline}
                            </p>

                            <ul className="mt-8 space-y-4">
                                {plan.features.map((feature, featureIndex) => (
                                    <li
                                        key={featureIndex}
                                        className="flex items-start gap-3"
                                    >
                                        <div
                                            className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                                                plan.highlighted
                                                    ? "bg-white/20"
                                                    : "bg-primary/10"
                                            }`}
                                        >
                                            <Check
                                                className={`w-3 h-3 ${
                                                    plan.highlighted
                                                        ? "text-white"
                                                        : "text-primary"
                                                }`}
                                            />
                                        </div>
                                        <span
                                            className={`text-sm ${
                                                plan.highlighted
                                                    ? "text-white/90"
                                                    : "text-muted-foreground"
                                            }`}
                                        >
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                onClick={() => scrollToSection("#cta")}
                                className={`w-full mt-8 ${
                                    plan.highlighted
                                        ? "bg-white text-primary hover:bg-white/90"
                                        : ""
                                }`}
                                variant={
                                    plan.highlighted ? "secondary" : "default"
                                }
                            >
                                {plan.price === "Talk to us"
                                    ? "Contact sales"
                                    : "Get started"}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
