export function offsetHome(BANNER_HEIGHT_EXTEND: number) {

			let offset = Math.floor(window.innerHeight * (BANNER_HEIGHT_EXTEND / 100));
			offset = offset - offset % 4;
			document.documentElement.style.setProperty('--banner-height-extend', `${offset}px`);

			let offset_home = Math.floor(window.innerWidth * (BANNER_HEIGHT_EXTEND / 100));
			offset_home = offset_home - offset_home % 4;
			document.documentElement.style.setProperty('--banner-height-extend-main-grid', `${offset_home}px`);
}

