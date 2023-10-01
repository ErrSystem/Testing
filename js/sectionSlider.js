// variables
let scrollIndex = 0;
let cooldown = true;
let reserveButton = true;
let touchStart;
let originalTextTerrace = document.querySelector('.descSlide .content p').textContent;
const sliderContener = document.querySelector('.slider');

// detectors
const wheelDetector = event => {
    cooldown = false;
    let direction = Math.sign(event.deltaY);
    if (direction == 1 && scrollIndex != 6 && !galeryActive) {
        scrollDown();
    } else if(direction == -1 && scrollIndex != 0 && !galeryActive){
        scrollUp();
    }
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    setTimeout(() => {
        cooldown = true;
    }, 1500);
}

const touchDetector = event => {
    if (cooldown) {
        let CurrentY = event.changedTouches[0].clientY;
        let direction = CurrentY > touchStart ? "up" : "down";
        if (direction == 'down' && scrollIndex != sliderContener.children.length - 4 && !galeryActive) {
            scrollDown();
            cooldown = false;
        } else if (direction == 'up' && scrollIndex != 0 && !galeryActive){
            scrollUp();
            cooldown = false;
        }
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }
}

// functions
const scrollUp = (isButton) => {
    if (scrollIndex != 0) {
        const currentSlide = sliderContener.children[scrollIndex];
        let newSlide;
        if (scrollIndex == '1part2') {
            newSlide = sliderContener.children[scrollIndex-1];
            scrollIndex = 1;
            document.querySelector('#Terrace .content p').style.opacity = '0';
            setTimeout(() => {
                document.querySelector('.descSlide .content p').textContent = originalTextTerrace;
                document.querySelector('.descSlide .content video').style = '';
                document.querySelector('.descSlide .content h2').style.marginBottom = '45px';
                setTimeout(() => {
                    document.querySelector('.descSlide .content h2').style.marginBottom = '60px';
                    document.querySelector('.descSlide .content p').style.opacity = '1';
                }, 500);
            }, 500);
        } 
        else {
            scrollIndex--;
            newSlide = sliderContener.children[scrollIndex];
            if (isButton === true) {
                newSlide = sliderContener.children[0];
                scrollIndex = 0;
            }
            else if (scrollIndex == 5) {
                document.querySelector('.mouseDown').removeEventListener('click', scrollToStart);
                document.querySelector('.mouseDown').addEventListener('click', scrollDown);
                document.querySelector('.fa-arrow-up').classList.value = 'fa-solid fa-arrow-down';
            }
            sliderContener.style.opacity = '0';
            setTimeout(() => {
                newSlide.className = `${newSlide.classList[0]}`;
                currentSlide.className = `${currentSlide.classList[0]} hidden`;
                sliderContener.style.opacity = 0; 
                sliderContener.style.animation = 'fadeIn 0.5s';
                setTimeout(() => {
                    elementsFadeIn(newSlide);
                    elementsFadeOut(currentSlide);
                }, 500);
            }, 250);
            document.querySelector('body').style.overflow = 'hidden';
            document.querySelector('.mouseDown').style.opacity = '1';
            reserveButton = true;
        }
    }
}

