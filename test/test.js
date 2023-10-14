const consoleStyles = "Color: red; font-weight: 900; padding: 20px; text-shadow: 1px 1px 20px white; background: black";
const arr = [
    "Pizza",
    "Lasagne",
    "McDo"
]
const age = 19;

const logWithStyle = (str) => {
    console.log(`%c${str}`, consoleStyles);
}

const agestr = age >= 18 ? "Old nigga" : "Young nigga";


logWithStyle(agestr);
console.table(arr);