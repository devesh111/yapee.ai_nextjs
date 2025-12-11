"use client";

const logos = [
    "Client Logo - 1",
    "Client Logo - 2",
    "Client Logo - 3",
    "Client Logo - 4",
    "Client Logo - 5",
];

const SocialProof = () => {
    return (
        <section className="py-16 gradient-bg border-y border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6 capitalize">
                        Trusted by thousands of businesses worldwide
                    </span>
                    <h1 className="text-center text-3xl lg:text-4xl font-bold text-gray-50 mb-10 capitalize">
                        Growth leaders and sales teams rely on  <span className="text-gray-100 font-extrabold">Yapee.AI</span>
                    </h1>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-5 lg:gap-8">
                    {logos.map((logo, index) => (
                        <div
                            key={logo}
                            className="text-md font-bold bg-gray-50/12 text-gray-50 hover:bg-gray-50/90 hover:text-pink-500 transition-colors duration-300 border border-gray-50/40 px-6 py-4 rounded-md cursor-pointer"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {logo}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
