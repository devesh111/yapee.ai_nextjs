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
import { toast } from "react-hot-toast";

const FormModal = ({ isOpen, setIsOpen }) => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
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
                message: "",
            });
            setIsOpen(false);
        }
        // console.log("Form data log:", formData);
    };

    return (
        <div>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="rounded-sm">
                    <DialogHeader>
                        <DialogTitle className="text-xl lg:text-3xl leading-tight font-bold gradient-text">
                            Get Your Personalized Demo
                        </DialogTitle>
                        <DialogDescription className="text-xs lg:text-xs mb-2">
                            Explore Yapee.AI's powerful WhatsApp features &
                            unlock higher sales.
                        </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleSubmit} className="-mx-4 max-h-[60vh] overflow-y-auto px-4 form-scrollbar">
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
                            <div>
                                <Label className="mb-3">Message</Label>
                                <Textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleFormChange}
                                    placeholder="Tell us about your project..."
                                    rows={3}
                                    className="px-4 rounded-none w-full border max-h-10 border-muted-foreground/50 focus:border-blue-100 focus:shadow-none text-dark-charcoal placeholder:text-slate-500 text-sm"
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
            </Dialog>
        </div>
    );
};

export default FormModal;
