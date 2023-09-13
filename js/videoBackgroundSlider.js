const video = document.querySelector('video');
let currentVideo = 0;
const videoList = [
    'css/videos/video1.mp4',
    'css/videos/video2.mp4',
    'css/videos/video3.mp4',
    'css/videos/video4.mp4'
];

setInterval(() => {
    if (currentVideo + 1 == videoList.length){
        currentVideo = 0;
    } else {
        currentVideo++;
    }
    video.style.opacity = 0;
    video.src = videoList[currentVideo];
    setTimeout(() => {
        video.style.opacity = 1;
    }, 250);
}, 6000);