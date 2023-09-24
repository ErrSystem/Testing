// vars
let mobile;
const backgrounds = [
    'Terrace',
    'Bedroom',
    'Kitchen',
    'Bathroom',
    'Gym'
];
// event listeners
document.addEventListener('DOMContentLoaded', () => isMobile());
window.addEventListener('resize', () => isMobile());
document.addEventListener('DOMContentLoaded', () => changeMobileBackgrounds());
window.addEventListener('resize', () => changeMobileBackgrounds());

// functions
const isMobile = () => {
    if (window.screen.width <= 600) {
        mobile = true;
    } else if (window.screen.width > 600) {
        mobile = false;
    }
}

const changeMobileBackgrounds = () => {
    if (mobile) { 
        for (let i = 0; i < backgrounds.length; i++) {
            document.getElementsByClassName('descSlide')[i].children[0].src = `css/imgs/${backgrounds[i]}/mobile/Background.jpg`;
        }
        document.querySelector('reservation').children[0].src = 'css/imgs/Reservation/mobile/Background.jpg';
    }
}