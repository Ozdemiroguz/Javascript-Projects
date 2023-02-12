document.getElementById("inputForm").addEventListener("submit", setPicture);
var breedlist;
getBreedList();

function getBreedList() {
    fetch("https://dog.ceo/api/breeds/list/all").then(response => response.json()).then(dogs => {
        console.log(dogs.message.spitz);
        window.breedlist = Object.keys(dogs.message)
        console.log(dogs)
        seOption(breedlist);

    }).catch(function (err) {
        console.log(err);
    })

}
function seOption(dogs) {
    var select = document.querySelector(".custom-select");
    var option = "<select><option>All breeds</option>";


    dogs.forEach(dog => {
        option += "<option>" + dog + "</option> ";

    });
    option += "</select>";
    select.innerHTML = option;
}
function setPicture(e) {
    let url;
    if (document.querySelector("select").value == "All breeds") {
        url = "https://dog.ceo/api/breeds/image/random"
    }
    else {
        let breed = document.querySelector("select").value;
        url = `https://dog.ceo/api/breed/${breed}/images/random`
    }


    fetch(url).then(response => response.json()).then(image => {
        document.getElementById("screen").src = image.message;


    }).catch(function (err) {
        console.log(err);
    })
    e.preventDefault();

}
