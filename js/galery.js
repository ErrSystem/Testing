const button = document.querySelector('.fa-images');
let galeryActive = false;

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
        }, 500);
        setTimeout(() => {
            galeryActive = false;
        }, 1000);
    }
})