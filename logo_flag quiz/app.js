
let next_new = document.getElementById("next/new")
let cards = document.getElementById("cards")
let timer = document.getElementById("timer");
let gameStarting = document.getElementById("gameStarting");
let quizScreen = document.getElementById("quizScreen");
let quizScstartingScreenreen = document.getElementById("startingScreen");
let choices = document.getElementById("choices");
document.getElementById("flagStart").addEventListener("click", start);
next_new.addEventListener("click", setChoices);

let time = 11;

let datas;
let score = 0;
let correctAnswer;
let correctChoice;
const startingMinutes = 1;
function quizCountdown(timeScreen) {

    if (time == 10)
        timer.style.color = "red"

    if (time == 0) {
        clearInterval(myInterval)

    }
    console.log(time)
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? ('0' + seconds) : seconds
    timeScreen.children[1].innerText = `${minutes}:${seconds}`;
    time--;
    (time % 2 == 0) ? timeScreen.children[0].className = "bx bxs-hourglass-bottom" : timeScreen.children[0].className = "bx bxs-hourglass-top"

}
function startCountdown() {
    if (time == 0) {
        clearInterval(myInterval)
        startQuiz();
    }
    gameStarting.children[1].innerText = time;
    time--;
}

function start(e) {
    console.log(e.target.innerText)
    cards.style.display = "none";
    startingScreen.style.display = "flex";
    time = 0;
    myInterval = setInterval(startCountdown, 1000)
    getJSONFile();

}
function startQuiz() {
    gameStarting.style.display = "none";
    quizScreen.style.display = "flex";

    for (let i = 0; i < 4; i++) {
        choices.children[i].addEventListener("click", checkAnswer)
    }
    setChoices();


}
function setChoices() {
    time = 15;
    timer.style.color = "white"
    next_new.style.visibility = "hidden"

    myInterval = setInterval(quizCountdown, 1000, timer)
    correctChoice = Math.floor(Math.random() * 4);
    let indexs = [];
    while (indexs.length < 4) {
        indexs.push(Math.floor(Math.random() * datas.length))
        indexs = Array.from(new Set(indexs));
    }
    console.log(indexs);
    for (let i = 0; i < 4; i++) {
        let index = indexs[i];
        if (i == correctChoice) {
            correctAnswer = datas[index];
            choices.children[i].innerHTML = correctAnswer.country_name;
            choices.children[i].disabled = false
            choices.children[i].style.backgroundColor = "transparent"
            document.getElementById("quizImage").src = correctAnswer.country_logo;


        }
        else {
            console.log(index);
            console.log(datas[index]);
            choices.children[i].innerHTML = datas[index].country_name;
            choices.children[i].disabled = false
            choices.children[i].style.backgroundColor = "transparent"

        }
    }
    datas.splice(indexs[correctChoice], 1);

}
function getJSONFile() {
    fetch("countries.json").then(function (response) {
        return response.json()
    }).then(function (data) {
        datas = data;

        //document.getElementById("screen").innerText += data;
    }).catch(function (err) {
        console.log(err);
    })
}
function checkAnswer(e) {
    console.log(e.target);
    for (let i = 0; i < 4; i++) {
        choices.children[i].disabled = true
    }
    if (e.target.innerText == correctAnswer.country_name) {
        e.target.style.backgroundColor = "green";
        clearInterval(myInterval)
        next_new.style.visibility = "visible"

    }
    else {
        e.target.style.backgroundColor = "red";
        choices.children[correctChoice].style.backgroundColor = "green";
        clearInterval(myInterval)

        next_new.style.visibility = "visible"

    }
}