// variables
let scrollIndex = 0;
let cooldown = true;
let touchStart;
const sliderContener = document.querySelector('.slider');

// detectors
const wheelDetector = event => {
    let direction = event.deltaY;
    if (cooldown) {
        cooldown = false;
        if (direction == 100 && scrollIndex != 6) {
            scrollDown();
        } else if(direction == -100 && scrollIndex != 0){
            scrollUp();
        }
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }
    setTimeout(() => {
        cooldown = true;
    }, 1000);
}

const touchDetector = event => {
    let touchEnd = event.changedTouches[0].clientY;
    let target = event.target;
    console.log(target)
    if (cooldown){
        if (touchEnd < touchStart && scrollIndex != 3 && target.className != "downloadImgs" && target.className != 'fa-download') {
            scrollDown();
        } else if (touchEnd > touchStart && scrollIndex != 0 && target.className != "downloadImgs" && target.className != 'fa-download'){
            scrollUp();
        }
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }
    setTimeout(() => {
        cooldown = true;
    }, 500);
}

// functions
const scrollUp = () => {
    if (scrollIndex != 0) {
        const newSlide = sliderContener.children[scrollIndex-1];
        const currentSlide = sliderContener.children[scrollIndex];
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
        scrollIndex--;
        document.querySelector('body').style.overflow = 'hidden';
        document.querySelector('.mouseDown').style.opacity = '1';
    }
}

const scrollDown = () => {
    if (scrollIndex < sliderContener.children.length - 2) {
        const newSlide = sliderContener.children[scrollIndex+1];
        const currentSlide = sliderContener.children[scrollIndex];
        sliderContener.style.opacity = '0';
        setTimeout(() => {
            sliderContener.style.opacity = 0; 
            newSlide.className = `${newSlide.classList[0]}`;
            currentSlide.className = `${currentSlide.classList[0]} hidden`;
            sliderContener.style.opacity = 1; 
            setTimeout(() => {
                elementsFadeIn(newSlide);
                elementsFadeOut(currentSlide);
            }, 500);
        }, 250);
        scrollIndex++;
        // if (scrollIndex == 3){
        //     document.querySelector('footer').style.display = 'block';
        //     document.querySelector('body').style.overflow = 'scroll';
        //     document.querySelector('.scrollDown').style.opacity = '0';
        // }
    }
}


// animations
const elementsFadeIn = section => {
    sliderContener.style.opacity = 1;
    section.style.opacity = 1;
    Array.from(section.children).forEach(element => {
        element.style.display = 'block';
        element.style.opacity = 1;
    });
    section.children[1].children[0].style.paddingTop = '15vh';
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
window.addEventListener('wheel', wheelDetector);
window.addEventListener('touchstart', e => {
    touchStart = e.touches[0].clientY;
});
window.addEventListener('touchend', touchDetector);
document.querySelector('.mouseDown').addEventListener('click', scrollDown);

// animation when website is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        elementsFadeIn(document.querySelector('.welcomeSlide'));
    }, 1000);
})