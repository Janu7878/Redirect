/* eslint-disable @typescript-eslint/no-var-requires */

/**
 * @type {import("next").NextConfig}
 */
const nextConfig = {
	reactStrictMode: true,
	poweredByHeader: false,
	trailingSlash: true,
	swcMinify: true,
	i18n: {
		locales: ["en", "tr"],
		defaultLocale: "en",
	},
	images: {
		domains: ["avatars.githubusercontent.com", "api.338.rocks"],
	},
	async redirects() {
		return [
			{
				source: "/github",
				destination: "https://github.com/barisbored",
				permanent: true,
			},
			{
				source: "/posts/:slug",
				destination: "https://fancy4work.com/:slug",
				basePath: true,
				permanent: false,
			},
			{
				source: "/youtube",
				destination: "https://www.youtube.com/@barisbored",
				permanent: true,
			},
			{
				source: "/discord",
				destination: "https://discord.gg/BjEJFwh",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
