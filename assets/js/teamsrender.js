var sectionEl = $("#topTeams")
var index = 0;
var dataIndex = 0;
var leagueParameter = [39, 78, 140, 88, 262];
let teamFavId;
pullSearchParams();
function pullSearchParams() {
    //getting search params out of URL into an array
    var paramsArray = document.location.search.split('&');
    
    //Getting input and type values
    var paramChecker = document.location.search;
    
    if (paramChecker === '') {
        displayAllTeam();
    } else {
        document.getElementsByClassName("teamSection")[0].style.visibility = 'hidden';
      
        var teamId = paramsArray[0].split('=').pop();
        
        var leagueId = paramsArray[1].split('=').pop();
      

        // searchApi(teamId, leagueId)
        
        
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
                
            })
    }
}

// Start of data iterator function 
function dataIterator(resultObj) {
    var dataArray = resultObj;
   
    var teamNameEl = document.getElementById("teamName")
    var teamLogoEl = document.getElementById("teamLogo")
    var winStreakEl = document.getElementById("winStreak")
    var loseStreakEl = document.getElementById("loseStreak")
    var drawStreakEl = document.getElementById("drawStreak")
    var leagueNameEl = document.getElementById("leagueName")
    var leagueLogoEl = document.getElementById("leagueLogo")
    var leagueCountryEl = document.getElementById("leagueCountry")
    var teamGoalAwayEl = document.getElementById("avgAwayGoals")
    var teamGoalHomeEl = document.getElementById("avgHomeGoals")
    var teamGoalTotalEl = document.getElementById("avgTotalGoals")
    var drawHomeEl = document.getElementById("drawHome")
    var drawAwayEl = document.getElementById("drawAway")
    var drawTotalEl = document.getElementById("drawTotal")
    var lostHomeEl = document.getElementById("lostHome")
    var lostAwayEl = document.getElementById("lostAway")
    var lostTotalEl = document.getElementById("lostTotal")
    var winHomeEl = document.getElementById("winHome")
    var winAwayEl = document.getElementById("winAway")
    var winTotalEl = document.getElementById("winTotal")
    teamFavId = resultObj.team.id;
// Assign values to variables for API 

    var leagueLogo = resultObj.league.logo.replaceAll("\"", "");
    
    var leagueName = resultObj.league.name.replaceAll("\"", "");
    
    var leagueCountry = resultObj.league.country.replaceAll("\"", "");
   
    var teamName = resultObj.team.name.replaceAll("\"", "");
   
    var teamLogo = resultObj.team.logo.replaceAll("\"", "");
   
    var winStreak = resultObj.biggest.streak.wins;
    
    var loseStreak = resultObj.biggest.streak.loses;
    
    var drawStreak = resultObj.biggest.streak.draws;
    
    var teamGoalAway = resultObj.goals.against.average.away;
    var teamGoalHome = resultObj.goals.against.average.home;
    var teamGoalTotal = resultObj.goals.against.average.total;
    var drawHome = resultObj.fixtures.draws.home;
    var drawAway = resultObj.fixtures.draws.away;
    var drawTotal = resultObj.fixtures.draws.total;
    var lostHome = resultObj.fixtures.loses.home;
    var lostAway = resultObj.fixtures.loses.away;
    var lostTotal = resultObj.fixtures.loses.total;
    var winHome = resultObj.fixtures.wins.home;
    var winAway = resultObj.fixtures.wins.away;
    var winTotal = resultObj.fixtures.wins.total;
    
   

    teamNameEl.textContent = teamName;
    teamLogoEl.src = teamLogo;
    winStreakEl.textContent = winStreak;
    loseStreakEl.textContent = loseStreak;
    drawStreakEl.textContent = drawStreak;
    leagueNameEl.textContent = leagueName;
    leagueLogoEl.src = leagueLogo;
    leagueCountryEl.textContent = leagueCountry;
    teamGoalAwayEl.textContent = teamGoalAway;
    teamGoalHomeEl.textContent = teamGoalHome;
    teamGoalTotalEl.textContent = teamGoalTotal;
    drawHomeEl.textContent = drawHome;
    drawAwayEl.textContent = drawAway;
    drawTotalEl.textContent = drawTotal;
    lostHomeEl.textContent = lostHome;
    lostAwayEl.textContent = lostAway;
    lostTotalEl.textContent = lostTotal;
    winHomeEl.textContent = winHome;
    winAwayEl.textContent = winAway;
    winTotalEl.textContent = winTotal;

}
// End of function
// Start of render function for all teams
function displayAllTeam() {
    console.log("DisplayAllTeam Function started")
    document.getElementsByClassName("teamRender")[0].style.visibility = 'hidden';


    for (let i = 0; i < 5; i++) {
      
        var teamURL = `https://api-football-v1.p.rapidapi.com/v3/teams?league=${leagueParameter[i]}&season=2021`

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
                
            })
    }
}


