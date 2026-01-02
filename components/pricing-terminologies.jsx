"use client";

import { FileHeadphone, MonitorCog, Globe, ShoppingCart, IdCard, MessageSquareText } from "lucide-react";

const PricingTerminologies = () => {
    const terminologies = [
        {
            headline: "Customer Service Window",
            text: "When a user sends you a message, a 24-hour support window begins. Each new message from the user resets this window. During this window, you can respond freely without additional charges and you can respond with any free form messages. Also, utility templates delivered within this window won't be charged.",
            icon: FileHeadphone,
        },
        {
            headline: "Unlimited Free Service messages",
            text: "Each business using Yapee.AI receives Unlimited FREE service messages. Businesses can reply to user messages without incurring any charges; it's completely FREE.",
            icon: MonitorCog,
        },
        {
            headline: "Marketing messages",
            text: "Marketing messages include all promotional messages, offers, product updates. Each marketing message delivered costs £1.09/ message (for UK users)",
            icon: Globe,
        },
        {
            headline: "Utility Messages",
            text: "Utility messages are transactional in nature and include messages for delivery  updates, transaction receipts, reminders and more. Each utility message delivered costs £0.145/ message (for UK users). Utility templates delivered within a customer service window won't be charged.",
            icon: ShoppingCart,
        },
        {
            headline: "Authentication Messages",
            text: "Authentication messages include messages used for verification purposes such as OTP, account registration and account recovery. Each authentication template message delivered costs £0.145/ message (for UK users)",
            icon: IdCard,
        },
        {
            headline: "Service Messages",
            text: "Service messages includes all user-initiated messages related to customer support, Chatbot support & queries asked by users. Service conversations are FREE for all businesses using Yapee.AI.",
            icon: MessageSquareText,
        },
    ]
    return (
        <section className="py-20 lg:py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 rounded-full gradient-bg-soft border border-primary/10 text-primary text-sm font-medium mb-6">
                        Terminologies
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                        Important Pricing{" "}
                        <span className="gradient-text">Terminologies</span>
                    </h2>
                    <p className="mt-2 text-lg text-muted-foreground">
                        Let's make WhatsApp API Pricing easy to understand for
                        you!
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {terminologies.map((term, index)=>(
                        <div key={index} className="bg-background rounded-3xl border border-border/50 py-10 px-8 card-shadow hover:shadow-xl transition-all duration-300 flex flex-col hover:scale-95">
                            <term.icon className="w-12 h-12 text-primary" />
                            <h3 className="text-lg lg:text-xl font-bold text-foreground mt-5">
                                {term.headline}
                            </h3>
                            <p className="text-md mt-3 text-muted-foreground">
                                {term.text}
                            </p>
                        </div>
                    ))}
                    
                </div>
            </div>
        </section>
    );
};

export default PricingTerminologies;
