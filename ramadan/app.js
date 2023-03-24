let time = document.getElementById("time");
let remainingTime;
let duration;
let today = new Date();
let iftar = { time: 0, hour: 19, minute: 28, day: 1 }

if (today.getHours() < 19 && today.getHours() > 5) {
    console.log(today);
    remainingTime = iftar.hour * 3600 + iftar.minute * 60;
    console.log(remainingTime)

    remainingTime -= (today.getHours() * 3600 + today.getMinutes() * 60);
    console.log(remainingTime);
    duration = setInterval(timerCountdown, 1000)

}
function timerCountdown() {
    let temp = remainingTime;
    let hours = Math.floor(remainingTime / 3600);
    temp -= (hours * 3600);
    let minutes = Math.floor(temp / 60);
    let seconds = remainingTime % 60;
    hours = hours < 10 ? ('0' + hours) : hours
    minutes = minutes < 10 ? ('0' + minutes) : minutes
    seconds = seconds < 10 ? ('0' + seconds) : seconds
    time.innerText = `${hours}:${minutes}:${seconds}`;
    remainingTime--;
}