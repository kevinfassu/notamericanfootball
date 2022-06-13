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
    var leagueArray = [];
    var logoArray = [];

    leagueArray.push(nameArray);
    logoArray.push(flagArray);
    console.log(nameArray);
    console.log(flagArray);
     }
    
});