const settings = {
    "method": "GET",
    "headers": {
        "X-RapidAPI-Key": "7c1d331df8msh9322aee26b0f534p1d832bjsn27c5f09f0a59",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
    }
};
var leagueId = [39, 78, 88]
for (i = 0; i < leagueId.length; i++)
var url = `https://api-football-v1.p.rapidapi.com/v3/players?season=2021&league=${leagueId[0]}`
fetch(url, settings)
.then (Response => Response.json())
.then (data => {
    console.log(data)
    dataIterator(data.response)


})
var playerContent = $("#unique")
function dataIterator(resultObj) {
    for (let i = 0; i < resultObj.length; i++) {
        console.log(resultObj)
        var playerbody = $("<div>").attr("class", "card").appendTo(playerContent)
        var playersImg = $("<img>").attr("src", resultObj[i].player.photo)
    
<<<<<<< HEAD
         var playersName = $("<h2>")
         playersName.text(resultObj[i].player.name);
         
        var teamName = $("<p>")
        teamName.text(resultObj[i].statistics[0].team.name);
    
        playerbody.append(playersImg, playersName, teamName)
        
    } 
   
    
}




// $.ajax(settings).done(function (response) {
//     console.log(response);
    
//     // console.log(playersSort)
//      for (let i = 0; i < 16; i++) {
//      var playersSort = response.response[i];
//      console.log(playersSort.player);
//      console.log(playersSort.statistics);



//      teamArray.push(teamName);
//      playerArray.push(playersName);
//      imgArray.push(playersImg);
//      console.log(teamName);
//      console.log(playersName);
//      console.log(playersImg);
//      }
    
//});
=======
});
>>>>>>> 11e561be503489da58566eb0813527435aa8855e
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
