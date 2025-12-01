"use client";

import { Bot, MessageCircle, TrendingUp, Check } from "lucide-react";

const features = [
    {
        icon: Bot,
        title: "AI Helpdesk Automation",
        description:
            "Deploy AI assistants that answer FAQs, resolve common issues, and route complex tickets to the right person—24/7 and in any time zone.",
        bullets: [
            "Instant AI replies trained on your own knowledge base",
            "Smart routing to the right department or agent",
            "Automatic ticket summaries and tags",
        ],
    },
    {
        icon: MessageCircle,
        title: "Live Chat & Human Handoff",
        description:
            "Let AI handle the repetitive work while your human team focuses on high-value conversations, with seamless handoff between bot and agent.",
        bullets: [
            "Unified inbox for chat, email, and social",
            "Agent collision detection and assignment rules",
            "See full conversation context in one place",
        ],
    },
    {
        icon: TrendingUp,
        title: "Sales & Lead Generation",
        description:
            "Turn anonymous visitors into qualified opportunities with AI-powered lead capture, qualification, and scheduling.",
        bullets: [
            "Website chatbots that capture and qualify leads",
            "Auto-enrichment of contact data from forms and chat",
            "Instant meeting scheduling and calendar integrations",
        ],
    },
];

const Features = () => {
    return (
        <section id="features" className="py-20 lg:py-28 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 rounded-full gradient-bg-soft border border-primary/10 text-primary text-sm font-medium mb-6">
                        What you get
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                        Everything you need to automate support and{" "}
                        <span className="gradient-text">boost revenue</span>
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground">
                        Yapee.AI connects your knowledge base, website, and CRM
                        to automate routine conversations—while making it
                        effortless for agents to step in when it matters most.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-background rounded-3xl border border-border/50 p-8 card-shadow hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
                        >
                            <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="w-7 h-7 text-primary-foreground" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {feature.description}
                            </p>
                            <ul className="space-y-3">
                                {feature.bullets.map((bullet, bulletIndex) => (
                                    <li
                                        key={bulletIndex}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                                            <Check className="w-3 h-3 text-primary" />
                                        </div>
                                        <span className="text-sm text-muted-foreground">
                                            {bullet}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
