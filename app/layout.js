import { Inter } from 'next/font/google';
import "./globals.css";

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Optional: optimizes font loading
  variable: '--font-inter', // Assign a CSS variable name
});

export const metadata = {
    title: "Yapee.AI",
    description: "Turn every customer conversation into revenue with Yapee.AI",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