const scrollDown = (isReserve) => {
    if (scrollIndex < sliderContener.children.length - 3 || scrollIndex == '1part2') {
        let currentSlide = sliderContener.children[scrollIndex];
        let newSlide;
        if (scrollIndex == 1) {
            newSlide = sliderContener.children[scrollIndex];
            scrollIndex = '1part2';
            document.querySelector('#Terrace .content p').style.opacity = '0';
            setTimeout(() => {
                document.querySelector('.descSlide .content p').textContent = "text text text can be like 'Beautiful and peaceful, wether during the day or at night, what better way to spend a pleasant holiday?'";
                document.querySelector('.descSlide .content video').style.display = 'block';
                document.querySelector('.descSlide .content h2').style.marginBottom = '45px';
                setTimeout(() => {
                    document.querySelector('.descSlide .content h2').style.marginBottom = '60px';
                    document.querySelector('.descSlide .content p').style.opacity = '1';
                    document.querySelector('.descSlide .content video').style.opacity = '1';
                }, 500);
            }, 500);
        } else {
            if (isReserve === true) {
                newSlide = sliderContener.children[6];
                if (scrollIndex == '1part2') {
                    currentSlide = sliderContener.children[1];
                }
                scrollIndex = 6;
            }
            else if (scrollIndex == '1part2') {
                scrollIndex = 2;
                currentSlide = sliderContener.children[scrollIndex-1]
                newSlide = sliderContener.children[scrollIndex];
                setTimeout(() => {
                    document.querySelector('.descSlide .content p').textContent = originalTextTerrace;
                }, 500);
            } else {
                newSlide = sliderContener.children[scrollIndex+1];
                scrollIndex++;
            }
            sliderContener.style.opacity = '0';
            setTimeout(() => {
                sliderContener.style.opacity = '0'; 
                newSlide.className = `${newSlide.classList[0]}`;
                currentSlide.classList.value = `${currentSlide.classList[0]} hidden`;
                sliderContener.style.opacity = '1'; 
                setTimeout(() => {
                    elementsFadeIn(newSlide);
                    elementsFadeOut(currentSlide);
                }, 500);
            }, 250);
            if (scrollIndex == sliderContener.children.length - 4){
                document.querySelector('.fa-arrow-down').classList.value = 'fa-solid fa-arrow-up';
                document.querySelector('.mouseDown').removeEventListener('click', scrollDown);
                document.querySelector('.mouseDown').addEventListener('click', scrollToStart);
            }
        }
    }

}

// scroll up button func
const scrollToStart = () => {
    document.querySelector('.fa-arrow-up').classList.value = 'fa-solid fa-arrow-down';
    scrollUp(true);
    document.querySelector('.mouseDown').removeEventListener('click', scrollToStart);
    document.querySelector('.mouseDown').addEventListener('click', scrollDown);
}

// animations
const elementsFadeIn = section => {
    sliderContener.style.opacity = 1;
    section.style.opacity = 1;
    Array.from(section.children).forEach(element => {
        element.style.display = 'block';
        element.style.opacity = 1;
    });
    if (mobile) {
        section.children[1].children[0].style.paddingTop = '10vh';
    } else if (!mobile) {
        section.children[1].children[0].style.paddingTop = '15vh';
    }
    section.children[1].children[0].style.marginBottom = '60px';
}

const elementsFadeOut = section => {
    section.style = '';
    Array.from(section.children).forEach(element => {
        element.setAttribute('style', '');
    })
    Array.from(section.children[1].children).forEach(element => {
        element.setAttribute('style', '');
    })
}
// event listeners
window.addEventListener('wheel', event => {
    if (cooldown) {
        wheelDetector(event);
        cooldown = false;
    }
});
window.addEventListener('touchstart', e => {
    if (cooldown) {
        touchStart = e.touches[0].clientY
    }
});
window.addEventListener('touchmove', touchDetector);
window.addEventListener('touchend', () => {
    setTimeout(() => {
        cooldown = true;
    }, 500);
});
document.querySelector('.mouseDown').addEventListener('click', scrollDown);
document.querySelector('.fa-dollar-sign').addEventListener('click', () => {
    if (reserveButton === true && scrollIndex != sliderContener.children.length - 4) {
        scrollDown(true);
        reserveButton = false;
    }
})
document.addEventListener('DOMContentLoaded', () => {
    // check internet speed
    console.log(document.querySelector('.welcomeSlide video').loaded);
    setTimeout(() => {
        if (!document.querySelector('.welcomeSlide video').loaded) {
            document.querySelector('.warnWeakInternet').style.display = 'block';
            document.querySelector('.warnWeakInternet').style.opacity = '1';
        }
    }, 2000);
    // animation when website is loaded
    setTimeout(() => {
        elementsFadeIn(document.querySelector('.welcomeSlide'));
    }, 1000);
})