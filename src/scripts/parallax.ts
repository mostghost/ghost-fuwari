export function initParallax(elementId: string, speed: number = 0.5, smooth: number = 0.12) {
  requestAnimationFrame(() => {
    const parallax_element = document.getElementById(elementId);
    if (!parallax_element) return;

    let targetY = 0;
    let currentY = 0;
    let rafId: number;
    let isAnimating = false;

    const onScroll = () => {
      targetY = window.scrollY * speed;
      if (!isAnimating) {
        isAnimating = true;
        animate();
      }
    };

    const animate = () => {
      currentY += (targetY - currentY) * smooth;
      
      parallax_element.style.backgroundPositionY = `${currentY}px`;
      
      // Stop animating when close enough to target
      if (Math.abs(targetY - currentY) < 1) {
        isAnimating = false;
        return;
      }
      
      rafId = requestAnimationFrame(animate);
    };

    // Cleanup on scroll end/unload
    const cleanup = () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("beforeunload", cleanup);
    
    // Initial call
    onScroll();
  });
}
