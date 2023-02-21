
document.getElementById("search").addEventListener("click", getWord);
document.getElementById("wordInput").addEventListener("keypress", getWord);
document.getElementById("darkMode").addEventListener("click", darkMode);
let typeButtons = document.querySelectorAll("#wordType");





var data = [];
let dictionary = { id: "", word: "", partOfSpeech: "", definition: "", example: "", synonym: "", antonym: "" }
function getApi(word) {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(response => response.json()).then(word => {

        if (word.title == "No Definitions Found") {
            document.querySelector(".alert").style.display = "block";
            setTimeout(clearError, 3000)
        }
        else {
            console.log(word);
            data = word[0].meanings;
            dictionary.id = word[0].word + data[0].partOfSpeech;
            dictionary.word = word[0].word;
            dictionary.partOfSpeech = data[0].partOfSpeech;
            dictionary.definition = data[0].definitions[0].definition;
            data[0].definitions[0].example == undefined ? (dictionary.example = "/") : (dictionary.example = word[0].meanings[0].definitions[0].example)
            data[0].synonyms[0] == undefined ? (dictionary.synonym = "/") : (dictionary.synonym = word[0].meanings[0].synonyms[0])
            data[0].antonyms[0] == undefined ? (dictionary.antonym = "/") : (dictionary.antonym = word[0].meanings[0].antonyms[0])
            setTypeButton();

            setDefaultWord(dictionary);

        }



    }).catch(function (err) {
        console.log(err);
    })

}

function getWord(e) {
    let word = document.getElementById("wordInput").value
    if ((e.key == "Enter" && e.type == "keypress" && word != '') || (e.type == "click" && word != '')) {
        getApi(word);
    }
}
function clearError() {
    document.querySelector('.alert').style.display = "none";
}
function setDefaultWord(defaultWord) {

    document.getElementById("defaultWord").children[0].innerText = defaultWord.word;
    document.getElementById("defaultWord").children[2].innerText = defaultWord.definition;
    document.getElementById("defaultWord").style.display = "block";
    localStorage.setItem('default', JSON.stringify(defaultWord));
}
function setTypeButton() {
    //for reset
    typeButtons.forEach(type => {
        type.style.display = "none";
    });
    for (let i = 0; i < data.length; i++) {
        typeButtons.forEach(type => {
            if (data[i].partOfSpeech == type.innerHTML) {
                type.addEventListener("click", getWordType);
                type.style.display = "block";
            }

        });
    }
}
function setTypeButtonv2() {

}

function getWordType(e) {

    for (let i = 0; i < data.length; i++) {
        if (e.target.innerHTML == data[i].partOfSpeech) {
            dictionary.id = dictionary.word + data[i].partOfSpeech;
            dictionary.partOfSpeech = data[i].partOfSpeech;
            dictionary.definition = data[i].definitions[0].definition;
            data[i].definitions[0].example == undefined ? (dictionary.example = "/") : (dictionary.example = data[i].definitions[0].example)
            data[i].synonyms[i] == undefined ? (dictionary.synonym = "/") : (dictionary.synonym = data[i].synonyms[0])
            data[i].antonyms[i] == undefined ? (dictionary.antonym = "/") : (dictionary.antonym = data[i].antonyms[0])
            setDefaultWord(dictionary);
        }
    }
}
function darkMode() {
    console.log("x")
    var element = document.getElementById("dictionary");
    if (element.style.color == "white") {
        element.style.backgroundColor = "white";
        element.style.color = "black";


    }
    else {
        element.style.backgroundColor = "#161c2d";
        element.style.color = "white";

    }

}








