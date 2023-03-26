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
let betArray = [];
let cardArray = [];

let player = [
    { cardN: 0, cards: [], score: 0, money: 2000, bet: 0 },
    { cardN: 0, cards: [], score: 0, money: 1000 },
    { cardN: 0, cards: [], score: 0, money: 1000 }

];
let moneyScreen
let coins = document.getElementById("coins");

for (let index = 0; index < coins.children.length; index++) {
    coins.children[index].addEventListener("click", bet);

}
let temp;
function bet(e) {
    console.log(e.target.className);

    temp = e.target.children[0].cloneNode(true);
    temp.style.position = "absolute"
    e.target.appendChild(temp);
    betArray.push(temp);
    if (e.target.className == 10) {
        setTimeout(function () {
            temp.style.transform = "translate(160%,-24vh)"
        }, 10)
        player[0].bet += parseInt(e.target.className);
    }
    else if (e.target.className == 25) {
        setTimeout(function () {
            temp.style.transform = "translate(130%,-25vh)"
        }, 10)
        player[0].bet += parseInt(e.target.className);
        betArray.push(temp);

    }
    else if (e.target.className == 100) {
        setTimeout(function () {
            temp.style.transform = "translate(-80%,-30vh)"
        }, 10)
        player[0].bet += parseInt(e.target.className);
        betArray.push(temp);

    }
    else {
        setTimeout(function () {
            temp.style.transform = "translate(-120%,-31vh)"
        }, 10)
        player[0].bet += parseInt(e.target.className);
        betArray.push(temp);

    }

    console.log(temp);

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
