"use client";

import { Building2, ShoppingCart, Landmark, Users } from "lucide-react";

const useCases = [
    {
        icon: Building2,
        title: "SaaS & B2B",
        description:
            "Qualify trials, route enterprise leads, and resolve technical questions before they hit your engineers.",
    },
    {
        icon: ShoppingCart,
        title: "E-commerce & DTC",
        description:
            "Answer order questions, recommend products, and recover abandoned carts directly in chat.",
    },
    {
        icon: Landmark,
        title: "Fintech & Banking",
        description:
            "Handle routine balance and policy queries securely while routing complex cases to specialists.",
    },
    {
        icon: Users,
        title: "Customer Success Teams",
        description:
            "Proactively engage at-risk accounts and automate playbooks around renewals and expansions.",
    },
];

const UseCases = () => {
    return (
        <section id="use-cases" className="py-20 lg:py-28 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 rounded-full gradient-bg-soft border border-primary/10 text-primary text-sm font-medium mb-6">
                        Built for modern teams
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                        Flexible enough for every{" "}
                        <span className="gradient-text">
                            conversation-heavy team
                        </span>
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground">
                        Whether you're running a lean support team or scaling a
                        global sales org, Yapee.AI adapts to the way you work.
                    </p>
                </div>

                {/* Use Case Cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {useCases.map((useCase, index) => (
                        <div
                            key={index}
                            className="bg-background rounded-3xl border border-border/50 p-6 card-shadow hover:shadow-xl hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                                <useCase.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold text-foreground mb-3">
                                {useCase.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {useCase.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
