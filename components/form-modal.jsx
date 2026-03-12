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
import { Loader } from "lucide-react";
import { toast } from 'react-hot-toast';

const FormModal = ({ isOpen, setIsOpen }) => {
    const [loading, setLoading] = useState(false);
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
        "Automating Notifications",
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // await sendToZohoCRM(formData);
            // await sendEmail(formData);
            console.log(formData);
            toast.success("Thank you! We will get back to you soon.");
        } catch (error) {
            console.error("Error in form submission:", error);
            toast.error(
                "There was an error submitting the form. Please try again later. Error: " +
                    error.message,
            );
            setLoading(false);
        } finally {
            setLoading(false);
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                services: [],
                message: "",
            });
            setIsOpen(false);
        }
        // console.log("Form data log:", formData);
    };

    return (
        <div>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <form>
                    <DialogContent className="sm:max-w-xl sm:max-h-7/8 w-full h-full overflow-y-scroll rounded-sm">
                        <DialogHeader>
                            <DialogTitle className="text-3xl font-bold">
                                Get Your Personalized Demo
                            </DialogTitle>
                            <DialogDescription>
                                Explore Yapee.AI's powerful WhatsApp features
                                and unlock higher sales.
                            </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="">
                            <div className="grid gap-4">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="w-full">
                                        <Label
                                            htmlFor="name"
                                            className="mb-3 text-xs"
                                        >
                                            Name
                                        </Label>
                                        <Input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleFormChange}
                                            palceholder="Your Name"
                                            required
                                            className="p-4 rounded-xs w-full border h-5 border-muted-foreground/50 hover:border-muted-foreground/90 focus:shadow-none text-muted-foreground"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <Label
                                            htmlFor="email"
                                            className="mb-3 text-xs"
                                        >
                                            Email
                                        </Label>
                                        <Input
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleFormChange}
                                            palceholder="Your Email Address"
                                            required
                                            className="p-4 rounded-xs w-full border h-5 border-muted-foreground/50 hover:border-muted-foreground/90 focus:shadow-none text-muted-foreground"
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between gap-3">
                                    <div className="w-full">
                                        <Label
                                            htmlFor="phone"
                                            className="mb-3 text-xs"
                                        >
                                            Phone Number
                                        </Label>
                                        <Input
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleFormChange}
                                            palceholder="Your WhatsApp Number"
                                            required
                                            className="p-4 rounded-xs w-full border h-5 border-muted-foreground/50 hover:border-muted-foreground/90 focus:shadow-none text-muted-foreground"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <Label
                                            htmlFor="company"
                                            className="mb-3 text-xs"
                                        >
                                            Company Name
                                        </Label>
                                        <Input
                                            name="company"
                                            value={formData.company}
                                            onChange={handleFormChange}
                                            palceholder="Your Company Name"
                                            required
                                            className="p-4 rounded-xs w-full border h-5 border-muted-foreground/50 hover:border-muted-foreground/90 focus:shadow-none text-muted-foreground"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col items-start justify-between gap-3">
                                    <div className="w-full">
                                        <Label className="mb-3 text-xs">
                                            Your WhatsApp Marketing
                                            Requirements:
                                        </Label>
                                        <div className="grid grid-cols-2 gap-2">
                                            {services.map((service, index) => (
                                                <Label
                                                    key={index}
                                                    className="hover:bg-accent/50 flex items-start gap-3 rounded-xs border p-2 has-aria-checked:border-pink-600  dark:has-aria-checked:border-pink-900 dark:has-aria-checked:bg-blue-950 has-aria-checked:text-white dark:has-aria-checked:text-white mb-1 cursor-pointer text-sm"
                                                >
                                                    <Checkbox
                                                        className="data-[state=checked]:border-pink-600 data-[state=checked]:bg-pink-600 data-[state=checked]:text-white dark:data-[state=checked]:border-pink-700 dark:data-[state=checked]:bg-pink-700 dark:data-[state=checked]:text-white"
                                                        checked={formData.services.includes(
                                                            service,
                                                        )}
                                                        onCheckedChange={() => {
                                                            handleServiceToggle(
                                                                service,
                                                            );
                                                        }}
                                                    />
                                                    <div className="grid gap-1.5 font-normal">
                                                        <p className=" leading-none">
                                                            {service}
                                                        </p>
                                                    </div>
                                                </Label>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Label className="mb-3">Message</Label>
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
                                    <Button type="submit" disabled={loading}>
                                        Start Now
                                    </Button>
                                    {loading && <Loader />}
                                </div>
                            </div>
                        </form>
                    </DialogContent>
                </form>
            </Dialog>
        </div>
    );
};

export default FormModal;
