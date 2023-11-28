let random = Math.random();
let num = parseInt(random * 10);

const Process = () => {
    if (parseInt(document.querySelector('input').value) === num) {
        document.querySelector('p').innerText = "Congrats!";
        random = Math.random();
        num = parseInt(random * 10);
    } else {
        document.querySelector('p').innerText = "You are a nigga, it was "+ num;
        random = Math.random();
        num = parseInt(random * 10);
    }
}