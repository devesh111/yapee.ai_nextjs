"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "How long does it take to set up Yapee.AI?",
        answer: "Most teams are fully live within 1–2 weeks, and many see value in just a few days. Our team guides you through setup and best practices.",
    },
    {
        question: "Will the AI sound like a robot?",
        answer: "No. You control the tone of voice and guardrails. Yapee.AI is trained on your content, so responses stay on-brand and human-like.",
    },
    {
        question: "Can my team still jump into conversations?",
        answer: "Absolutely. Agents can take over any AI-handled conversation, and the handoff is seamless to the customer.",
    },
    {
        question: "Which tools do you integrate with?",
        answer: "We integrate with major CRMs, helpdesks, e-commerce platforms, and calendars. You can also use our APIs and webhooks to connect custom tools.",
    },
    {
        question: "Is my data secure?",
        answer: "Yes. We follow industry best practices for security and data privacy, with role-based access, audit trails, and data encryption in transit and at rest.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-20 lg:py-28 bg-muted/30">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-2 rounded-full gradient-bg-soft border border-primary/10 text-primary text-sm font-medium mb-6">
                        FAQ
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                        Answers to{" "}
                        <span className="gradient-text">common questions</span>
                    </h2>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-background rounded-2xl border border-border/50 card-shadow overflow-hidden hover:scale-101 transition-all duration-300"
                        >
                            <button
                                onClick={() =>
                                    setOpenIndex(
                                        openIndex === index ? null : index
                                    )
                                }
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
                            >
                                <span className="font-semibold text-foreground pr-4">
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                                        openIndex === index ? "rotate-180" : ""
                                    }`}
                                />
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? "max-h-96" : "max-h-0"
                                }`}
                            >
                                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
