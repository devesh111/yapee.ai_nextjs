"use client";

import { Quote } from "lucide-react";

const testimonials = [
    {
        quote: "Yapee.AI let us automate nearly half of our inbound questions in under a month. Our agents can finally focus on complex issues instead of copy-pasting the same response all day.",
        name: "Sarah Lee",
        role: "Head of Customer Experience",
        company: "NovaCRM",
    },
    {
        quote: "We turned our website chat into a predictable revenue channel. The AI warms up leads and our reps step in at the right moment—with full context.",
        name: "James Patel",
        role: "VP of Revenue",
        company: "FlowStack",
    },
    {
        quote: "Setup was incredibly fast. We connected our tools, trained the AI on our docs, and started seeing results in days, not months.",
        name: "Elena Martinez",
        role: "COO",
        company: "BrightCart",
    },
];

const Testimonials = () => {
    return (
        <section className="py-20 lg:py-28 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 rounded-full gradient-bg-soft border border-primary/10 text-primary text-sm font-medium mb-6">
                        Customer stories
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                        Teams like yours are scaling support{" "}
                        <span className="gradient-text">without the chaos</span>
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
