"use client";

const metrics = [
    {
        value: "98%",
        label: "Open Rates",
    },
    {
        value: "60%+",
        label: "Click Rates",
    },
    {
        value: "2.6Bn+",
        label: "Active Users",
    },
    {
        value: "70%",
        label: "Engegement Rate",
    },
];

const Metrics = () => {
    return (
        <section className="py-20 lg:py-28 gradient-bg relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
                        Why WhatsApp?
                    </span>
                    <h2 className="text-2xl lg:text-3xl font-bold text-white">
                        WhatsApp unites actionable notifications and customer support in one powerful platform
                    </h2>
                </div>

                {/* Metrics Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {metrics.map((metric, index) => (
                        <div
                            key={index}
                            className="text-center p-6 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20 group hover:scale-95 transition-all duration-300 hover:bg-gray-100"
                        >
                            <div className="text-5xl lg:text-6xl font-extrabold text-white mb-3 group-hover:text-pink-400 transition-all duration-300">
                                {metric.value}
                            </div>
                            <p className="text-white/80 text-sm lg:text-base group-hover:text-pink-400 transition-all duration-300">
                                {metric.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Metrics;
