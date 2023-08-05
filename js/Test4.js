let email = 'errsys@gmail.com';
let array = Array.from(email);
console.log(array.some(value => value == '@') && array.some(value => value == '.'));
// or console.log(array.includes('@') && array.includes('.')); thats more simple but wanted to test .some()