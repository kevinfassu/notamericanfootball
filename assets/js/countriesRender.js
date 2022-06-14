const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api-football-v1.p.rapidapi.com/v3/countries",
    "method": "GET",
    "headers": {
        "X-RapidAPI-Key": "3bdcf8860cmshea229f372e48696p191768jsn0ba4b3da61e6",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
    countriesSort = response.response;
    console.log(countriesSort)
    for (let i = 0; i < 16; i++) {

    console.log(countriesSort [i]);
    var nameArray = countriesSort[i].name;
    var flagArray = countriesSort[i].flag;
    var countryArray = [];
    var logoArray = [];

    countryArray.push(nameArray);
    logoArray.push(flagArray);
    console.log(nameArray);
    console.log(flagArray);
    placesSort(nameArray, flagArray)
    }
    
});

var playerContent = $("#unique")
function placesSort(nameArray,flagArray) {
        var countryBody = $("<div>").attr("class", "card").appendTo(playerContent)
        var countryImg = $("<img>").attr("src", flagArray)
    
         var countryName = $("<h2>")
         countryName.text(nameArray);
         

    
        countryBody.append(countryImg, countryName)
        
    } 

let modal = document.getElementById("popup-modal");

let btn = document.getElementById("open-btn");

let button = document.getElementById("no-btn");

btn.onclick = function () {
    modal.style.display = "block";
}

button.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

