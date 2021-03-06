var champArray = [];
var logoArray = [];
var index = 0;
let leagueId;
let strChamp;
let htmlImg;
let htmlChamp;
let idArray

searchArray();
// Grabbing top teams from API
function searchArray() {
	let standingSort;
	const settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://api-football-v1.p.rapidapi.com/v3/standings?season=2021&league=39",
		"method": "GET",
		"headers": {
			"X-RapidAPI-Key": "7c1d331df8msh9322aee26b0f534p1d832bjsn27c5f09f0a59",
			"X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
		}
	};

	$.ajax(settings).done(function (response) {
		console.log(response);
		standingSort = response.response[0].league.standings[0];
		leagueId = response.response[0].league.id;
		console.log(leagueId)
		console.log(standingSort)
		for (let i = 0; i < 5; i++) {
			console.log(standingSort[i].team);
			var nameArray = standingSort[i].team.name;
			var tempLogoArray = standingSort[i].team.logo;
			idArray = standingSort[i].team.id;
			champArray.push(nameArray);
			logoArray.push(tempLogoArray)
			strChamp = JSON.stringify(champArray[i]);
			var strImg = JSON.stringify(logoArray[i])
			htmlChamp = strChamp.replaceAll("\"", "");
			htmlImg = strImg.replaceAll("\"", "");
			console.log(htmlImg);
			console.log(htmlChamp);
			printResults(htmlChamp);
		}
		console.log(champArray);
	});
}
// Render results top five teams 
function printResults() {

	console.log(index);

	var topEl1 = document.getElementById("top-1")
	var topEl2 = document.getElementById("top-2")
	var topEl3 = document.getElementById("top-3")
	var topEl4 = document.getElementById("top-4")
	var topEl5 = document.getElementById("top-5")
	var imgEl1 = document.getElementById("img-1")
	var imgEl2 = document.getElementById("img-2")
	var imgEl3 = document.getElementById("img-3")
	var imgEl4 = document.getElementById("img-4")
	var imgEl5 = document.getElementById("img-5")
	var divEl1 = document.getElementById("butDiv1")
	var divEl2 = document.getElementById("butDiv2")
	var divEl3 = document.getElementById("butDiv3")
	var divEl4 = document.getElementById("butDiv4")
	var divEl5 = document.getElementById("butDiv5")


	if (index === 0) {
		console.log(idArray)
		var idEndpoint1 =  './assets/pages/teams.html?teamid=' + idArray + "&league=" + leagueId;
		divEl1.setAttribute("href", idEndpoint1)
		imgEl1.src = htmlImg;
		topEl1.textContent = htmlChamp;
		console.log("1El Appended",htmlChamp, imgEl1)
	} else if (index === 1) {
		console.log(idArray)
		var idEndpoint2 =  './assets/pages/teams.html?teamid=' + idArray + "&league=" + leagueId;
		divEl2.setAttribute("href", idEndpoint2)
		imgEl2.src = htmlImg;
		topEl2.textContent = htmlChamp;
		console.log("2El Appended",htmlChamp, imgEl2)
	} else if (index === 2) {
		console.log(idArray)
		var idEndpoint3 =  './assets/pages/teams.html?teamid=' + idArray + "&league=" + leagueId;
		divEl3.setAttribute("href", idEndpoint3);
		imgEl3.src = htmlImg;
		topEl3.textContent = htmlChamp;
		console.log("3El Appended",htmlChamp, imgEl3)
	} else if (index === 3) {
		console.log(idArray)
		var idEndpoint4 =  './assets/pages/teams.html?teamid=' + idArray + "&league=" + leagueId;
		divEl4.setAttribute("href", idEndpoint4);
		imgEl4.src = htmlImg;
		topEl4.textContent = htmlChamp;
		console.log("4El Appended",htmlChamp,imgEl4)
	} else if (index === 4) {
		console.log(idArray)
		var idEndpoint5 =  './assets/pages/teams.html?teamid=' + idArray + "&league=" + leagueId;
		divEl5.setAttribute("href", idEndpoint5)
		imgEl5.src = htmlImg;
		topEl5.textContent = htmlChamp;
		console.log("5El Appended",htmlChamp,imgEl5)
	}
	index++;
	return;
}

// Grab video infromation from API 
  fetch('https://www.scorebat.com/video-api/v3/feed/?token=MjA4MzJfMTY1NTA5MjAzOV84YWM3ZGQ3MzA5NDY2YjIzMTIwZjAzYTNiNDhhNmYxMWFmYzNlYTBm')
  .then(response => response.json())
  .then(data => {
	for(let i=0; i < 8; i++ ){
		renderVids(data.response[i])
	}
  });

// Render Videos 
function renderVids(resultObj){
	var videoBody = $("<div></div").attr("class", "card").appendTo("#video-card");
        var videoCard = $("<div></div>").appendTo(videoBody);

		var videoTitle = $("<h3></h3>");
		videoTitle.text(resultObj.title);

		var compTitle = $("<p></p>");
		compTitle.text(resultObj.competition);

		var videoEmbed =$(resultObj.videos[0].embed) 
		console.log(resultObj.videos[0].embed);

		videoBody.append(videoTitle, compTitle, videoEmbed);

}
  






// Event Listener from drop down button 
$(function() {
	$('#dropdownBtn').click(function()
	{
		$('#drop-down-menu').removeClass("hidden")
		$(this).addClass("block");
		
		
	})
});


	$('#mobile-btn').click(function()
	{
		if($("#hide-mobile").hasClass("hidden")){
			$('#hide-mobile').removeClass("hidden").addClass("block");
			$('#show-mobile').removeClass("block").addClass("hidden");
			
		}
		
		
	})

