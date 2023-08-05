const addZero = num => num <= 9 ? '0'+num : num.toString();
const changeHtml = () => {
    const date = new Date();
    let fullTime = [date.getDate(), date.getMonth()+1, date.getFullYear(), date.getHours(), date.getMinutes(), date.getSeconds()];
    const modifiedDate = fullTime.slice(0, 3).map(num => addZero(num)).join('/');
    const modifiedTime = fullTime.slice(3).map(num => addZero(num)).join(':');
    document.getElementById('p').innerHTML = `Current Time: ${modifiedDate} ${modifiedTime}`;
}
document.getElementById('p').innerHTML = `Loading...`;
setInterval(changeHtml, 100);