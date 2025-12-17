"use client";

import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Yapee.AI transformed our WhatsApp support—scaling chats effortlessly without adding headcount. Customers are happier, and our team loves it!",
        name: "John Hargreaves",
        role: "Founder",
        company: "PeakFlow Logistics",
    },
    {
        quote: "From green tick verification to priority support, Yapee.AI delivers. We've boosted conversions and kept everything compliant-game-changer for our UK brand.'",
        name: "Sarah Wilkins",
        role: "Marketing Director",
        company: "BrewHaven Teas",
    },
    {
        quote: "Blazing-fast features and unlimited broadcasts mean we're always ahead. Teams like ours scale support seamlessly with Yapee.AI - no chaos, just results!'",
        name: "Michael Martinez",
        role: "CEO",
        company: "TechNest Solutions",
    },
];

const Testimonials = () => {
    return (
        <section className="py-20 lg:py-28 bg-background" id="testimonials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 rounded-full gradient-bg-soft border border-primary/10 text-primary text-sm font-medium mb-6">
                        Customers Love Yapee.AI
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                        Teams Like Yours Scale Support {" "}
                        <span className="gradient-text">Seamlessly</span>
                    </h2>
                </div>

                {/* Testimonial Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-background rounded-3xl border border-border/50 p-8 card-shadow hover:shadow-xl transition-all duration-300 flex flex-col hover:scale-95"
                        >
                            <Quote className="w-10 h-10 text-primary/20 mb-6" />
                            <p className="text-foreground leading-relaxed grow mb-6">
                                "{testimonial.quote}"
                            </p>
                            <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                                <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-semibold text-foreground">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        {testimonial.role},{" "}
                                        {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
