let array = ['fruits:', 'apple', 'banana'];
let array2 = ['vegetals:', 'potato', 'onion'];
let finalArray = array.concat('|', array2);
let verifyString = value => {
    if (typeof value == 'string'){
        return 'Wow thats a string!'
    }
    return `No bro thats a ${typeof value} not a string`;
}
console.log(verifyString(finalArray));