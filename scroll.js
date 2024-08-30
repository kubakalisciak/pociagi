function adjustAnimation() {
    const container = document.querySelector('.scroll-container');
    const text = document.querySelector('.scroll-text');
    const textWidth = text.offsetWidth;
    const containerWidth = container.offsetWidth;
    const duration = (textWidth / containerWidth) * 15;
    text.style.animationDuration = `${duration}s`;
}

window.addEventListener('load', adjustAnimation);
window.addEventListener('resize', adjustAnimation);