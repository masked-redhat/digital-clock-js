const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const dayNight = document.getElementById('dayNight');
const date = document.getElementById('date');
const month = document.getElementById('month');
const year = document.getElementById('year');

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const updateTime = () => {
    let currentTime = new Date();
    let hourN = currentTime.getHours();
    let minuteN = currentTime.getMinutes();
    let secondN = currentTime.getSeconds();
    hour.innerText = hourN > 12 ? '0' + (hourN - 12) : hourN;
    minute.innerText = minuteN < 10 ? '0' + minuteN : minuteN;
    second.innerText = secondN < 10 ? '0' + secondN : secondN;
    dayNight.innerText = hourN > 12 ? 'PM' : 'AM';
    date.innerText = currentTime.getDate();
    month.innerText = MONTHS[currentTime.getMonth()];
    year.innerText = currentTime.getFullYear();
}

updateTime();
setInterval(() => {
    updateTime();
}, 1000);