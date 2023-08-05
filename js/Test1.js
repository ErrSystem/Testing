const addZero = num => num <= 9 ? '0'+num : num.toString();
const changeHtml = () => {
    const date = new Date();
    const full = [date.getDate(), date.getMonth()+1, date.getFullYear(), date.getHours(), date.getMinutes(), date.getSeconds()];
    const newDay = full.slice(0,3).map(num => addZero(num)).join('/');
    const newTime = full.slice(3).map(num => addZero(num)).join(':');
    document.getElementById('p').innerHTML = `Current Date and Time: ${newDay.concat(' ', newTime)}`;
}
document.getElementById('p').innerHTML = 'Loading...';
setInterval(changeHtml, 100);