const nextConfig = {
    async redirects() {
        return [
            {
                source: "/trial",
                destination: "https://buy.stripe.com/00w6oA09O0jx704eV59R600",
                permanent: true, // 307 redirect
            },
        ];
    },
};

export default nextConfig;
