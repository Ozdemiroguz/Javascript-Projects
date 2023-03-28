const deck = [
    { type: "♣️", name: "A", price: 11 }, { type: "♦️", name: "A", price: 11 }, { type: "♥️", name: "A", price: 11 }, { type: "♠️", name: "A", price: 11 },
    { type: "♣️", name: "2", price: 2 }, { type: "♦️", name: "2", price: 2 }, { type: "♥️", name: "2", price: 2 }, { type: "♠️", name: "2", price: 2 },
    { type: "♣️", name: "3", price: 3 }, { type: "♦️", name: "3", price: 3 }, { type: "♥️", name: "3", price: 3 }, { type: "♠️", name: "3", price: 3 },
    { type: "♣️", name: "4", price: 4 }, { type: "♦️", name: "4", price: 4 }, { type: "♥️", name: "4", price: 4 }, { type: "♠️", name: "4", price: 4 },
    { type: "♣️", name: "5", price: 5 }, { type: "♦️", name: "5", price: 5 }, { type: "♥️", name: "5", price: 5 }, { type: "♠️", name: "5", price: 5 },
    { type: "♣️", name: "6", price: 6 }, { type: "♦️", name: "6", price: 6 }, { type: "♥️", name: "6", price: 6 }, { type: "♠️", name: "6", price: 6 },
    { type: "♣️", name: "7", price: 7 }, { type: "♦️", name: "7", price: 7 }, { type: "♥️", name: "7", price: 7 }, { type: "♠️", name: "7", price: 7 },
    { type: "♣️", name: "8", price: 8 }, { type: "♦️", name: "8", price: 8 }, { type: "♥️", name: "8", price: 8 }, { type: "♠️", name: "8", price: 8 },
    { type: "♣️", name: "9", price: 9 }, { type: "♦️", name: "9", price: 9 }, { type: "♥️", name: "9", price: 9 }, { type: "♠️", name: "9", price: 9 },
    { type: "♣️", name: "10", price: 10 }, { type: "♦️", name: "10", price: 10 }, { type: "♥️", name: "10", price: 10 }, { type: "♠️", name: "10", price: 10 },
    { type: "♣️", name: "J", price: 10 }, { type: "♦️", name: "J", price: 10 }, { type: "♥️", name: "J", price: 10 }, { type: "♠️", name: "J", price: 10 },
    { type: "♣️", name: "Q", price: 10 }, { type: "♦️", name: "Q", price: 10 }, { type: "♥️", name: "Q", price: 10 }, { type: "♠️", name: "Q", price: 10 },
    { type: "♣️", name: "K", price: 10 }, { type: "♦️", name: "K", price: 10 }, { type: "♥️", name: "K", price: 10 }, { type: "♠️", name: "K", price: 10 },
];
let deckarr = deck.concat(deck)
function shuffle(deck) {

    for (let i = 0; i < 500; i++) {
        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let tmp = deck[location1];
        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
}
shuffle(deckarr);
let temp;
let dx = 450;
screen.width < 700 ? dx = 180 : 200;
let x = 450;
screen.width < 700 ? x = 180 : 200;





let betArray = [];
let cardArray = [];
let dealer = { score: 0, cards: [], cardN: 0, cardsTemp: [] }
let player = [
    { cardN: 0, cards: [], cardsTemp: [], score: 0, money: 2000, bet: 0 },
    { cardN: 0, cards: [], cardsTemp: [], score: 0, money: 1000, bet: 0 },
    { cardN: 0, cards: [], cardsTemp: [], score: 0, money: 1000, bet: 0 }

];

//elements

let deckPlace = document.getElementById("deckPlace")
let card = document.getElementById("card")
let betScreen = document.getElementById("betScreen");
let moneyScreen = document.getElementById("moneyScreen");
let coins = document.getElementById("coins");
let remainCard = document.getElementById("remainCard")
remainCard.innerText = deckarr.length;


//event 
for (let index = 0; index < coins.children.length; index++) {

    coins.children[index].addEventListener("click", bet);

}
moneyScreen.children[1].addEventListener("click", clearBet);
moneyScreen.children[0].addEventListener("click", deal);

function bet(e) {

    temp = e.target.children[0].cloneNode(true);
    temp.style.position = "absolute"
    e.target.appendChild(temp);
    betArray.push(temp);
    betAdd(e.target.className)
    coinsCheck();




}
function coinsCheck() {
    if (player[0].money < 10) {
        coins.children[0].children[0].style.display = "none"
        coins.children[0].removeEventListener("click", bet);

    }

    if (player[0].money < 25) {
        coins.children[1].children[0].style.display = "none"
        coins.children[1].removeEventListener("click", bet);
    }
    if (player[0].money < 100) {
        coins.children[2].children[0].style.display = "none"
        coins.children[2].removeEventListener("click", bet);

    }
    if (player[0].money < 1000) {
        coins.children[3].children[0].style.display = "none"
        coins.children[3].removeEventListener("click", bet);

    }
}
function clearBet() {
    betArray.forEach(function (element) {
        element.remove();
    });
    player[0].money += player[0].bet;
    player[0].bet = 0;
    betScreen.children[1].innerHTML = `Total Bet: ${player[0].bet}`;
    moneyScreen.children[3].innerHTML = player[0].money + "$";
    for (let index = 0; index < coins.children.length; index++) {
        coins.children[index].addEventListener("click", bet);
        coins.children[index].children[0].style.display = "block";

    }

}
function deal() {
    if (player[0].bet == 0) {
        temp = coins.children[2].children[0].cloneNode(true);
        temp.style.position = "absolute"
        console.log(temp);
        coins.children[2].appendChild(temp);
        console.log(coins)
        betArray.push(temp);
        betAdd('100');
        coinsCheck();

    }
    setTimeout(playerHit, 10)
    setTimeout(delaerHit, 1010)
    setTimeout(playerHit, 2020)
    setTimeout(delaerHit, 3030)
    moneyScreen.children[0].style.display = "none"
    moneyScreen.children[1].style.display = "none"
    moneyScreen.children[2].style.display = "none"
    betScreen.children[0].style.display = "block"
    betScreen.children[2].style.display = "block"

    betScreen.children[0].addEventListener("click", playerHit)
    betScreen.children[2].addEventListener("click", delaerHit)




}
function delaerHit() {
    let xtemp;
    let y;
    screen.width < 700 ? y = -20 : y = -10;



    let dtemp;
    dtemp = card.cloneNode(true);
    cardArray.push(dtemp);

    deckPlace.appendChild(dtemp);
    //fill card
    dtemp.children[0].children[1].children[1].innerHTML = deckarr[0].name;
    dtemp.children[0].children[1].children[0].children[0].innerHTML = deckarr[0].name;
    dtemp.children[0].children[1].children[2].children[0].innerHTML = deckarr[0].name;
    dtemp.children[0].children[1].children[0].children[1].innerHTML = deckarr[0].type;
    dtemp.children[0].children[1].children[2].children[1].innerHTML = deckarr[0].type;
    if (deckarr[0].type == "♦️" || deckarr[0].type == "♥️") {
        temp.style.color = "red";
    }
    dealer.cardN++;
    dealer.cardsTemp.push(dtemp);
    dealer.cards.push(deckarr[0].price);
    console.log("ol artık")
    setTimeout(function () {
        if (dealer.cardN > 1) {
            dtemp.style.transform = `translate(${dx + 36}%,${y}vh)`
            dtemp.children[0].style.transform = "rotateY(180deg)"
            dx += 36;

        }
        else {
            dtemp.style.transform = `translate(${dx}%,${y}vh)`
            dtemp.children[0].style.transform = "rotateY(180deg)"
            console.log(x)
        }



    }, 10);
    setTimeout(function () {
        for (i = dealer.cardsTemp.length; i > 0; i--) {
            if (i == dealer.cardsTemp.length) {
                dx -= 18;
                console.log(x)
                console.log(i)

                xtemp = dx;
                dealer.cardsTemp[i - 1].style.transform = `translate(${xtemp}%,${y}vh)`

            }
            else {
                console.log(i)

                dealer.cardsTemp[i - 1].style.transform = `translate(${xtemp - 32}%,${y}vh)`
                xtemp -= 36;
                console.log(xtemp)


            }
        }
    }, 1030)
    deckarr.shift();
    remainCard.innerText = deckarr.length;
}



function playerHit() {
    let ptemp;
    let y = 17;
    screen.width < 700 ? y = 15 : y = 17;

    let xtemp;
    cardArray.push(ptemp);
    ptemp = card.cloneNode(true);
    deckPlace.appendChild(ptemp);

    //fill card

    ptemp.children[0].children[1].children[1].innerHTML = deckarr[0].name;
    ptemp.children[0].children[1].children[0].children[0].innerHTML = deckarr[0].name;
    ptemp.children[0].children[1].children[2].children[0].innerHTML = deckarr[0].name;
    ptemp.children[0].children[1].children[0].children[1].innerHTML = deckarr[0].type;
    ptemp.children[0].children[1].children[2].children[1].innerHTML = deckarr[0].type;
    if (deckarr[0].type == "♦️" || deckarr[0].type == "♥️") {
        ptemp.style.color = "red";
    }

    player[0].cards.push(deckarr[0].price);
    player[0].cardsTemp.push(ptemp);
    player[0].cardN++;

    setTimeout(function () {
        if (player[0].cardN > 1) {
            ptemp.style.transform = `translate(${x + 36}%,${y}vh)`
            ptemp.children[0].style.transform = "rotateY(180deg)"
            x += 36;
            console.log(x)

        }
        else {
            ptemp.style.transform = `translate(${x}%,${y}vh)`
            ptemp.children[0].style.transform = "rotateY(180deg)"
            console.log(x)
        }



    }, 10);
    setTimeout(function () {
        for (i = player[0].cardsTemp.length; i > 0; i--) {
            if (i == player[0].cardsTemp.length) {
                x -= 18;
                console.log(x)
                console.log(i)

                xtemp = x;
                player[0].cardsTemp[i - 1].style.transform = `translate(${xtemp}%,${y}vh)`

            }
            else {
                console.log(i)

                player[0].cardsTemp[i - 1].style.transform = `translate(${xtemp - 36}%,${y}vh)`
                xtemp -= 36;
                console.log(xtemp)


            }
        }
    }, 1020)



    deckarr.shift()
    remainCard.innerText = deckarr.length;

}

function betAdd(betPrice) {

    console.log(betPrice)
    console.log("betAdd");
    if (betPrice == '10') {
        console.log(betPrice)

        setTimeout(function () {
            temp.style.transform = "translate(160%,-23vh)"
        }, 10)

    }
    else if (betPrice == '25') {
        console.log(betPrice)
        console.log(temp);
        setTimeout(function () {
            temp.style.transform = "translate(130%,-24vh)"
        }, 10)

    }
    else if (betPrice == '100') {
        setTimeout(function () {
            temp.style.transform = "translate(-80%,-29vh)"
        }, 10)
            ;
    }
    else {
        setTimeout(function () {
            temp.style.transform = "translate(-120%,-30vh)"
        }, 10)

    }
    player[0].bet += parseInt(betPrice);
    player[0].money -= parseInt(betPrice);
    betScreen.children[1].innerHTML = `Total Bet: ${player[0].bet} `;
    moneyScreen.children[3].innerHTML = player[0].money + "$";
}
/*
let player = [
    { cardN: 0, cards: [], skor: 0, money: 1000 },
    { cardN: 0, cards: [], skor: 0, money: 1000 },
    { cardN: 0, cards: [], skor: 0, money: 1000 }

];
let bank = { cardN: 0, cards: [], skor: 0, type: '', name: '', bet: 0 }
player[0].money = parseInt(document.getElementById('Smoney').innerText);

let deckarr = deck.concat(deck)
function shuffle(deck) {

    for (let i = 0; i < 500; i++) {
        let location1 = Math.floor((Math.random() * deck.length));
        let location2 = Math.floor((Math.random() * deck.length));
        let tmp = deck[location1];
        deck[location1] = deck[location2];
        deck[location2] = tmp;
    }
}
shuffle(deckarr);
function start() {

    bank.bet = parseInt(document.getElementById('money').value);
    console.log(document.getElementById('money').value);
    player[0].money -= bank.bet;
    document.getElementById('Smoney').innerText = player[0].money + '$';
    document.getElementById('bet').textContent = 'Bet: ' + bank.bet + '$'
    document.getElementById('bet').style.display = 'block'
    reset();
    hit();
    dealer();
    hit();
    dealer();

}
function stand() {

    document.getElementById('hitB').style.display = 'none';
    while (bank.skor < 17 || bank.cardN < 3) {

        console.log(bank.skor);
        dealer();
        if (bank.skor > 16) {
            bank.cardN++;
        }
    }
    finish();

}
function finish() {
    let end = document.getElementById('endscreen');

    if (player[0].skor > 21) {
        end.textContent = 'You Lost!!!';
        end.style.display = 'block';
        document.getElementById('standB').style.display = 'none';
    }
    else if (bank.skor > 21) {
        end.textContent = 'You Winn!!!';
        end.style.display = 'block';
        player[0].money += (bank.bet);

        document.getElementById('Smoney').innerText = player[0].money

    }
    else if (player[0].skor > bank.skor) {
        end.textContent = 'You Winn!!!';
        end.style.display = 'block';
        player[0].money += (bank.bet);
        document.getElementById('Smoney').innerText = player[0].money

    }
    else if (player[0].skor < bank.skor) {
        end.textContent = 'You lost!!!';
        end.style.display = 'block';

    }
    else {
        end.textContent = 'Draw!!!';
        end.style.display = 'block';
        player[0].money += bank.bet;

    }
    document.getElementById('money').style.display = 'block';
    document.getElementById('bet').style.display = 'none';



}
function dealer() {
    let dealer = document.querySelectorAll('.dealer ul');
    if (bank.skor > 16 && bank.cardN == 2) {
        dealer[bank.cardN - 1].children[0].textContent = bank.name;
        dealer[bank.cardN - 1].children[1].textContent = bank.type;
        dealer[bank.cardN - 1].children[2].textContent = bank.name;

        if (bank.type == '♦️' || bank.type == '♥️') {
            dealer[bank.cardN - 1].style.color = 'red';
            dealer[bank.cardN - 1].style.borderColor = 'black';
        }
        else {
            dealer[bank.cardN - 1].style.color = 'black';
            dealer[bank.cardN - 1].style.borderColor = 'black';

        }
        scoredealer();
    }

    if (bank.skor < 17) {
        if (bank.cardN == 2) {
            dealer[bank.cardN - 1].children[0].textContent = bank.name;
            dealer[bank.cardN - 1].children[1].textContent = bank.type;
            dealer[bank.cardN - 1].children[2].textContent = bank.name;
            if (bank.type == '♦️' || bank.type == '♥️') {
                dealer[bank.cardN - 1].style.color = 'red';
                dealer[bank.cardN - 1].style.borderColor = 'black';
            }
            else {
                dealer[bank.cardN - 1].style.color = 'black';
                dealer[bank.cardN - 1].style.borderColor = 'black';

            }
        }
        dealer[bank.cardN].style.display = 'flex';
        dealer[bank.cardN].children[0].textContent = deckarr[0].name;
        dealer[bank.cardN].children[1].textContent = deckarr[0].type;
        dealer[bank.cardN].children[2].textContent = deckarr[0].name;
        bank.cards.push(deckarr[0].price);
        if (deckarr[0].type == '♦️' || deckarr[0].type == '♥️') {
            dealer[bank.cardN].style.color = 'red';
            dealer[bank.cardN].style.borderColor = 'black';
        }
        else {
            dealer[bank.cardN].style.color = 'black';
        }
        bank.cardN++;

        scoredealer();
        if (bank.cardN == 2) {
            bank.type = deckarr[0].type;
            bank.name = deckarr[0].name;
            dealer[bank.cardN - 1].children[0].textContent = '?';
            dealer[bank.cardN - 1].children[1].textContent = '?';
            dealer[bank.cardN - 1].children[2].textContent = '?';
            dealer[bank.cardN - 1].style.color = 'blue';
            dealer[bank.cardN - 1].style.borderColor = 'blue';
            document.getElementById('scoredealer').textContent = bank.skor - deckarr[0].price;
        }
        deckarr.shift();

    }
}
function hit() {
    if (player[0].skor < 21) {
        let vals;
        vals = document.querySelectorAll('.slot ul');
        vals[player[0].cardN].style.display = 'flex';
        vals[player[0].cardN].children[1].textContent = deckarr[0].type;
        vals[player[0].cardN].children[0].textContent = vals[player[0].cardN].children[2].textContent = deckarr[0].name;
        score();
        if (deckarr[0].type == '♦️' || deckarr[0].type == '♥️') {
            vals[player[0].cardN].style.color = 'red';
            vals[player[0].cardN].style.borderColor = 'black';
        }
        else {
            vals[player[0].cardN].style.color = 'black';
        }
        deckarr.shift();
        player[0].cardN += 1
    }
}
function score() {
    player[0].cards.push(deckarr[0].price);
    player[0].skor = 0;
    player[0].cards.forEach(function (price) {
        player[0].skor += price;
    });
    if (player[0].skor > 21) {
        acecheck();
        if (player[0].skor > 21) {
            document.getElementById('score').innerHTML = '💥!!';
            finish();
        }

        else
            document.getElementById('score').innerHTML = player[0].skor;

    }
    else if (player[0].skor == 21 && player[0].cards.length == 2) {
        document.getElementById('score').innerHTML = 'BJ!!';
        finish();

    }
    else
        document.getElementById('score').innerHTML = player[0].skor;

}
function scoredealer() {
    bank.skor = 0;
    bank.cards.forEach(function (price) {
        bank.skor += price;
    });
    if (bank.skor > 21) {
        acecheckdealer();
        if (bank.skor > 21) {
            document.getElementById('scoredealer').innerHTML = '💥!!';
            finish();

        }
        else
            document.getElementById('scoredealer').innerHTML = bank.skor;

    }
    else if (bank.skor == 21 && bank.cards.length == 2) {
        document.getElementById('scoredealer').innerHTML = 'BJ!!';
        dealer();
        finish();
    }
    else
        document.getElementById('scoredealer').innerHTML = bank.skor;

}
function acecheck() {
    let index = 0;
    while (player[0].cards.length > index) {
        if (player[0].cards[index] == 11) {
            player[0].cards[index] = 1;
            player[0].skor -= 10;
            index = 100;
        };
        index++;
    };
}
function acecheckdealer() {
    let index = 0;
    while (bank.cards.length > index) {
        if (bank.cards[index] == 11) {
            bank.cards[index] = 1;
            bank.skor -= 10;
            index = 17;
        };
        index++;
    };
}
function reset() {
    document.getElementById('money').style.display = 'none';
    document.getElementById('hitB').style.display = 'block';
    document.getElementById('standB').style.display = 'block';
    document.getElementById('endscreen').style.display = 'none';
    let cards = document.querySelectorAll('.slot ul');
    cards.forEach(function (card) {
        card.style.display = 'none';

    });
    player[0].skor = 0;
    player[0].cards = [];
    player[0].cardN = 0;
    cards = document.querySelectorAll('.dealer ul');
    cards.forEach(function (card) {
        card.style.display = 'none';

    });
    bank.skor = 0;
    bank.cards = [];
    bank.cardN = 0;
    document.getElementById('score').innerHTML = player[0].skor;
    document.getElementById('scoredealer').innerHTML = player[0].skor;


}
*/
