export function initParallax(
	elementId: string,
	speed = 0.5,
	fps = 24, 
	smooth = 0.12,
  // Slightly less CPU drain than 60, and plus I feel it looks a little nicer.
  // Also I do not actually use any of these. Remember that the actual values
  // are attached to initialization.
) {
	requestAnimationFrame(() => {
		const parallax_element = document.getElementById(elementId);
		if (!parallax_element) return;

		let targetY = 0;
		let currentY = 0;

		const frameDuration = 1000 / fps;
		let lastTime = 0;

		const onScroll = () => {
			targetY = window.scrollY * speed;
		};

		const animate = (time: number) => {
			if (time - lastTime >= frameDuration) {
				currentY += (targetY - currentY) * smooth;
				parallax_element.style.backgroundPositionY = `${currentY}px`;
				lastTime = time;
			}
			requestAnimationFrame(animate);
		};

		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		requestAnimationFrame(animate);
	});
}
