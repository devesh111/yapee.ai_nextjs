"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What does Yapee.AI do?",
        answer: <>Yapee.AI delivers comprehensive WhatsApp marketing software for businesses.<br/><br/><strong>Key Capabilities:</strong> Broadcast and automate messages effortlessly. Run Click to WhatsApp Ads, build smart chatbots, showcase product catalogues, enable multi-agent live chat support, and collect payments directly in WhatsApp - plus much more</>,
    },
    {
        question: "Is Yapee.AI an Official WhatsApp Marketing Software?",
        answer: "Yes, Yapee.AI is an Official WhatsApp Business Solution Partner (BSP) powered by WhatsApp Business APIs.",
    },
    {
        question: "Does Yapee.AI offer a FREE account?",
        answer: <>Yes, Yapee.AI offers a FREE forever plan with access to WhatsApp Business API.<br/><br/><strong>Ideal for SMBs</strong> <br/>This zero-upfront-cost option suits small and medium businesses starting WhatsApp marketing.</>,
    },
    {
        question: "Is there any WhatsApp Business API procurement fee for a brand/business?",
        answer: "No setup fee for WhatsApp Business API. Yapee.AI charges only a subscription fee and procures the API free for brands and businesses.",
    },
    {
        question: "How do you handle Customer Support?",
        answer: <>Dedicated customer support via live chat, email, calls, and Zoom.<br /><br /><strong>Always Ready to Help</strong><br />Our team assists with every need, ensuring smooth operations for your business.</>,
    },
    {
        question: "What is the Cost of Broadcasting messages?",
        answer: "WhatsApp charges £0.0073 per marketing message and £0.001 per utility or authentication message. You can recharge directly from the Yapee.AI Dashboard. Each message is charged separately by Meta. eService conversations (user-initiated replies) remain free.",
    },
    {
        question: "How many messages can I Broadcast in a day to my customers?",
        answer: "Start with 1000 messages daily. Limits upgrade to 10k after 500+ sent, 100k after 5k in 7 days, and unlimited after 50k in 7 days—upgrades activate in 24 hours.",
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
