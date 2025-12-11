"use client";

import { Clock, Repeat, UserX, Layers, BarChart3, Clock1 } from "lucide-react";
import Image from "next/image";

const painPoints = [
    {
        icon: UserX,
        text1: "Numerous Powerful Messaging Categories",
        text2: "Promotions, Offers, Coupons, Carousels and more - Risk-Free!"
    },
    {
        icon: Repeat,
        text1: "Drive 3x Conversions",
        text2: "Turn conversations into sales with eye-catching CTAs and Quick Reply buttons",
    },
    {
        icon: Clock,
        text1: "Schedule WhatsApp Messages",
        text2: "Streamline your workflow by scheduling broadcasts up to 2 months ahead",
    },
];

const WhatWeOffer = () => {
    return (
        <section className="py-20 lg:py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div>
                        <span className="inline-block px-4 py-2 rounded-full gradient-bg-soft text-primary text-sm font-medium mb-6">
                            Enjoy Limitless Broadcasting Experience
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                            Send Approved Promotional Broadcasts {" "}
                            <span className="gradient-text">
                                on WhatsApp.
                            </span>
                        </h2>
                        <div className="mt-10">
                            {painPoints.map((point, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4 px-3 py-2 bg-background rounded-2xl border border-border/50 card-shadow hover:border-destructive/30 transition-all duration-300 group hover:scale-95 mb-2"
                                >
                                    <div className="shrink-0 w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                                        <point.icon className="w-6 h-6 text-destructive" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-lg text-foreground">{point.text1}</span>
                                        <span className="text-xs text-muted-foreground">{point.text2}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Pain Point Cards */}
                    <div className="space-y-4">
                        {/* {painPoints.map((point, index) => (
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
                        ))} */}
                        <div>
                            <Image
                                src="/images/third-fold-image.webp"
                                alt="Our Offerings"
                                width={550}
                                height={550}
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeOffer;