function allTeamIterator(resultObj) {
    if (index === 0) {
        var cardEl =  $("#league1")
    //    Groups teams by country to confirm accuracy 

        var leagueParamId = 0;
        if (resultObj[0].team.country === "Spain") {
            leagueParamId = 140;
            
        } else if (resultObj[0].team.country === "Germany") {
            leagueParamId = 78;
          
        } else if (resultObj[0].team.country ===  "Mexico") {
            leagueParamId = 262;
            
        } else if (resultObj[0].team.country ===  "England") {
            leagueParamId = 39;
            
        } else if (resultObj[0].team.country ===  "Netherlands") {
            leagueParamId = 88;
            
        }



    //    Render loop 
        for (let i = 0; i < resultObj.length; i++) {
            var teamParamId = resultObj[i].team.id;
           
            var sendAwayURL = './teams.html?teamid=' + teamParamId + "&league=" + leagueParamId;
            var aEl = $("<a>").attr("href", sendAwayURL)
            var divEl = $("<div>")
            var teamName = resultObj[i].team.name;
            var teamEl = $("<h3>").text(teamName)
            var teamLogo = resultObj[i].team.logo;
            var teamLogoEl = $("<img>").attr("src", teamLogo);
            divEl.append(teamEl, teamLogoEl)
            aEl.append(divEl)
            cardEl.append(aEl);
            // console.log(teamName)
            // console.log(teamLogo)
        }
        leagueFinderMaker(resultObj);
        index++;
        return;
    } else if (index === 1) {
        var cardEl =  $("#league2")
        

        var leagueParamId = 0;
        if (resultObj[0].team.country === "Spain") {
            leagueParamId = 140;
           
        } else if (resultObj[0].team.country === "Germany") {
            leagueParamId = 78;
           
        } else if (resultObj[0].team.country ===  "Mexico") {
            leagueParamId = 262;
            
        } else if (resultObj[0].team.country ===  "England") {
            leagueParamId = 39;
            
        } else if (resultObj[0].team.country ===  "Netherlands") {
            leagueParamId = 88;
        
        }


       
        for (let i = 0; i < resultObj.length; i++) {
            var teamParamId = resultObj[i].team.id;
           
            var sendAwayURL = './teams.html?teamid=' + teamParamId + "&league=" + leagueParamId;
            var aEl = $("<a>").attr("href", sendAwayURL)
            var divEl = $("<div>")
            var teamName = resultObj[i].team.name;
            var teamEl = $("<h3>").text(teamName)
            var teamLogo = resultObj[i].team.logo;
            var teamLogoEl = $("<img>").attr("src", teamLogo);
            divEl.append(teamEl, teamLogoEl)
            aEl.append(divEl)
            cardEl.append(aEl);
            // console.log(teamName)
            // console.log(teamLogo)
        }
        leagueFinderMaker(resultObj);
        index++;
        return;
    } else if (index === 2) {
        var cardEl =  $("#league3")
        
        var leagueParamId = 0;
        if (resultObj[0].team.country === "Spain") {
            leagueParamId = 140;
            
        } else if (resultObj[0].team.country === "Germany") {
            leagueParamId = 78;
          
        } else if (resultObj[0].team.country ===  "Mexico") {
            leagueParamId = 262;
            
        } else if (resultObj[0].team.country ===  "England") {
            leagueParamId = 39;
            
        } else if (resultObj[0].team.country ===  "Netherlands") {
            leagueParamId = 88;
           
        }




        
        for (let i = 0; i < resultObj.length; i++) {
            var teamParamId = resultObj[i].team.id;
            
            var sendAwayURL = './teams.html?teamid=' + teamParamId + "&league=" + leagueParamId;
            var aEl = $("<a>").attr("href", sendAwayURL)
            var divEl = $("<div>")
            var teamName = resultObj[i].team.name;
            var teamEl = $("<h3>").text(teamName)
            var teamLogo = resultObj[i].team.logo;
            var teamLogoEl = $("<img>").attr("src", teamLogo);
            divEl.append(teamEl, teamLogoEl)
            aEl.append(divEl)
            cardEl.append(aEl);
            // console.log(teamName)
            // console.log(teamLogo)
        }
        leagueFinderMaker(resultObj);
        index++;
        return;
    } else if (index === 3) {
        var cardEl =  $("#league4")
      
        var leagueParamId = 0;
        if (resultObj[0].team.country === "Spain") {
            leagueParamId = 140;
           
        } else if (resultObj[0].team.country === "Germany") {
            leagueParamId = 78;
            
        } else if (resultObj[0].team.country ===  "Mexico") {
            leagueParamId = 262;
            
        } else if (resultObj[0].team.country ===  "England") {
            leagueParamId = 39;
            
        } else if (resultObj[0].team.country ===  "Netherlands") {
            leagueParamId = 88;
            
        }


        console.log("League ID: " + leagueParamId)
        for (let i = 0; i < resultObj.length; i++) {
            var teamParamId = resultObj[i].team.id;
            
            var sendAwayURL = './teams.html?teamid=' + teamParamId + "&league=" + leagueParamId;
            var aEl = $("<a>").attr("href", sendAwayURL)
            var divEl = $("<div>")
            var teamName = resultObj[i].team.name;
            var teamEl = $("<h3>").text(teamName)
            var teamLogo = resultObj[i].team.logo;
            var teamLogoEl = $("<img>").attr("src", teamLogo);
            divEl.append(teamEl, teamLogoEl)
            aEl.append(divEl)
            cardEl.append(aEl);
            // console.log(teamName)
            // console.log(teamLogo)
        }
        leagueFinderMaker(resultObj);
        index++;
        return;
    } else if (index === 4) {
        var cardEl =  $("#league5")
        

        var leagueParamId = 0;
        if (resultObj[0].team.country === "Spain") {
            leagueParamId = 140;
            
        } else if (resultObj[0].team.country === "Germany") {
            leagueParamId = 78;
            
        } else if (resultObj[0].team.country ===  "Mexico") {
            leagueParamId = 262;
            
        } else if (resultObj[0].team.country ===  "England") {
            leagueParamId = 39;
           
        } else if (resultObj[0].team.country ===  "Netherlands") {
            leagueParamId = 88;
            
        }




        
        for (let i = 0; i < resultObj.length; i++) {
            var teamParamId = resultObj[i].team.id;
            
            var sendAwayURL = './teams.html?teamid=' + teamParamId + "&league=" + leagueParamId;
            var aEl = $("<a>").attr("href", sendAwayURL)
            var divEl = $("<div>")
            var teamName = resultObj[i].team.name;
            var teamEl = $("<h3>").text(teamName)
            var teamLogo = resultObj[i].team.logo;
            var teamLogoEl = $("<img>").attr("src", teamLogo);
            divEl.append(teamEl, teamLogoEl)
            aEl.append(divEl)
            cardEl.append(aEl);
            // console.log(teamName)
            // console.log(teamLogo)
        }
        leagueFinderMaker(resultObj);
        return;
    }
}



