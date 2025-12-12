"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Bot, Zap, Award } from "lucide-react";
import Image from "next/image";

const Hero = ({ scrollToSection }) => {
    return (
        <section className="relative min-h-screen hero-bg pt-24 lg:pt-32 pb-16 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-indigo/5 blur-3xl" />
            </div>

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-1 gap-12 lg:gap-16 items-center justify-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-center">
                        {/* Eyebrow */}
                        <div className="animate-fade-up">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-bg-soft border border-primary/40 text-sm font-medium text-primary">
                                <Award className="w-5 h-5 text-orange-500 border" />
                                — Recognised as the WhatsApp CTX Growth Champion
                            </span>
                        </div>

                        <div className="animate-fade-up text-xl text-center p-4 font-bold mb-0">
                            <span className="gradient-text">AI-Powered</span> ✨
                        </div>

                        {/* Headline */}
                        <h1 className="mt-0 text-3xl sm:text-3xl lg:text-5xl font-bold tracking-tight text-foreground animate-fade-up delay-100 leading-tight lg:leading-14">
                            Boost your revenue with WhatsApp conversations using <span className="gradient-text">Yapee.AI</span>
                        </h1>

                        {/* Subheading */}
                        <p className="mt-6 text-md lg:text-lg text-muted-foreground leading-relaxed animate-fade-up delay-200">
                            Broadcast, Automate, Engage, and Sell Effortlessly with AI‑driven WhatsApp Engagement Platform
                        </p>

                        {/* Trust note */}
                        <p className="mt-6 text-lg font-semibold text-muted-foreground animate-fade-up delay-400">
                             Powered by Official WhatsApp APIs⚡
                        </p>

                        {/* CTAs */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-center animate-fade-up delay-300">
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
                                Try Yapee.AI For Free
                            </Button>
                        </div>

                        
                    </div>

                    {/* Dashboard Demo Video */ }
                    <div className="max-w-3xl relative animate-fade-up delay-300 mx-auto">
                        <div className="bg-background w-full animate-float shadow-2xl border border-border/50 rounded-2xl p-0">
                            <div className="absolute top-5 left-6  flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>
                        
                            <Image
                                alt="Dashboard Demo"
                                src="/images/hero-banner-1.png"
                                width={1024}
                                height={1024}
                                className="w-full"
                            />
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
                                            Handled by AI
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
