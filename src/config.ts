import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Studio Homonkulos",
	subtitle: "Projects",
	lang: "en", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 280, // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
		fixed: true, // Hide the theme color picker for visitors
	},
	banner: {
		enable: true,
		src: "", // Ignore this, video is imported directly in MainGridLayout
		bottom: "assets/banner/banner-bottom.webp",
		position: "top", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // Display the credit text of the banner image
			text: "", // Credit text to be displayed
			url: "", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: false, // Display the table of contents on the right side of the post
		depth: 2, // Maximum heading depth to show in the table, from 1 to 3
	},
	favicon: [
		// Leave this array empty to use the default favicon
		{
		  src: '/favicon/favicon-dark-32.png',    // Path of the favicon, relative to the /public directory
		  theme: 'dark',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		  sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		}
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Tutor,
		LinkPreset.Print,
		LinkPreset.Freelance,
		LinkPreset.Archive,
	],
};

export const profileConfig: ProfileConfig = {
	// `pnpm add @iconify-json/<icon-set-name>`
	avatar: "assets/avatar/avatar.webp", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "M.D.",
	bio: "Independent 3D Artist. A flesh automaton animated by neurotransmitters. Some day consumed by the infernal machine.",
	links: [
		{
			name: "Email",
			icon: "material-symbols:stacked-email",
			url: "mailto:md@homonkulos.studio",
		},
	],
};


		// {
		// 	name: "ArtStation",
		// 	icon: "fa6-brands:artstation",
		// 	url: "https://www.artstation.com/homonkulos",
		// },
		// {
		// 	name: "Bluesky",
		// 	icon: "fa6-brands:square-bluesky",
		// 	url: "https://bsky.app/profile/homonkulos.bsky.social",
		// },
		// {
		// 	name: "GitHub",
		// 	icon: "fa6-brands:github",
		// 	url: "https://github.com/mostghost",
		// },


export const licenseConfig: LicenseConfig = {
	enable: false,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// Note: Some styles (such as background color) are being overridden, see the astro.config.mjs file.
	// Please select a dark theme, as this blog theme currently only supports dark background color
	theme: "github-dark",
};
