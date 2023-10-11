let time = 0;
let stillCounting = true;

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

document.querySelector('.welcomeSlide video').addEventListener('onload', () => {
    stillCounting = false;
    if (time > 1000) {
        document.querySelector('.warnWeakInternet').style.display = 'block';
        document.querySelector('.warnWeakInternet').style.opacity = '1';
    }
})