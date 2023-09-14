const button = document.querySelector('.fa-images');
let galeryActive = false;

button.addEventListener('click', () => {
    if (!galeryActive){
        document.querySelector('.galeryContener').style.background = 'white';
        document.querySelector('.galeryContener').style.width = '93%';
        document.querySelector('.galeryContener').style.height = '86%';
        sliderContener.children[scrollIndex].style.filter = 'blur(5px)';
        document.querySelector('.mouseDown').style.filter = 'blur(5px)';
        button.style.color = 'black';
        button.className = "fa-solid fa-xmark";
        document.querySelector('.galery').style.display = 'block';
        setTimeout(() => {
            document.querySelector('.galery').style.opacity = '1';
        }, 500);
        setTimeout(() => {
            galeryActive = true;
        }, 1000);
    } else {
        document.querySelector('.galery').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.galery').style = '';
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