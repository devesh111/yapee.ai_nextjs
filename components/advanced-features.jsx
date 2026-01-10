"use client";

import { BotMessageSquare, ChartNoAxesCombined, MessagesSquare, Radio } from "lucide-react";

const features = [
    {
        icon: MessagesSquare,
        title: "Multi-Agent live chat support",
        description:
            "Enable multiple team members to manage live chat support from one WhatsApp Business number. Filter chats by tags, campaigns, and attributes for intelligent agent routing.",
    },
    {
        icon: ChartNoAxesCombined,
        title: "Real-Time analytics",
        description:
            "Track campaign results in real-time. Monitor read, replied, and clicked rates per campaign, then retarget intelligently for better conversions.",
    },
    {
        icon: BotMessageSquare,
        title: "Build no‑code chatbots in minutes",
        description:
            "Design custom chatbot flows your way! Use the intuitive drag-and-drop builder for chatbots and catalogs to craft engaging conversational journeys.",
    },
    {
        icon: Radio,
        title: "Import contacts and broadcast instantly",
        description:
            "Simply import all your contacts and broadcast approved messages instantly.​ View real-time analytics on the Yapee.AI platform for delivery, read rates, and more.",
    },
];

const AdvancedFeatures = () => {
    return (
        <section id="advanced-features" className="py-15 lg:py-15 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 rounded-full gradient-bg-soft border border-primary/10 text-primary text-sm font-medium mb-6">
                        Convert chats into customers
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                        Conversion‑Driving{" "}
                        <span className="gradient-text">
                            advanced features
                        </span>
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground">
                        Yapee.AI will boost your revenue
                    </p>
                </div>

                {/* Use Case Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((eature, index) => (
                        <div
                            key={index}
                            className="bg-background rounded-3xl border border-border/50 p-6 card-shadow hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                                <eature.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold text-foreground mb-3">
                                {eature.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {eature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AdvancedFeatures;
