const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api-football-v1.p.rapidapi.com/v3/players/squads",
    "method": "GET",
    "headers": {
        "X-RapidAPI-Key": "7c1d331df8msh9322aee26b0f534p1d832bjsn27c5f09f0a59",
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
    }
    
});