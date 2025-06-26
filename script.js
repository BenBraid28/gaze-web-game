let hoverTimer = null;
const hoverDelay = 3000; // 3 seconds

document.querySelectorAll('.grid-img').forEach(img => {
    img.addEventListener('mouseenter', () => {
        img.classList.add('hovered');
        hoverTimer = setTimeout(() => {
            triggerAction(img.dataset.label);
        }, hoverDelay);
    });

    img.addEventListener('mouseleave', () => {
        img.classList.remove('hovered');
        clearTimeout(hoverTimer);
    });
});

function triggerAction(label) {
    console.log("Selected:", label);
    if (label === "Opera") {
        const video = document.getElementById("video-player");
        video.hidden = false;
        video.play();
        video.onended = () => {
            video.hidden = true;
        };
    }
}
