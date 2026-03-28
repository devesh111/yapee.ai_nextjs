"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import FormModal from "./form-modal";

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const plans = [
        {
            name: "Basic",
            monthlyPrice: 99,
            yearlyPrice: 89, // 10% off
            period: "+ VAT / month",
            tagline: "Get started with WhatsApp ads & WhatsApp API",
            features: [
                "Unlimited free service conversations (Live chat replies to user messages)",
                "WhatsApp business API",
                "WhatsApp blue tick application",
                "Click to WhatsApp ads manager",
                "Upload & manage contacts",
                "Upto 10 tags",
                "Upto 5 custom attributes",
                "Template messages with APIs",
                "1 owner + 5 free agents included. Additional agents at £20/ month each",
                "Upto 5 custom attributes",
                "Smart audience segregation",
                "Broadcasting & retargeting",
                "Multi-Agent live chat",
                "Agent transfer & manager monitoring",
                "Marketplace integrations",
                "2400 messages/min",
                "Shopify & WooCommerce integrations",
                "Dialogflow chatbot integration",
                "Shared team inbox",
                "Per template message charges(charged separately): marketing, utility & authentication",
            ],
            highlighted: false,
        },
        {
            name: "Pro",
            monthlyPrice: 149,
            yearlyPrice: 134, // 10% off
            period: "+ VAT / month",
            tagline: "Everything you need to get started with your business",
            features: [
                "All features in basic plan",
                "Upto 100 tags",
                "Upto 20 custom attributes",
                "Campaign scheduler",
                "Campaign click tracking",
                "Smart agent routing",
                "Campaign budget analytics",
                "Project APIs",
                "Custom agent rules",
                "Carousel template click tracking",
                "CSV campaign scheduler",
                "Google sheets integration",
                "Birthday automation message",
                "User access control",
                "Automatic failed message retry",
                "Per template message charges(charged separately): Marketing, utility & authentication",
            ],
            highlighted: true,
        },
        {
            name: "Enterprise",
            monthlyPrice: null,
            yearlyPrice: null,
            period: "",
            tagline: "For high-volume teams with custom needs",
            features: [
                "All features in pro plan",
                "Recommended for brands with 1 million+ users",
                "Unlimited tags",
                "Unlimited attributes",
                "Downloadable reports",
                "Dedicated account manager",
                "Priority customer support",
                "Webhooks",
                "Higher messaging speed",
            ],
            highlighted: false,
        },
    ];

    const getPrice = (plan) => {
        if (!plan.monthlyPrice) return "Talk to us";
        const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
        return `£${price}`;
    };

    return (
        <section id="pricing" className="py-20 lg:py-28 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-4 lg:mb-16">
                    <span className="inline-block px-4 py-2 rounded-full gradient-bg-soft border border-primary/10 text-primary text-sm font-medium mb-6">
                        Simple, scalable pricing
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                        Start small,{" "}
                        <span className="gradient-text">
                            scale when you're ready
                        </span>
                    </h2>
                    <div className="mt-6 flex items-center justify-center gap-4">
                        <span
                            className={`text-lg ${
                                !isYearly
                                    ? "text-foreground font-semibold"
                                    : "text-muted-foreground"
                            }`}
                        >
                            Monthly
                        </span>
                        <Switch
                            checked={isYearly}
                            onCheckedChange={setIsYearly}
                        />
                        <div>
                            <span
                                className={`text-lg ${
                                    isYearly
                                        ? "text-foreground font-semibold"
                                        : "text-muted-foreground"
                                }`}
                            >
                                Yearly
                            </span>
                            {isYearly && (
                                <span className="absolute ml-2 px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
                                    Save 10%
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="mt-4">
                        <span className="text-xl font-bold gradient-text">
                            7 day FREE trial
                        </span>
                    </div>
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
                                    {getPrice(plan)}
                                </span>
                                <span
                                    className={`text-sm ${
                                        plan.highlighted
                                            ? "text-white/80"
                                            : "text-muted-foreground"
                                    }`}
                                >
                                    {plan.period}
                                </span>
                                <span
                                    className={`text-sm font-bold ${
                                        plan.highlighted
                                            ? "text-white/80"
                                            : "text-muted-foreground"
                                    }`}
                                >
                                    {plan.monthlyPrice &&
                                        `(Billed ${
                                            isYearly ? "yearly" : "monthly"
                                        }).`}
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
                                onClick={() =>
                                    !plan.monthlyPrice
                                        ? setIsOpen(true)
                                        : (window.location.href =
                                              "https://billing.yapee.ai/order/main/packages/Order/?group_id=7")
                                }
                                className={`w-full mt-8 ${
                                    plan.highlighted
                                        ? "bg-white text-primary hover:bg-white/90"
                                        : ""
                                }`}
                                variant={
                                    plan.highlighted ? "secondary" : "default"
                                }
                            >
                                {!plan.monthlyPrice
                                    ? "Contact sales"
                                    : "Get started"}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
            <FormModal isOpen={isOpen} setIsOpen={setIsOpen} />
        </section>
    );
};

export default Pricing;
