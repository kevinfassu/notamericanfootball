

function myTeamsRender() {
    var teamsIdRender = JSON.parse(localStorage.getItem("favedTeam"));
    console.log(teamsIdRender);

    for (i = 0; i < teamsIdRender.length; i++) {
        var myTeamsUrl = `https://api-football-v1.p.rapidapi.com/v3/teams?id=${teamsIdRender[i]}`;
        const newRequest = new Request(myTeamsUrl, {
            "method": "GET",
            "headers": {
                "X-RapidAPI-Key": "7c1d331df8msh9322aee26b0f534p1d832bjsn27c5f09f0a59",
                "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
            }
        });
        fetch(newRequest)
            .then(response => response.json())
            .then(data => appendCard(data.response[0]))


      
    }
}

myTeamsRender();

function appendCard (resultObj)  {
    console.log(resultObj);
var teamBody = $("<div>").attr("class","card").appendTo("#team-card");
var teamName = $("<h3>");
teamName.text(resultObj.team.name);

console.log(resultObj.team.name);

var teamCountry = $("<h4>");
teamCountry.text(resultObj.team.country);



var teamLogo = $("<img>").attr("src", resultObj.team.logo);

teamBody.append(teamLogo, teamName, teamCountry);
}