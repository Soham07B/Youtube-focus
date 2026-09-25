console.log("YouTube Focus is working!");

function hideRecommendations() {
    const videoGrid = document.querySelector("ytd-rich-grid-renderer");

    if (videoGrid) {
        videoGrid.style.display = "none";
    }
}

hideRecommendations();

const observer = new MutationObserver(() => {
    hideRecommendations();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});