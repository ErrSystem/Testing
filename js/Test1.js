let addZero = num => {
    if(num < 10){
       num = '0'+num;
    }
    return num;
}
const Getdate = () => {
    let date = new Date();
    let day = [date.getDate(), date.getMonth()+1, date.getFullYear()];
    let time = [date.getHours(), date.getMinutes(), date.getSeconds()];
    document.getElementById('p').innerHTML = `Current Date: ${day.map(element => addZero(element)).join('/')} ${time.map(element => addZero(element)).join(':')}`;
}

document.getElementById('p').innerHTML =  'Loading...';
setInterval(Getdate, 500);