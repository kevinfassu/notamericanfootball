var champArray = [];
var logoArray = [];

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
			console.log(champArray);
		}
		console.log(champArray);
	});
	printResults();
	return champArray;
}

searchArray();
function printResults() {
	console.log(champArray)
	console.log(logoArray)
	for (let i = 0; i < 5; i++) {
		console.log(champArray)
		console.log(logoArray)
	}
	var top1El = $("#top-1")
	var top2El = $("#top-2")
	var top3El = $("#top-3")
	var top4El = $("#top-4")
	var top5El = $("#top-5")
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