//  ----------------------------- Start Of LeagueFinderFunction --------------------------------



function leagueFinderMaker(resultObj) {
    var leagueIdCheck = ["Spain","Netherlands","Germany", "England","Mexico"];
    
    if (leagueIdCheck[0] === resultObj[4].team.country) {
        
        var leagueName = "La Liga";
        var leagueLogo = "https://media.api-sports.io/football/leagues/140.png";
        
        if (dataIndex === 0) {
            var cardEl1 =  $("#league1Header")
            var h1El = $("<h1>").text(leagueName);
            var leagueLogoEl = $("<img>").attr("src", leagueLogo);
            cardEl1.append(h1El, leagueLogoEl);
            dataIndex++;
        } else if (dataIndex === 1) {
            var cardEl2 =  $("#league2Header")
            var h1El = $("<h1>").text(leagueName);
            var leagueLogoEl = $("<img>").attr("src", leagueLogo);
            cardEl2.append(h1El, leagueLogoEl);
            dataIndex++;
        } else if (dataIndex === 2) {
            var cardEl3 =  $("#league3Header")
            var h1El = $("<h1>").text(leagueName);
            var leagueLogoEl = $("<img>").attr("src", leagueLogo);
            cardEl3.append(h1El, leagueLogoEl);
            dataIndex++;
        } else if (dataIndex === 3) {
            var cardEl4 =  $("#league4Header")
            var h1El = $("<h1>").text(leagueName);
            var leagueLogoEl = $("<img>").attr("src", leagueLogo);
            cardEl4.append(h1El, leagueLogoEl);
            dataIndex++;
        } else if (dataIndex === 4) {
            var cardEl5 =  $("#league5Header")
            var h1El = $("<h1>").text(leagueName);
            var leagueLogoEl = $("<img>").attr("src", leagueLogo);
            cardEl5.append(h1El, leagueLogoEl);
            dataIndex++;
        } 
        else {
        console.log("Country Not Found")
        dataIndex++;
    }


    } else if (leagueIdCheck[1] === resultObj[4].team.country) {
        
        var leagueName = "Eredivisie";
        var leagueLogo = "https://media.api-sports.io/football/leagues/88.png";
     
        if (dataIndex === 0) {
            var cardEl1 =  $("#league1Header")
            var h1El = $("<h1>").text(leagueName);
            var leagueLogoEl = $("<img>").attr("src", leagueLogo);
            cardEl1.append(h1El, leagueLogoEl);
            dataIndex++;
        } else if (dataIndex === 1) {
            var cardEl2 =  $("#league2Header")
            var h1El = $("<h1>").text(leagueName);
            var leagueLogoEl = $("<img>").attr("src", leagueLogo);
            cardEl2.append(h1El, leagueLogoEl);
            dataIndex++;
        } else if (dataIndex === 2) {
            var cardEl3 =  $("#league3Header")
            var h1El = $("<h1>").text(leagueName);
            var leagueLogoEl = $("<img>").attr("src", leagueLogo);
            cardEl3.append(h1El, leagueLogoEl);
            dataIndex++;
        } else if (dataIndex === 3) {
            var cardEl4 =  $("#league4Header")
            var h1El = $("<h1>").text(leagueName);
            var leagueLogoEl = $("<img>").attr("src", leagueLogo);
            cardEl4.append(h1El, leagueLogoEl);
            dataIndex++;
        } else if (dataIndex === 4) {
            var cardEl5 =  $("#league5Header")
            var h1El = $("<h1>").text(leagueName);
            var leagueLogoEl = $("<img>").attr("src", leagueLogo);
            cardEl5.append(h1El, leagueLogoEl);
            dataIndex++;
        } 
        else {
        console.log("Country Not Found")
        dataIndex++;
    }


    } else if (leagueIdCheck[2] === resultObj[4].team.country) {
        
        var leagueName = "Bundesliga 1";
        var leagueLogo = "https://media.api-sports.io/football/leagues/78.png";
       
        if (dataIndex === 0) {
            var cardEl1 =  $("#league1Header")
            var h1El = $("<h1>").text(leagueName);
            var leagueLogoEl = $("<img>").attr("src", leagueLogo);
            cardEl1.append(h1El, leagueLogoEl);
            dataIndex++;
        } else if (dataIndex === 1) {
            var cardEl2 =  $("#league2Header")
            var h1El = $("<h1>").text(leagueName);
            var leagueLogoEl = $("<img>").attr("src", leagueLogo);
            cardEl2.append(h1El, leagueLogoEl);
            dataIndex++;
        } else if (dataIndex === 2) {
            var cardEl3 =  $("#league3Header")
            var h1El = $("<h1>").text(leagueName);
            var leagueLogoEl = $("<img>").attr("src", leagueLogo);
            cardEl3.append(h1El, leagueLogoEl);
            dataIndex++;
        } else if (dataIndex === 3) {
            var cardEl4 =  $("#league4Header")
            var h1El = $("<h1>").text(leagueName);
            var leagueLogoEl = $("<img>").attr("src", leagueLogo);
            cardEl4.append(h1El, leagueLogoEl);
            dataIndex++;
        } else if (dataIndex === 4) {
            var cardEl5 =  $("#league5Header")
            var h1El = $("<h1>").text(leagueName);
            var leagueLogoEl = $("<img>").attr("src", leagueLogo);
            cardEl5.append(h1El, leagueLogoEl);
            dataIndex++;
        } 
        else {
        console.log("Country Not Found")
        dataIndex++;
    }


    } else if (leagueIdCheck[3] === resultObj[4].team.country) {
        
        var leagueName = "Premier League";
        var leagueLogo = "https://media.api-sports.io/football/leagues/39.png";
        
        if (dataIndex === 0) {
            var cardEl1 =  $("#league1Header")
            var h1El = $("<h1>").text(leagueName);
            var leagueLogoEl = $("<img>").attr("src", leagueLogo);
            cardEl1.append(h1El, leagueLogoEl);
            dataIndex++;
        } else if (dataIndex === 1) {
            var cardEl2 =  $("#league2Header")
            var h1El = $("<h1>").text(leagueName);
            var leagueLogoEl = $("<img>").attr("src", leagueLogo);
            cardEl2.append(h1El, leagueLogoEl);
            dataIndex++;
        } else if (dataIndex === 2) {
            var cardEl3 =  $("#league3Header")
            var h1El = $("<h1>").text(leagueName);
            var leagueLogoEl = $("<img>").attr("src", leagueLogo);
            cardEl3.append(h1El, leagueLogoEl);
            dataIndex++;
        } else if (dataIndex === 3) {
            var cardEl4 =  $("#league4Header")
            var h1El = $("<h1>").text(leagueName);
            var leagueLogoEl = $("<img>").attr("src", leagueLogo);
            cardEl4.append(h1El, leagueLogoEl);
            dataIndex++;
        } else if (dataIndex === 4) {
            var cardEl5 =  $("#league5Header")
            var h1El = $("<h1>").text(leagueName);
            var leagueLogoEl = $("<img>").attr("src", leagueLogo);
            cardEl5.append(h1El, leagueLogoEl);
            dataIndex++;
        } 
        else {
        console.log("Country Not Found")
        dataIndex++;
    }


    } else if (leagueIdCheck[4] === resultObj[4].team.country) {
        
        var leagueName = "Liga MX";
        var leagueLogo = "https://media.api-sports.io/football/leagues/262.png";
        
        if (dataIndex === 0) {
            var cardEl1 =  $("#league1Header")
            var h1El = $("<h1>").text(leagueName);
            var leagueLogoEl = $("<img>").attr("src", leagueLogo);
            cardEl1.append(h1El, leagueLogoEl);
            dataIndex++;
        } else if (dataIndex === 1) {
            var cardEl2 =  $("#league2Header")
            var h1El = $("<h1>").text(leagueName);
            var leagueLogoEl = $("<img>").attr("src", leagueLogo);
            cardEl2.append(h1El, leagueLogoEl);
            dataIndex++;
        } else if (dataIndex === 2) {
            var cardEl3 =  $("#league3Header")
            var h1El = $("<h1>").text(leagueName);
            var leagueLogoEl = $("<img>").attr("src", leagueLogo);
            cardEl3.append(h1El, leagueLogoEl);
            dataIndex++;
        } else if (dataIndex === 3) {
            var cardEl4 =  $("#league4Header")
            var h1El = $("<h1>").text(leagueName);
            var leagueLogoEl = $("<img>").attr("src", leagueLogo);
            cardEl4.append(h1El, leagueLogoEl);
            dataIndex++;
        } else if (dataIndex === 4) {
            var cardEl5 =  $("#league5Header")
            var h1El = $("<h1>").text(leagueName);
            var leagueLogoEl = $("<img>").attr("src", leagueLogo);
            cardEl5.append(h1El, leagueLogoEl);
            dataIndex++;
        } 
        else {
        console.log("Country Not Found")
        dataIndex++;
    }
}
return;
}



//  ------------------------------------------ End of Function --------------------------------

// Local Storage function for save My Teams
function saveLocalStorage(event){
    $(this).attr("fill", "red");
    
   var teamIdStored= JSON.parse(localStorage.getItem("favedTeam"))||[];
    
    var newSave= [
        ...teamIdStored,
        teamFavId,
        
    ];

    localStorage.setItem("favedTeam", JSON.stringify(newSave));

}



// Fav Button 
$(".star").on("click",saveLocalStorage);
$(".star").dblclick(function(){
    $(this).attr("fill", "black")
});

// Modal Function 
let modal = document.getElementById("popup-modal");

let btn = document.getElementById("open-btn");

let button = document.getElementById("no-btn");

btn.onclick = function () {
    modal.style.display = "block";
    
}

$("x-Btn").onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$("#a-z").click(function() {
    function sort(selector) {
        $(selector).children("#teamcard").sort(function(a, b) {
            var A = $(a).text().toUpperCase();
            var B = $(b).text().toUpperCase();
            return (A < B) ? -1 : (A > B) ? 1 : 0;
        }).appendTo(selector);
    }

});
