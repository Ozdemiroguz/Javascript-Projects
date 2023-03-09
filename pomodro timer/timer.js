//timer element
let timer = document.getElementById("timer");
let settings = document.getElementById("settings");
let timerMenu = document.getElementById("timerMenu")
let timerMenuTemp = 0;
let settingsData = { pomodro: 30, short: 5, long: 10, volume: 50, alert: "Alarm Kebakaran", finish: false, auto: false }
let time = 1800;
let timerScreen = document.getElementById("timeScreen");
let pauseReset = document.getElementById("pauseReset")
let duration;
let startButton = document.getElementById("startButton");
let playPause = document.getElementById("playPause");
let resetButton = document.getElementById("resetButton")

//timer event 
startButton.addEventListener("click", timerStart);
playPause.addEventListener("click", timerPause);
resetButton.addEventListener("click", timerReset);
//taskqueto element
let taskQueto = document.getElementById("taskQueto")
let taskQuetoMenuTemp = 0;
let taskList = document.getElementById("taskList");
let motivationQueto = document.getElementById("motivationQueto");
let taskQuetoMenu = document.getElementById("taskQuetoMenu");
let spotify = document.getElementById("spotify");

quetoAnimate()
console.log(timerMenu.children[0]);
for (let index = 0; index < 4; index++) {
    console.log("z")
}
function addTask(e) {
    console.log("x");
    e.preventDefault()
}
// Wrap every letter in a span
function quetoAnimate() {
    var textWrapper = document.querySelector('.ml3');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: true })
        .add({
            targets: '.ml3 .letter',
            opacity: [0, 1],
            easing: "easeInOutQuad",
            duration: 2250,
            delay: (el, i) => 150 * (i + 1)
        }).add({
            targets: '.ml3',
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 10000
        });
}
function getMenuScreenTime(index) {
    timerMenu.children[timerMenuTemp].children[1].style.width = "0"
    timerMenu.children[index].children[1].style.width = "100%"
    timerMenuTemp = index;

    if (index == 0) {
        time = settingsData.pomodro * 60
        settingsData.pomodro < 10 ? timerScreen.innerText = `0${settingsData.pomodro}:00` : timerScreen.innerText = `${settingsData.pomodro}:00`
        timer.style.display = "flex";
        settings.style.display = "none";


    } if (index == 1) {
        time = settingsData.short * 60
        settingsData.short < 10 ? timerScreen.innerText = `0${settingsData.short}:00` : timerScreen.innerText = `${settingsData.short}:00`
        timer.style.display = "flex";
        settings.style.display = "none";


    } if (index == 2) {
        time = settingsData.long * 60
        settingsData.long < 10 ? timerScreen.innerText = `0${settingsData.long}:00` : timerScreen.innerText = `${settingsData.long}:00`
        timer.style.display = "flex";
        settings.style.display = "none";


    } if (index == 3) {
        timer.style.display = "none";
        settings.style.display = "block";

    }
}
function getMenuScreenTaskQueto(index) {
    taskQuetoMenu.children[index].children[1].style.width = "100%"
    taskQuetoMenu.children[taskQuetoMenuTemp].children[1].style.width = "0"
    taskQuetoMenuTemp = index;
    if (index == 0) {
        taskList.style.display = "flex"
        motivationQueto.style.display = "none";
        spotify.style.display = "none"
    } if (index == 1) {
        taskList.style.display = "none"
        motivationQueto.style.display = "flex";
        spotify.style.display = "none"
    } if (index == 2) {
        taskList.style.display = "none"
        motivationQueto.style.display = "none";
        spotify.style.display = "flex"
    }
}
function timerStart() {
    startButton.style.display = "none"
    pauseReset.style.display = "flex"
    for (let i = 0; i < 4; i++) {
        timerMenu.children[i].disabled = true;
    }
    duration = setInterval(timerCountdown, 1000);
    timer.children[0].children[1].style.display = "block";

}
function timerReset() {
    getMenuScreenTime(timerMenuTemp)
    startButton.style.display = "flex"
    pauseReset.style.display = "none"
    timer.children[0].children[1].style.display = "none";

    clearInterval(duration)
    for (let i = 0; i < 4; i++) {
        timerMenu.children[i].disabled = false;
    }
}
function timerPause() {
    clearInterval(duration);
    playPause.className == "bx bx-pause" ? (playPause.className = "bx bx-play", clearInterval(duration))
        : (playPause.className = "bx bx-pause", duration = setInterval(timerCountdown, 1000))
}
function timerCountdown() {

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    minutes = minutes < 10 ? ('0' + minutes) : minutes
    seconds = seconds < 10 ? ('0' + seconds) : seconds
    timerScreen.innerText = `${minutes}:${seconds}`;
    time--;
}
function getSetting() {
    settingsData.pomodro = parseInt(document.getElementById("pomodro").value);
    settingsData.short = parseInt(document.getElementById("short").value);
    settingsData.long = parseInt(document.getElementById("long").value);
    settingsData.volume = parseInt(document.getElementById("volumeInput").value);
    settingsData.alert = document.getElementById("alerts").value;
    settingsData.finish = document.getElementById("switch").checked
    settingsData.auto = document.getElementById("switch1").checked
    console.log(settingsData)

}