"use client";

const metrics = [
    {
        value: "65%",
        label: "Average reduction in first response time",
    },
    {
        value: "40%",
        label: "More conversations handled without hiring",
    },
    {
        value: "30%",
        label: "Increase in qualified inbound opportunities",
    },
    {
        value: "24/7",
        label: "Always-on coverage for every time zone",
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
                        Results that compound
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white">
                        See the impact in weeks, not quarters
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
