const randomNumber = number => Math.random() * number;

const Ask = () => {
    let numberQuestion = prompt('choose a number');
    console.log(randomNumber(numberQuestion));
}

window.onload = Ask;