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

$.ajax(settings).done(function (response) {
    console.log(response);
    //console.log(leagueSort);

    for (let i = 0; i < 16; i++) {
    var leagueSort = response.response[i];
    console.log(leagueSort.league);
    var nameArray = leagueSort.league.name;
    var flagArray = leagueSort.league.logo;

    console.log(nameArray);
    console.log(flagArray);
    var cardBody = $("<div>").attr("class" , "card").appendTo(".card-row");
     var leageName = $("<h3>");
     leageName.text(nameArray);
     
     var flagName = $("<img>").attr("src", flagArray);
     cardBody.append(flagName , leageName);



}
   
});


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
