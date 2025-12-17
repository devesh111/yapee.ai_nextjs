"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
    {
        name: "Basic",
        price: "£99",
        period: "+ VAT / month",
        tagline: "Get Started with WhatsApp Ads & WhatsApp API",
        features: [
            "Unlimited Free Service Conversations (Live chat Replies to user messages)",
            "WhatsApp Business API",
            "WhatsApp Blue Tick Application",
            "Click to WhatsApp Ads Manager",
            "Upload & Manage Contacts",
            "Upto 10 Tags",
            "Upto 5 Custom Attributes",
            "Template Messages with APIs",
            "1 Owner + 5 FREE Agents included. Additional Agents at £20/ month each",
            "Upto 5 Custom Attributes",
            "Smart Audience Segregation",
            "Broadcasting & Retargeting",
            "Multi-Agent Live Chat",
            "Agent Transfer & Manager Monitoring",
            "Marketplace Integrations",
            "2400 Messages/min",
            "Shopify & WooCommerce Integrations",
            "Dialogflow Chatbot Integration",
            "Shared Team Inbox",
            "Per Template Message Charges(charged separately): Marketing, Utility & Authentication",
        ],
        highlighted: false,
    },
    {
        name: "Pro",
        price: "£149",
        period: "+ VAT / month",
        tagline: "Everything you need to get started with your business",
        features: [
            "All features in Basic Plan",
            "Upto 100 Tags",
            "Upto 20 Custom Attributes",
            "Campaign Scheduler",
            "Campaign Click Tracking",
            "Smart Agent Routing",
            "Campaign Budget Analytics",
            "Project APIs",
            "Custom Agent Rules",
            "Carousel Template Click Tracking",
            "CSV Campaign Scheduler",
            "Google Sheets integration",
            "Birthday automation message",
            "User Access Control",
            "Automatic Failed Message Retry",
            "Per Template Message Charges(charged separately): Marketing, Utility & Authentication",
        ],
        highlighted: true,
    },
    {
        name: "Enterprise",
        price: "Talk to us",
        period: "",
        tagline: "For high-volume teams with custom needs",
        features: [
            "All features in Pro Plan",
            "Recommended for Brands with 1 Million+ Users",
            "Unlimited Tags",
            "Unlimited Attributes",
            "Downloadable Reports",
            "Dedicated Account Manager",
            "Priority Customer Support",
            "Webhooks",
            "Higher Messaging Speed",
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
                        Monthly / Yearly Subscription
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-3xl p-8 ${
                                plan.highlighted
                                    ? "gradient-bg text-white shadow-2xl scale-101 lg:scale-105"
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
