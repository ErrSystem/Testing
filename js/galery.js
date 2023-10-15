const button = document.querySelector('.fa-images');
let galeryActive = false;
Array.from(document.getElementsByClassName('galeryLink')).forEach(element => element.addEventListener('click', function(){showGalery(this)}));

// Open / Close animation
button.addEventListener('click', () => {
    if (!galeryActive){
        document.querySelector('.galeryContener').style.background = 'white';
        if (window.screen.width > 1024){
            document.querySelector('.galeryContener').style.width = '93%';
            document.querySelector('.galeryContener').style.height = '86%';
        } else if (window.screen.width <= 1280 && window.screen.width > 1024) {
            document.querySelector('.galeryContener').style.width = '96%';
            document.querySelector('.galeryContener').style.height = '88%';
        }  
        else if (window.screen.width <= 1024 && window.screen.width > 770) {
            document.querySelector('.galeryContener').style.width = '89%';
            document.querySelector('.galeryContener').style.height = '80%';
        } else if (window.screen.width <= 770 && window.screen.width > 600) {
            document.querySelector('.galeryContener').style.width = '97%';
            document.querySelector('.galeryContener').style.height = '80%';
        } else if (window.screen.width <= 600) {
            document.querySelector('.galeryContener').style.width = '97%';
            document.querySelector('.galeryContener').style.height = '89%';
        }
        sliderContener.children[scrollIndex].style.filter = 'blur(5px)';
        document.querySelector('.mouseDown').style.filter = 'blur(5px)';
        document.querySelector('.galeryContener').style.overflowX = 'hidden';
        button.style.color = 'black';
        button.className = "fa-solid fa-xmark";
        document.querySelector('.selectRoom').style.display = 'block';
        document.querySelector('.fa-dollar-sign').style.display = 'none';
        setTimeout(() => {
            document.querySelector('.selectRoom').style.opacity = '1';
        }, 500);
        setTimeout(() => {
            galeryActive = true;
        }, 1000);
    } else {
        document.querySelector('.galery').style.opacity = '0';
        document.querySelector('.selectRoom').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.fa-dollar-sign').style.display = 'block';
            document.querySelector('.galery').style = '';
            document.querySelector('.selectRoom').style = '';
            document.querySelector('.galeryContener').style = '';
            document.querySelector('.mouseDown').style.filter = '';
            sliderContener.children[scrollIndex].style.filter = '';
            button.style.color = 'white';
            button.className = "fa-solid fa-images";
            document.querySelector('.selectRoom').style = '';
            document.querySelector('.galery').style = '';
            document.querySelector('.galery .main').style = '';
            document.querySelector('.galery ul').style = '';
            document.querySelector('.fa-expand').style = '';
            document.querySelector('.galery ul li .selected').classList.value = '';
        }, 500);
        setTimeout(() => {
            galeryActive = false;
        }, 1000);
    }
})

// show galery func
const showGalery = element => {
    const room = element.innerText;
    customSelectorsPos();
    resizeIconPos();
    document.querySelector('.galery h1').innerText = room;
    if (mobile) {
        document.querySelector('.galery .main').src = `css/imgs/${room}/mobile/0.png`;
    } else if (!mobile) {
        document.querySelector('.galery .main').src = `css/imgs/${room}/0.png`;
    }
    resizeFunc();
    const selectors = Array.from(document.querySelector('.galery ul').children);
    for (let i = 0; i < selectors.length; i++) {
        selectors[i].src = `css/imgs/${room}/min/${i}.png`;
        selectors[i].addEventListener('click', () => selectorsFunc(selectors[i], room));
        if (i == 0){
            selectors[0].firstChild.classList.value = 'selected';
        }
    }
    document.querySelector('.galery').style.display = 'block';
    for (let i = 100; -48 < i; i--) {
        setTimeout(() => {
            document.querySelector('.galery').style.right = `${i}%`;
        }, 100);
    }
    setTimeout(() => {
        document.querySelector('.selectRoom').style.display = 'none';
        document.querySelector('.galery').style.transition = 'none';
        document.querySelector('.galery').style.transform = 'initial';
        document.querySelector('.galery').style.position = 'initial';
        setTimeout(() => {
            document.querySelector('.galery .main').style.opacity = '1';
            document.querySelector('.fa-expand').style.opacity = '1';
            document.querySelector('.galery ul').style.opacity = '1';
            document.querySelector('.galery ul').style.left = '48%';
            document.querySelector('.galery').style.transition = 'all ease 0.5s';
        }, 200);
    }, 1000);
}

