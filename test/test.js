const consoleStyles = "Color: red; font-weight: 900; padding: 20px; text-shadow: 1px 1px 20px white";
const arr = [
    "Pizza",
    "Lasagne",
    "McDo"
]

const logWithStyle = (str) => {
    console.log(`%c${str}`, consoleStyles);
}


logWithStyle('hey');
console.table(arr)