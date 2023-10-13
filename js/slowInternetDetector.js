let time = 0;
let stillCounting = true;

const addTimeToSpeedChecker = () => {
    if (stillCounting){
        time++;
    }
}

setInterval(addTimeToSpeedChecker(), 100);

document.querySelector('.welcomeSlide video').addEventListener('loadeddata', () => {
    if (stillCounting) {
        stillCounting = false;
        if (time >= 10) {
            document.querySelector('.warnWeakInternet').style.display = 'block';
            document.querySelector('.warnWeakInternet').style.opacity = '1';
        } else {
            document.querySelector('.warnWeakInternet').style.display = 'none';
            document.querySelector('.warnWeakInternet').style.opacity = '0';
        }
    }
    clearInterval(addTimeToSpeedChecker())
})