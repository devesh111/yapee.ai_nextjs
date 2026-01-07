"use client";

import Image from "next/image";

const Loader = () => {
    return (
        <div className="text-left">
            <Image
                src="/loader.svg"
                alt="Loading..."
                width={50}
                height={50}
                className="h-10 w-auto"
            />
            <p className="mt-4 text-sm text-dark-charcoal">
                Submitting your form, please wait...
            </p>
        </div>
    );
};

export default Loader;
