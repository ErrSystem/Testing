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
        document.querySelector('.galeryContener').style.overflow = 'hidden';
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
        }, 500);
        setTimeout(() => {
            galeryActive = false;
        }, 1000);
    }
})

// show galery func
const showGalery = element => {
    const room = element.innerText;
    document.querySelector('.galery h1').innerText = room;
    document.querySelector('.galery .main').src = `css/imgs/${room}/1.png`;
    const selectors = Array.from(document.querySelector('.galery ul').children);
    for (let i = 0; i < selectors.length; i++) {
        selectors[i].src = `css/imgs/${room}/${i}.png`;
    }
    document.querySelector('.galery').style.display = 'block';
    for (let i = 100; -48 < i; i--) {
        setTimeout(() => {
            document.querySelector('.galery').style.right = `${i}%`;
        }, 50);
    }
    setTimeout(() => {
        document.querySelector('.selectRoom').style.display = 'none';
        document.querySelector('.selectRoom').style.opacity = '0';
        document.querySelector('.galery').style.transition = 'none';
        document.querySelector('.galery').style.transform = 'initial';
        document.querySelector('.galery').style.position = 'initial';
        setTimeout(() => {
            document.querySelector('.galery .main').style.opacity = '1';
            document.querySelector('.galery ul').style.opacity = '1';
            document.querySelector('.galery ul').style.left = '48%';
            document.querySelector('.galery').style.transition = 'all ease 0.5s';
        }, 200);
    }, 1000);
}

// return to select menu
const returnSelect = () => {
    document.querySelector('.galery ul').style.opacity = '0';
    document.querySelector('.galery .main').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.galery').style = '';
        document.querySelector('.galery').style.right = '100%';
        document.querySelector('.galery').style.transition = 'none';
        document.querySelector('.galery').style.display = 'block';
        document.querySelector('.selectRoom').style.display = 'block';
        document.querySelector('.selectRoom').style.opacity = '1';
        setTimeout(() => {
            document.querySelector('.galery').style = '';
            document.querySelector('.galery .main').style = '';
            document.querySelector('.galery ul').style = '';
        }, 600);
    }, 500);

}

document.querySelector('.fa-angle-left').addEventListener('click', returnSelect);
