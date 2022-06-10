



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7c1d331df8msh9322aee26b0f534p1d832bjsn27c5f09f0a59',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

fetch('https://api-football-v1.p.rapidapi.com/v3/', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err))
	.then(function (response) {
		return response.json()
	})
	.then(function (data) {
		console.log(data)
	});


const twtOptions = {
	method: "GET",
	headers: {
		'Authorization': 'Bearer' + 'AAAAAAAAAAAAAAAAAAAAAH01dgEAAAAADrG3yG8hXBXxOYFCAuTnI2RrB74%3DfrbGgECz6VCpDY40FDEqtaonGivL50BO9lL955EfqkDhSkbmw1'
	}
}
//need to grab cors proxy again
fetch('https://api.twitter.com/2/tweets', twtOptions)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err))
	.then(function (response) {
		return response.json()
	})
	.then(function (data) {
		console.log(data)
	});






	function top5 () {
		var topArray = [top1El, top2El, top3El, top4El, top5El]
		var top1El = $("#top-1")
		var top2El = $("#top-2")
		var top3El = $("#top-3")
		var top4El = $("#top-4")
		var top5El = $("#top-5")
	}


