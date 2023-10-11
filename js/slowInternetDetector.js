let time = 0;
let stillCounting = true;

setInterval(() => {
    if (stillCounting === true){
        time++;
    }
}, 100);

document.querySelector('.welcomeSlide video').addEventListener('loadeddata', () => {
    console.log(time)
    stillCounting = false;
    if (time >= 10) {
        document.querySelector('.warnWeakInternet').style.display = 'block';
        document.querySelector('.warnWeakInternet').style.opacity = '1';
    }
})