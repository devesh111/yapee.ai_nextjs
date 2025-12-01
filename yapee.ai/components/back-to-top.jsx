"use client";

import { ArrowUp } from "lucide-react";
import { Button } from '@/components/ui/button';

const BackToTop = ({ scrollToTop }) => {
    return (
        <Button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 rounded-full text-white shadow-lg hover:shadow-xl transition-all back-to-top-button overflow-hidden gradient-bg hover:scale-95 duration-300"
        >
            <ArrowUp size={24} />
        </Button>
    );
};

export default BackToTop;
