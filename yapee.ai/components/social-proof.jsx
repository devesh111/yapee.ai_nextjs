"use client";

const logos = [
    "Acme Corp",
    "NovaShop",
    "BrightBank",
    "Loop CRM",
    "TechFlow",
    "DataSync",
];

const SocialProof = () => {
    return (
        <section className="py-16 bg-muted/30 border-y border-border/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-center text-3xl font-medium text-foreground mb-10">
                    Teams using <span className="gradient-text font-bold">Yapee.AI</span> cut response times by{" "}
                    <span className="text-purple-700 font-bold">65%</span> on
                    average.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
                    {logos.map((logo, index) => (
                        <div
                            key={logo}
                            className="text-xl font-bold text-muted-foreground/60 hover:text-muted-foreground transition-colors duration-300"
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
