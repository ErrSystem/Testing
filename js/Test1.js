let addZero = numbers => {
    for (let i = 0; numbers.length >= i; i++){
        if(numbers[i] < 10 && i <= 3){
            numbers[i] = '0'+numbers[i];
        }
        else if(i == numbers.length){
            return numbers;
        }
    }
}
const Getdate = () => {
    let date = new Date();
    let day = addZero([date.getFullYear(), date.getMonth()+1, date.getDate()]);
    let time = addZero([date.getHours(), date.getMinutes(), date.getSeconds()]);
    document.getElementById('p').innerHTML = `Current Date: ${day.join('/')} ${time.join(':')}`;
}
document.getElementById('p').innerHTML =  'Loading...';
setInterval(Getdate, 1000);