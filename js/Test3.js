let num = prompt('write a number');
function isEven () {
  if (num % 2 === 0){
    return true;
  }
  return false;
}
console.log(isEven())