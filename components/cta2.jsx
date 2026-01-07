"use client";

const CTA2 = () => {
    return (
        <div className="before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0)_100%)] after:absolute after:inset-0 after:z-10 after:opacity-1/2 after:mix-blend-color-dodge bg-linear-to-br from-[#fca33e] via-[#F472B6] to-[#E879F9] absolute inset-0 overflow-hidden rounded-2xl z-1">
            <div className="absolute inset-0 flex w-[500px] gap-6 px-4 md:w-full">
                {[...Array(20)].map((_, index) => (
                    <div key={index} className="h-full w-24 lg:w-12 mix-blend-overlay bg-linear-[90deg,rgb(217,217,217,0.03)_0%,rgba(0,0,0,0.33)_50%,rgba(255,255,255,0.03)_100%]"></div>
                ))}
            </div>
        </div>
    );
};

export default CTA2;
