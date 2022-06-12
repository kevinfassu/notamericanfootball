var champArray = [];
var logoArray = [];
var index = 0;
let strChamp;
let htmlImg;
let htmlChamp;

searchArray();

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
		console.log(standingSort)
		for (let i = 0; i < 5; i++) {
			console.log(standingSort[i].team);
			var nameArray = standingSort[i].team.name;
			var tempLogoArray = standingSort[i].team.logo;
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


	if (index === 0) {
		imgEl1.src = htmlImg;
		topEl1.textContent = htmlChamp;
		console.log("1El Appended",htmlChamp, imgEl1)
	} else if (index === 1) {
		imgEl2.src = htmlImg;
		topEl2.textContent = htmlChamp;
		console.log("2El Appended",htmlChamp, imgEl2)
	} else if (index === 2) {
		imgEl3.src = htmlImg;
		topEl3.textContent = htmlChamp;
		console.log("3El Appended",htmlChamp, imgEl3)
	} else if (index === 3) {
		imgEl4.src = htmlImg;
		topEl4.textContent = htmlChamp;
		console.log("4El Appended",htmlChamp,imgEl4)
	} else if (index === 4) {
		imgEl5.src = htmlImg;
		topEl5.textContent = htmlChamp;
		console.log("5El Appended",htmlChamp,imgEl5)
	}
	index++;
	return;
}


// fetch('https://cors-anywhere.herokuapp.com/https://api.twitter.com/2/', twtOptions)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err))
// 	.then(function (response) {
	// 		return response.json()
	// 	})
	// 	.then(function (data) {
// 		console.log(data)
// 	})
// 	.catch((error) => console.error("FETCH ERROR", error));






// const twtOptions = {
// 		method: "GET",
// 	 	headers: {
// 				'Authorization': 'Bearer' + 'AAAAAAAAAAAAAAAAAAAAAH01dgEAAAAADrG3yG8hXBXxOYFCAuTnI2RrB74%3DfrbGgECz6VCpDY40FDEqtaonGivL50BO9lL955EfqkDhSkbmw1'
// 			}
//  }

// //need to grab cors proxy again
//  fetch('https://cors-anywhere.herokuapp.com/corsdemo/https://api.twitter.com/2/', twtOptions)
// 	.then(response => response.json())
//  	.then(response => console.log(response))
// 	.catch(err => console.error(err))
//  	.then(function (response) {
//  		return response.json()
//  	})
//  	.then(function (data) {
// 		console.log(data)
//  	})
//  	.catch((error) => console.error("FETCH ERROR", error));



$(function() {
	$('#dropdownBtn').click(function()
	{
		$('#drop-down-menu').removeClass("hidden")
		$(this).addClass("block");
		
		
	})
});

