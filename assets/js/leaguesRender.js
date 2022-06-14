const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api-football-v1.p.rapidapi.com/v3/leagues",
    "method": "GET",
    "headers": {
        "X-RapidAPI-Key": "7c1d331df8msh9322aee26b0f534p1d832bjsn27c5f09f0a59",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
    }
};
// Rendered leage name and logo from API 
$.ajax(settings).done(function (response) {
  

    for (let i = 0; i < 16; i++) {
    var leagueSort = response.response[i];
   
    var nameArray = leagueSort.league.name;
    var flagArray = leagueSort.league.logo;

   
    var cardBody = $("<div>").attr("class" , "card").appendTo(".card-row");
     var leageName = $("<h3>");
     leageName.text(nameArray);
     
     var flagName = $("<img>").attr("src", flagArray);
     cardBody.append(flagName , leageName);



}
   
});

// Modal Function 
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
