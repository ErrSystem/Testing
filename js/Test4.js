let email = 'errsys@gmail.com';
let array = Array.from(email);
console.log(array.some(value => value == '@') && array.some(value => value == '.'));
/* Or we can use:
    let email = 'errsys@gmail.com';
    console.log(email.includes('@') && email.includes('.')); 
thats more simple but wanted to test .some() */