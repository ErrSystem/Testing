const array = [1,{age: 14, name: 'Adam'}, 3, true];
const verify = value => typeof value === 'number' ? console.log('yeah!') : console.log(`nope thats a ${typeof value}`);
window.onload = array.map(value => verify(value));