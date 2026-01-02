"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";

const AddonPricing = () => {
    const [isQuaterly, setIsQuaterly] = useState(false);
    const addOnCharges = 1.64;

    return (
        <section className="py-20 lg:py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                    Add-Ons (Charged separately)
                </h2>
                <p className="mt-2 text-lg text-muted-foreground">
                    Get Started with Virtual Number & Drag & Drop Flow Builder
                </p>
                <div className="p-10 my-10 flex-col md:flex-row flex justify-center items-center w-full rounded-xl gap-4 border border-border/50 card-shadow bg-background">
                    <div className="border-r w-full md:w-1/4 grid justify-center">
                        <div className="flex items-center gap-2">
                            <span
                                className={`text-md ${
                                    !isQuaterly
                                        ? "text-foreground font-semibold"
                                        : "text-muted-foreground"
                                }`}
                            >
                                Monthly
                            </span>
                            <Switch
                                checked={isQuaterly}
                                onCheckedChange={setIsQuaterly}
                            />
                            <div>
                                <span
                                    className={`text-md ${
                                        isQuaterly
                                            ? "text-foreground font-semibold"
                                            : "text-muted-foreground"
                                    }`}
                                >
                                    Quaterly
                                </span>
                            </div>
                        </div>
                        <div className="text-center mt-5 text-4xl font-extrabold">
                            £{isQuaterly ? addOnCharges * 3 : addOnCharges}
                        </div>
                        <div className="text-center text-sm mt-1">
                            {isQuaterly
                                ? "Quarterly (For 3 months)"
                                : "Per Month"}
                        </div>
                        <div>
                            <Button
                                onClick={() => (window.location.href = "/#cta")}
                                className="w-full mt-6"
                                variant="default"
                            >
                                Buy Now
                            </Button>
                        </div>
                    </div>
                    <div className="w-full md:w-3/4">
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                            UK Virtual Number
                        </h3>
                        <p className="mt-2 text-lg text-muted-foreground">
                            Buy UK Virtual Number for WhatsApp Business API
                            (Requires tax documents for KYC)
                        </p>
                        <ul className="mt-5 text-md text-muted-foreground">
                            <li className="flex items-center gap-2">
                                <Check className="text-primary w-3 h-3" />
                                <span> UK Number (Eg. +44 7XXX XXXXXX) </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-primary w-3 h-3" />
                                <span>
                                    Use this Number to get WhatsApp Business API
                                    via Yapee.AI
                                </span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-primary w-3 h-3" />
                                <span>No Need to maintain SIM Card</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-primary w-3 h-3" />
                                <span>Free Onboarding Call </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddonPricing;
