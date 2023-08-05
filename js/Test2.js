let originalNumber = prompt('number?');
let powerPrompt = prompt('power?');

let root = () => Math.sqrt(originalNumber).toFixed(2)
let power = () => Math.pow(originalNumber, powerPrompt).toFixed(2)
let random = () => (Math.random() * 1000).toFixed(2);

document.querySelector('p').innerHTML += `The square root of this number (${originalNumber}) is ${root()} and its power by ${powerPrompt} is ${power()}`;
document.querySelector('p').innerHTML += `<br> Here is a random number: ${random()}`;