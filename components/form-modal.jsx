"use client";

import {
    Dialog,
    DialogHeader,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const FormModal = ({ isOpen, setIsOpen }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        services: [],
        message: "",
    });

    const services = [
        "Customer Support",
        "Bulk Broadcasting",
        "Ecommerce Automation",
        "Automating Notifications (CRM, Custom Integration etc.)",
        "Chatbot Automation",
    ];

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleServiceToggle = (service) => {
        setFormData((prev) => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter((s) => s !== service)
                : [...prev.services, service],
        }));
    };

    return (
        <div>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <form>
                    <DialogContent className="w-full h-4/5 overflow-y-scroll">
                        <DialogHeader>
                            <DialogTitle className="">
                                Get Your Personalized Demo
                            </DialogTitle>
                            <DialogDescription>
                                Explore Yapee.AI's powerful WhatsApp features
                                and unlock dramatically higher sales.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                            <div>
                                <Label htmlFor="name" className="mb-3">Name</Label>
                                <Input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleFormChange}
                                    palceholder="Your Name"
                                    required
                                    className="p-4 rounded-lg w-full border h-10 border-muted-foreground/50 hover:border-muted-foreground/90 focus:shadow-none text-muted-foreground"
                                />
                            </div>
                            <div>
                                <Label htmlFor="email" className="mb-3">Email</Label>
                                <Input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleFormChange}
                                    palceholder="Your Email Address"
                                    required
                                    className="p-4 rounded-lg w-full border h-10 border-muted-foreground/50 hover:border-muted-foreground/90 focus:shadow-none text-muted-foreground"
                                />
                            </div>
                            <div>
                                <Label htmlFor="phone" className="mb-3">Phone Number</Label>
                                <Input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleFormChange}
                                    palceholder="Your WhatsApp Number"
                                    required
                                    className="p-4 rounded-lg w-full border h-10 border-muted-foreground/50 hover:border-muted-foreground/90 focus:shadow-none text-muted-foreground"
                                />
                            </div>
                            <div>
                                <Label htmlFor="company" className="mb-3">Company Name</Label>
                                <Input
                                    name="company"
                                    value={formData.company}
                                    onChange={handleFormChange}
                                    palceholder="Your Company Name"
                                    required
                                    className="p-4 rounded-lg w-full border h-10 border-muted-foreground/50 hover:border-muted-foreground/90 focus:shadow-none text-muted-foreground"
                                />
                            </div>
                            <div>
                                <Label className="mb-3">Company Size</Label>
                                <RadioGroup defaultValue={formData.company}>
                                    <div className="flex items-center gap-3">
                                        <RadioGroupItem
                                            value="1-10"
                                            id="employees_1_10"
                                        />
                                        <Label htmlFor="employees_1_10">
                                            1-10 Employees
                                        </Label>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <RadioGroupItem
                                            value="10-20"
                                            id="employees_10_20"
                                        />
                                        <Label htmlFor="employees_10_20">
                                            10-20 Employees
                                        </Label>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <RadioGroupItem
                                            value="20-50"
                                            id="employees_20_50"
                                        />
                                        <Label htmlFor="employees_20_50">
                                            20-50 Employees
                                        </Label>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <RadioGroupItem
                                            value="50-200"
                                            id="employees_50_200"
                                        />
                                        <Label htmlFor="employees_50_200">
                                            50-200 Employees
                                        </Label>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <RadioGroupItem
                                            value="200plus"
                                            id="employees_200_plus"
                                        />
                                        <Label htmlFor="employees_200_plus">
                                            200+ Employees
                                        </Label>
                                    </div>
                                </RadioGroup>
                            </div>
                            <div>
                                <Label className="mb-3">
                                    Your WhatsApp Marketing Requirements:
                                </Label>
                                {services.map((service, index) => (
                                    <Label
                                        key={index}
                                        className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-aria-checked:border-pink-600 has-aria-checked:bg-blue-50 dark:has-aria-checked:border-pink-900 dark:has-aria-checked:bg-blue-950"
                                    >
                                        <Checkbox
                                            className="data-[state=checked]:border-pink-600 data-[state=checked]:bg-pink-600 data-[state=checked]:text-white dark:data-[state=checked]:border-pink-700 dark:data-[state=checked]:bg-pink-700"
                                            checked={formData.services.includes(
                                                service
                                            )}
                                            onCheckedChange={() => {
                                                handleServiceToggle(service);
                                            }}
                                        />
                                        <div className="grid gap-1.5 font-normal">
                                            <p className="text-muted-foreground leading-none">
                                                {service}
                                            </p>
                                        </div>
                                    </Label>
                                ))}
                            </div>
                            <div>
                                <Label>Message</Label>
                                <Textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleFormChange}
                                    placeholder="Tell us about your project..."
                                    rows={5}
                                    className="p-4 rounded-lg w-full border h-30 border-slate-500 focus:border-blue-600 focus:shadow-none text-dark-charcoal placeholder:text-slate-600"
                                />
                            </div>
                            <div>
                                <Button>Start Now</Button>
                            </div>
                        </div>
                    </DialogContent>
                </form>
            </Dialog>
        </div>
    );
};

export default FormModal;
