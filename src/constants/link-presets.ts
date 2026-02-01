import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import { LinkPreset, type NavBarLink } from "@/types/config";

export const LinkPresets: { [key in LinkPreset]: NavBarLink } = {
	[LinkPreset.Home]: {
		name: i18n(I18nKey.home),
		url: "/",
	},
	[LinkPreset.About]: {
		name: i18n(I18nKey.about),
		url: "/about/",
	},
	[LinkPreset.Archive]: {
		name: i18n(I18nKey.archive),
		url: "/archive/",
	},
	[LinkPreset.Contract]: {
		name: "Contract", // Not much reason to translate this as I expect only english
		url: "/contract/", // people to see this site.
	},
	[LinkPreset.Tutor]: {
		name: "Tutor",
		url: "/tutor/",
	},
	[LinkPreset.Print]: {
		name: "Print",
		url: "/print/",
	},
};
