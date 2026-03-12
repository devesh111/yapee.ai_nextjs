import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';

export const inter = Inter({
    subsets: ["latin"],
    display: "swap", // Optional: optimizes font loading
    variable: "--font-inter", // Assign a CSS variable name
});

export const metadata = {
    title: "Yapee.AI",
    description:
        "Yapee.AI is an official WhatsApp Business Solution Partner with free API access, automation, broadcasts, and priority support for businesses.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning className="scroll-smooth">
            <body className={`${inter.variable} antialiased`}>{children}
                <Toaster position="top-center" />
            </body>
        </html>
    );
}
