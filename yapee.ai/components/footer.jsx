"use client";

import {FaFacebookF, FaXTwitter, FaLinkedinIn} from 'react-icons/fa6';

const footerLinks = [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Use cases", href: "#use-cases" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
];

const socialLinks = [
    { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
    { icon: FaXTwitter, href: "#", label: "X (Twitter)" },
    { icon: FaFacebookF, href: "#", label: "Facebook" },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (href) => {
        if (href.startsWith("#")) {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <footer className="gradient-bg text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                    {/* Logo & Copyright */}
                    <div className="text-center lg:text-left">
                        <a
                            href="#"
                            className="text-2xl font-bold text-white"
                        >
                            Yapee.AI
                        </a>
                        <p className="mt-2 text-gray-200 text-sm">
                            © {currentYear} Yapee.AI. All rights reserved.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => scrollToSection(link.href)}
                                className="text-sm text-gray-200 hover:text-white transition-colors"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                aria-label={social.label}
                                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-primary transition-all duration-300 group"
                            >
                                <social.icon className="w-4 h-4 text-purple-600 group-hover:text-white" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
