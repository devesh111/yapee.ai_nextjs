"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Bot, Zap } from "lucide-react";

const Hero = () => {
    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative min-h-screen hero-gradient pt-24 lg:pt-32 pb-16 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-indigo/5 blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        {/* Eyebrow */}
                        <div className="animate-fade-up">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-bg-soft border border-primary/10 text-sm font-medium text-primary">
                                <Zap className="w-4 h-4" />
                                AI-Powered Support & Sales Automation
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground animate-fade-up delay-100 leading-13">
                            Turn every customer conversation into{" "}
                            revenue with <span className="gradient-text">Yapee.AI</span>
                        </h1>

                        {/* Subheading */}
                        <p className="mt-6 text-md lg:text-md text-muted-foreground leading-relaxed animate-fade-up delay-200">
                            Yapee.AI combines smart chatbots, human live-chat,
                            and sales automation in one unified platform—so you
                            can respond faster, close more deals, and deliver
                            24/7 support without burning out your team.
                        </p>

                        {/* CTAs */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-300">
                            <Button
                                variant="hero"
                                onClick={() => scrollToSection("#cta")}
                                className="group"
                            >
                                Book A Live Demo
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                                variant="hero-outline"
                                onClick={() => scrollToSection("#pricing")}
                            >
                                Start Free Trial
                            </Button>
                        </div>

                        {/* Trust note */}
                        <p className="mt-6 text-sm text-muted-foreground animate-fade-up delay-400">
                            Trusted by fast-growing SaaS, e-commerce, and
                            digital-first brands.
                        </p>
                    </div>

                    {/* Right Visual */}
                    <div className="relative animate-fade-up delay-300">
                        <div className="relative">
                            {/* Main dashboard mockup */}
                            <div className="bg-background rounded-3xl shadow-2xl border border-border/50 p-6 animate-float">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="space-y-4">
                                    {/* Chat preview */}
                                    <div className="flex gap-3">
                                        <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                                            <Bot className="w-5 h-5 text-primary-foreground" />
                                        </div>
                                        <div className="flex-1 bg-muted rounded-2xl rounded-tl-none p-4">
                                            <p className="text-xs text-gray-700">
                                                Hi! I'm your AI assistant. How
                                                can I help you today?
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 justify-end">
                                        <div className="bg-primary/10 rounded-2xl rounded-tr-none p-4 max-w-[80%]">
                                            <p className="text-xs text-gray-700">
                                                I need help with my recent order
                                                #12345
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                                            <Bot className="w-5 h-5 text-primary-foreground" />
                                        </div>
                                        <div className="flex-1 bg-muted rounded-2xl rounded-tl-none p-4">
                                            <p className="text-xs text-gray-700">
                                                I found your order! It's
                                                currently in transit and will
                                                arrive by tomorrow. Would you
                                                like tracking details?
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating elements */}
                            <div
                                className="absolute -top-4 -right-4 bg-background rounded-2xl shadow-xl border border-border/50 p-4 animate-float"
                                style={{ animationDelay: "1s" }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                                        <MessageSquare className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-foreground">
                                            Response Time
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            -65% faster
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="absolute -bottom-4 -left-4 bg-background rounded-2xl shadow-xl border border-border/50 p-4 animate-float"
                                style={{ animationDelay: "2s" }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-violet/10 flex items-center justify-center">
                                        <Zap className="w-5 h-5 text-violet" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-foreground">
                                            Automation
                                        </p>
                                        <p className="text-xs text-muted-foreground">
                                            40% handled by AI
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
