"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
    { label: "Features", href: "/#features" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "Customer stories", href: "/#testimonials" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/#faq" },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-15 lg:h-20">
                    {/* Logo */}
                    <a href="/#" className="flex items-center gap-0 flex-col">
                        <span className="text-4xl font-bold gradient-text">
                            <img src="images/logo.webp" className="w-[190px]" />
                        </span>
                        <span className="text-[9px] font-semibold tracking gradient-text">
                            Intelligent Automation, Human Conversations
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-2">
                        <Button
                            onClick={() =>
                                (window.location.href =
                                    "https://yipyapmessenger.com/")
                            }
                            variant="hero-outline"
                            size="md"
                        >
                            Sign in
                        </Button>
                        <Button
                            onClick={() => (window.location.href = "/pricing")}
                            variant="default"
                            size="md"
                        >
                            Sign Up Now
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-background border-b border-border">
                    <div className="px-4 py-4 space-y-3">
                        {navLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full text-left py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Button
                            onClick={() => (
                                (window.location.href = "/#cta"),
                                setIsMobileMenuOpen(false)
                            )}
                            variant="default"
                            className="w-full mt-4"
                        >
                            Book a demo
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
