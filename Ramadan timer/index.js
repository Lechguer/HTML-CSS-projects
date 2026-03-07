const daysRm = document.getElementById("days")
const hoursRm = document.getElementById("hours")
const minutesRm = document.getElementById("minutes")
const secondsRm = document.getElementById("seconds")

const RamadanDay = '07 Febrary 2027';

function CountDown(){
    const RamandanDate = new Date(RamadanDay)
    const currentDate = new Date();
    const diff = RamandanDate - currentDate

    const totalSeconds = diff / 1000;
    // const time = new Date(diff);
    
    const days = Math.floor(totalSeconds / 3600 / 24);
    
    const hours = Math.floor(totalSeconds / 3600) % 24;
    // const hours1 = time.getHours();
    
    const minutes = Math.floor(totalSeconds / 60) % 60;
    // const minutes1 = time.getMinutes();
    
    const seconds = Math.floor(totalSeconds) % 60;
    // const seconds1 = time.getSeconds();

    daysRm.innerHTML = days;
    hoursRm.innerHTML = formatTime(hours);
    minutesRm.innerHTML = formatTime(minutes);
    secondsRm.innerHTML = formatTime(seconds);

}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

CountDown()

setInterval(CountDown,1000)