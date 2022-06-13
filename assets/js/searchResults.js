var resultTitleEl = $("#search-title");
var resultContentEl = $('#search-content');

function pullSearchParams() {
    //getting search params out of URL into an array
    var paramsArray = document.location.search.split('&');
    console.log(paramsArray);
    //Getting input and type values
    var searchType = paramsArray[0].split('=').pop().toLowerCase();
    console.log(searchType);
    var searchInput = paramsArray[1].split('=').pop().toLowerCase();
    console.log(searchInput);

    searchApi(searchType, searchInput)
}
pullSearchParams();

function searchApi(searchType, searchInput) {
    //set up url for fetch request
    var searchUrl = `https://api-football-v1.p.rapidapi.com/v3/${searchType}?search=${searchInput}`;
    console.log(searchUrl);
    
    //use request function to call constructed url and pass in headers
    const newRequest = new Request(searchUrl, {
        "method": "GET",
        "headers": {
            "X-RapidAPI-Key": "7c1d331df8msh9322aee26b0f534p1d832bjsn27c5f09f0a59",
            "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
        }
    });

    fetch(newRequest)
        .then(response => response.json())
        .then(data => {
            for (var i = 0; i < data.response.length; i++) {
                renderResults(data.response[i]);
               
            }

        })
};  

function renderResults(resultObj) {
    console.log(resultObj);
    if ("team" in resultObj) {
        var resultBody = $("<div></div").attr("class", "card").appendTo("#search-content");
        var resultsCard = $("<div></div>").appendTo(resultBody);
        var cardTitleEl = $("<h3></h3>")

        cardTitleEl.text(resultObj.team.name);
        var logoEl = $("<img></img").attr({src: resultObj.team.logo, "class": "object-scale-down"})

        var countryEl = $("<p></p>")
        countryEl.text(resultObj.team.country);
       
        var dateEl = $("<p></p>")
        dateEl.text(resultObj.team.founded);
        
        var venueTitleEl = $("<h4></h4>")
        venueTitleEl.text(resultObj.venue.name);
       
        var cityNameEl = $("<p></p>")
        cityNameEl.text(resultObj.venue.city);
       
        var capacitySizeEl = $("<p></p>")
        capacitySizeEl.text(resultObj.venue.capacity);

        resultBody.append(cardTitleEl, logoEl, countryEl, dateEl, venueTitleEl, cityNameEl, capacitySizeEl);


    } else if ("league" in resultObj) {
        var resultBody = $("<div></div").attr("class", "flex").appendTo("#search-content");
        var resultsCard = $("<div></div>").attr("class", "card").appendTo(resultBody);

        var leagueNameEl = $("<h4></h4>").attr("class", "card")
        leagueNameEl.text(resultObj.league.name);
       
        var leagueLogo = ("<img></img").attr("src", resultObj.league.logo);

        var countryEl = $("<p></p>").attr("class", "card");
        countryEl.text(resultObj.country.name)
       
        var countryFlag = ("<img></img").attr("src", resultObj.country.flag);

        resultBody.append(leagueNameEl, leagueLogo, countryEl, countryFlag)





    } else if ("player" in resultObj) {
        var resultBody = $("<div></div").attr("class", "flex").appendTo("#search-content");
        var resultsCard = $("<div></div>").attr("class", "card").appendTo(resultBody);

        var playerNameEl = $("<h3></h3>").attr("class", "card");
        playerNameEl.text(resultObj.player.firstname + resultObj.player.lastname);
       
        var playerAgeEl = $("<p></p>").attr("class", "card");
        playerAgeEl.text(resultObj.player.age)
        
        var playerNationalityEl = $("<p></p>").attr("class", "card");
        playerNationalityEl.text(resultObj.player.nationality);
       
        var playerHieghtEl = $("<p></p>").attr("class", "card");
        playerHieghtEl.text(resultObj.player.height);
        
        var playerWeightEl = $("<p></p>").attr("class", "card");
        playerWeightEl.text(resultObj.player.weight);

        if (!resultObj.player.injured) {
            var playerInjuries = $("<p>Player is currently: uninjured</p>").attr("class", "card");
        } else {
            var playerInjuries = $("<p>Player is currently: injured</p>").attr("class", "card");
        }
        var playerImgEl = $("<img></img").attr("src", resultObj.player.photo);

        resultBody.append(playerNameEl, playerAgeEl, playerNationalityEl, playerHieghtEl, playerWeightEl, playerInjuries, playerImgEl);
    }


    else {
        var resultBody = $("<div></div").attr("class", "flex").appendTo("#search-content");
        var resultsCard = $("<div></div>").attr("class", "card").appendTo(resultBody);
      
        var countryName = $("<h3></h3>").attr("class", "card")
        countryName.text(resultObj.name);

        var abbrevEl = $("<p></p>").attr("class", "card");
        abbrevEl.text(resultObj.code);

        var flagEl = $("<img></img").attr("src", resultObj.flag);
        resultBody.append(countryName, abbrevEl, flagEl);
    }
}

