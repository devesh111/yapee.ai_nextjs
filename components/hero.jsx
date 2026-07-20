"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Bot, Zap, Award, Star } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const Hero = ({ scrollToSection }) => {
    return (
        <section className="relative hero-bg pt-24 lg:pt-32 pb-16 overflow-hidden lg:min-h-screen flex items-center">
            {/* Background decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
                <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-indigo/5 blur-3xl" />
            </div>

            <div className="relative max-w-full sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="animate-fade-up flex flex-col items-center justify-center gap-3 mb-10">
                    <div className="border-2 border-dashed border-green-500 mb-2">
                        <h1 className="text-2xl md:text-3xl lg:text-5xl gradient-text-trial font-extrabold text-center p-2">
                            Try <span className="gradient-text">Yapee.AI</span>{" "}
                            Free for 14 days
                        </h1>
                    </div>
                    <Button
                        variant="hero"
                        onClick={() => (window.location.href = "/pricing")}
                        className="group w-xs mx-auto sm:mx-0 sm:w-auto max-w-full"
                    >
                        Sign Up Now
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>
                <div className="grid lg:grid-cols-2 items-center justify-center gap-4">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        {/* Eyebrow */}
                        <div className="animate-fade-up">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full gradient-bg-soft border border-primary/40 text-sm font-medium text-primary">
                                <Star className="w-5 h-5 text-orange-500 border" />
                                - Precision WhatsApp marketing
                            </span>
                        </div>

                        <div className="animate-fade-up text-xl text-center lg:text-left py-4 font-bold mb-0">
                            <span className="gradient-text">Powered by AI</span>{" "}
                            ✨
                        </div>

                        {/* Headline */}
                        <h1 className="mt-0 text-3xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground animate-fade-up delay-100 leading-tight lg:leading-10">
                            Boost your revenue with WhatsApp conversations using{" "}
                            <span className="gradient-text">Yapee.AI</span>
                        </h1>

                        {/* Subheading */}
                        <p className="mt-6 text-md lg:text-md text-muted-foreground leading-7 animate-fade-up delay-200">
                            Broadcast, automate, engage and sell effortlessly
                            with our AI‑driven WhatsApp engagement platform
                        </p>

                        {/* Trust note */}
                        <p className="mt-4 text-lg font-semibold text-muted-foreground animate-fade-up delay-400">
                            Powered by official WhatsApp APIs⚡
                        </p>

                        {/* CTAs */}
                        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-300 items-center">
                            <Button
                                variant="hero"
                                onClick={() =>
                                    (window.location.href = "/pricing")
                                }
                                className="group w-auto mx-auto sm:mx-0 sm:w-auto"
                            >
                                Sign Up Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>

                    {/* Dashboard Demo Video */}

                    <div className="max-w-2xl lg:max-w-3xl relative animate-fade-up delay-300 mx-auto">
                        <div className="bg-background w-full animate-float shadow-2xl border border-border/50 rounded-2xl p-0 mt-10 lg:mt-0">
                            <div className="absolute top-5 left-6  flex items-center gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                            </div>

                            <Image
                                alt="Dashboard Demo"
                                src="/images/hero-banner-right-v2.webp"
                                width={1024}
                                height={1024}
                                className="w-full"
                            />

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
                                    <div className="w-10 h-10 rounded-full bg-red-200 flex items-center justify-center">
                                        <Zap className="w-5 h-5 text-red-700" />
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
