/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'all-trader.ru',
                port: '',
                pathname: '**',
            }
        ],
    },
}

module.exports = nextConfig