// selectors func
const selectorsFunc = (element, room) => {
    if (mobile) {
        document.querySelector('.galery .main').src = `css/imgs/${room}/mobile/${Array.from(document.querySelector('.galery ul').children).indexOf(element)}.png`;
    } else if (!mobile) {
        document.querySelector('.galery .main').src = `css/imgs/${room}/${Array.from(document.querySelector('.galery ul').children).indexOf(element)}.png`;
    }
    document.querySelector('.galery ul .selected').classList.value = '';
    element.firstChild.classList.value = 'selected';
    resizeFunc();
} 

// return to select menu
const returnSelect = () => {
    document.querySelector('.galery ul').style.opacity = '0';
    document.querySelector('.fa-expand').style.opacity = '0';
    document.querySelector('.galery .main').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.galery').style.transition = 'none';
        document.querySelector('.galery').style.position = 'absolute';
        document.querySelector('.galery').style.transform = 'translate(-50%, -50%)';
        setTimeout(() => {
            document.querySelector('.galery').style.transition = 'all ease 0.8s';
            document.querySelector('.selectRoom').style.display = 'block';
            for (let i = -48; 100 > i; i++) {
                setTimeout(() => {
                    document.querySelector('.galery').style.right = `${i}%`;
                }, 100);
            }
        }, 100);
        setTimeout(() => {
            document.querySelector('.galery').style.transition = 'none';
            document.querySelector('.galery').style = '';
            document.querySelector('.galery .main').style = '';
            document.querySelector('.fa-expand').style = '';
            document.querySelector('.galery ul').style = '';
            document.querySelector('.galery ul li .selected').classList.value = '';
        }, 1000);
    }, 500);

}

// resize function
const resizeFunc = () => {
    const src = document.querySelector('.main').src;
    document.querySelector('.fa-expand').setAttribute('href', src);
}

// make the selectors dynamic 
const customSelectorsPos = () => {
    const imgPos = document.querySelector('body').getBoundingClientRect().height / 2;
    const bottomOfImg = 550 / 2;
    document.querySelector('.galery ul').style.top = imgPos + bottomOfImg + 'px';
}

// make the resize icon dynamic
const resizeIconPos = () => {
    // right
    const imgWidthPX = getComputedStyle(document.querySelector('.main')).width;
    const imgWidth = parseInt(imgWidthPX.slice(0, imgWidthPX.indexOf('px')));
    const windowWidth = document.querySelector('body').getBoundingClientRect().width;
    const rightPos = (((windowWidth - imgWidth) / 2) + 20) + 'px';
    document.querySelector('.fa-expand').style.right = rightPos;
    // top
    const imgHeightPX = getComputedStyle(document.querySelector('.main')).height;
    const imgHeight = parseInt(imgHeightPX.slice(0, imgHeightPX.indexOf('px')));
    const windowHeight = document.querySelector('body').getBoundingClientRect().height;
    const topPos = (((windowHeight - imgHeight) / 2) - 30) + 'px';
    document.querySelector('.fa-expand').style.top = topPos;
}

document.querySelector('.fa-angle-left').addEventListener('click', returnSelect);
window.addEventListener('resize', () => customSelectorsPos());
window.addEventListener('resize', () => resizeIconPos());