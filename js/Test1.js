let addZero = (...nums) => {
    for (let num of nums){
        if(num < 10){
            nums[nums.indexOf(num)] = '0'+num;
        }
    }
    if (nums[nums.length - 1] > 60){
        return nums.join('/');
    }
    return nums.join(':');
}
const Getdate = () => {
    let date = new Date();
    let day = [date.getDate(), date.getMonth()+1, date.getFullYear()];
    let time = [date.getHours(), date.getMinutes(), date.getSeconds()];
    document.getElementById('p').innerHTML = `Current Date: ${addZero(...day)} ${addZero(...time)}`;
}
document.getElementById('p').innerHTML =  'Loading...';
setInterval(Getdate, 500);