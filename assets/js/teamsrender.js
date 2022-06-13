pullSearchParams();

function pullSearchParams() {
    //getting search params out of URL into an array
    var paramsArray = document.location.search.split('&');
    console.log(paramsArray);
    //Getting input and type values
    var paramChecker = document.location.search;
    console.log(paramChecker)
    if (paramChecker === '') {
        displayAllTeam();   
    } else {
        var teamId = paramsArray[0].split('=').pop();
        console.log(teamId);
        var leagueId = paramsArray[1].split('=').pop();
        console.log(leagueId);
        
        // searchApi(teamId, leagueId)
        console.log(teamId)
        console.log(leagueId)
        var teamURL = `https://api-football-v1.p.rapidapi.com/v3/teams/statistics?season=2021&team=${teamId}&league=${leagueId}`
        
        const newRequest = new Request(teamURL, {
            "method": "GET",
            "headers": {
                "X-RapidAPI-Key": "7c1d331df8msh9322aee26b0f534p1d832bjsn27c5f09f0a59",
                "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
            }
        });
        
        fetch(newRequest)
        .then(response => response.json())
        .then(data => {
            dataIterator(data.response);
            console.log(data)
        })
    }
}


function dataIterator(resultObj) {
    var dataArray = resultObj;
    console.log(dataArray);
    var teamNameEl = document.getElementById("teamName")
    var teamLogoEl = document.getElementById("teamLogo")
    var winStreakEl = document.getElementById("winStreak")
    var loseStreakEl = document.getElementById("loseStreak")
    var drawStreakEl = document.getElementById("drawStreak")
    var leagueNameEl = document.getElementById("leagueName")
    var leagueLogoEl = document.getElementById("leagueLogo")
    var leagueCountryEl = document.getElementById("leagueCountry")
    
    var leagueLogo = resultObj.league.logo.replaceAll("\"", "");
    console.log(leagueLogo)
    var leagueName = resultObj.league.name.replaceAll("\"", "");
    console.log(leagueName)
    var leagueCountry = resultObj.league.country.replaceAll("\"", "");
    console.log(leagueCountry)
    var teamName = resultObj.team.name.replaceAll("\"", "");
    console.log(teamName)
    var teamLogo = resultObj.team.logo.replaceAll("\"", "");
            console.log(teamLogo)
            var winStreak = resultObj.biggest.streak.wins;
            console.log(winStreak)
            var loseStreak = resultObj.biggest.streak.loses;
            console.log(loseStreak)
            var drawStreak = resultObj.biggest.streak.draws;
            console.log(drawStreak)
            
            teamNameEl.textContent = teamName;
            teamLogoEl.src = teamLogo;
            winStreakEl.textContent = winStreak;
            loseStreakEl.textContent = loseStreak;
            drawStreakEl.textContent = drawStreak;
            leagueNameEl.textContent = leagueName;
            leagueLogoEl.src = leagueLogo;
            leagueCountryEl.textContent = leagueCountry;
            
        }
        
        function displayAllTeam() {
            console.log("DisplayAllTeam Function started")
            document.getElementsByClassName("teamRender")[0].style.visibility = 'hidden';
            var teamURL = `https://api-football-v1.p.rapidapi.com/v3/teams/`
        
            const newRequest = new Request(teamURL, {
                "method": "GET",
                "headers": {
                    "X-RapidAPI-Key": "7c1d331df8msh9322aee26b0f534p1d832bjsn27c5f09f0a59",
                    "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
                }
            });
            
            fetch(newRequest)
            .then(response => response.json())
            .then(data => {
                allTeamIterator(data.response);
                console.log(data)
            })
        }


        function allTeamIterator(resultObj) {
        console.log(resultObj);
         
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