"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const CTASection = () => {
    return (
        <section
            id="cta"
            className="py-20 lg:py-28 bg-background relative overflow-hidden"
        >
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full gradient-bg-soft blur-3xl opacity-50" />
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="inline-block px-4 py-2 rounded-full gradient-bg-soft border border-primary/10 text-primary text-sm font-medium mb-6">
                    Ready when you are
                </span>
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
                    See <span className="gradient-text">Yapee.AI</span> in
                    action
                </h2>
                <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                    Share a few details about your team and we'll show you
                    exactly how Yapee.AI can automate your support and sales
                    conversations.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="hero" size="xl" className="group">
                        Book a 30-minute demo
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="hero-outline" size="xl">
                        <Play className="w-5 h-5" />
                        Start free trial
                    </Button>
                </div>

                <p className="mt-6 text-sm text-muted-foreground">
                    No long-term contracts. Upgrade or cancel anytime.
                </p>
            </div>
        </section>
    );
};

export default CTASection;
