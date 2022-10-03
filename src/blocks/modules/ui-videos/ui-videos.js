const uiVideoComponents = document.querySelectorAll("[data-component='uiVideos']");
const defaultIframeScr = "https://www.youtube.com/embed/";

document.addEventListener('DOMContentLoaded', function () {
    uiVideoComponents.forEach((uiVideo) => {
        const uiVideoMainIframeWrapper = uiVideo.querySelector('.ui-videos__main-video');
        const uiVideoMainIframe = uiVideo.querySelector('.ui-videos__main-video-iframe');
        const videos = uiVideo.querySelectorAll('.ui-videos__item');
        try {
            videos.forEach(video => {
                video.addEventListener('click', function () {
                    let currentVideoId = video.dataset.videoId;
                    if (!currentVideoId) return false;
                    uiVideoMainIframe.src = `${defaultIframeScr}${currentVideoId}`;
                });
            });
        } catch (error) {
            console.log(error);
        }
    });
});
