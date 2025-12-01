"use client";

import { Clock, Repeat, UserX, Layers, BarChart3 } from "lucide-react";

const painPoints = [
    {
        icon: Clock,
        text: "Slow first response times and missed SLAs",
    },
    {
        icon: Repeat,
        text: "Repetitive FAQs wasting agent time",
    },
    {
        icon: UserX,
        text: "Leads waiting hours (or days) for a simple reply",
    },
    {
        icon: Layers,
        text: "Fragmented data across live chat, email, and CRMs",
    },
    {
        icon: BarChart3,
        text: "No clear visibility into team performance",
    },
];

const PainPoints = () => {
    return (
        <section className="py-20 lg:py-28 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div>
                        <span className="inline-block px-4 py-2 rounded-full gradient-bg-soft text-primary text-sm font-medium mb-6">
                            The old way is broken
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                            Your inbox is full. Your agents are tired.{" "}
                            <span className="gradient-text">
                                Your customers are waiting.
                            </span>
                        </h2>
                        <p className="mt-6 text-md text-muted-foreground leading-relaxed">
                            Most support and sales teams are drowning in
                            repetitive questions, disjointed tools, and manual
                            work. Tickets slip through the cracks, leads go
                            cold, and your team spends more time firefighting
                            than building relationships.
                        </p>
                    </div>

                    {/* Right - Pain Point Cards */}
                    <div className="space-y-4">
                        {painPoints.map((point, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 p-5 bg-background rounded-2xl border border-border/50 card-shadow hover:border-destructive/30 transition-all duration-300 group hover:scale-95"
                            >
                                <div className="shrink-0 w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                                    <point.icon className="w-6 h-6 text-destructive" />
                                </div>
                                <p className="text-foreground font-medium pt-2">
                                    {point.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PainPoints;
