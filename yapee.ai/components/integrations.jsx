"use client";

const integrations = [
    "HubSpot",
    "Salesforce",
    "Zendesk",
    "Intercom",
    "Slack",
    "Google Calendar",
    "Shopify",
];

const Integrations = () => {
    return (
        <section className="py-20 lg:py-28 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-2 rounded-full gradient-bg-soft border border-primary/10 text-primary text-sm font-medium mb-6">
                        Integrations
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                        Works with the tools you{" "}
                        <span className="gradient-text">already use</span>
                    </h2>
                    <p className="mt-6 text-lg text-muted-foreground">
                        Yapee.AI plugs into your existing stack, so you don't
                        have to rebuild your workflows from scratch.
                    </p>
                </div>

                {/* Integration Badges */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    {integrations.map((integration, index) => (
                        <div
                            key={index}
                            className="px-6 py-4 bg-background rounded-2xl border border-border/50 card-shadow hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-default"
                        >
                            <span className="font-semibold text-foreground">
                                {integration}
                            </span>
                        </div>
                    ))}
                </div>

                <p className="text-center text-muted-foreground">
                    Use our open APIs and webhooks to connect almost anything
                    else in your stack.
                </p>
            </div>
        </section>
    );
};

export default Integrations;
