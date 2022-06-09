var requestUrl = 'https://api.github.com/orgs/nodejs/repos';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7c1d331df8msh9322aee26b0f534p1d832bjsn27c5f09f0a59',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

fetch('rapidapi.com', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err))
.then(function (response) {
  return response.json()
}) 
.then(function (data) {
    console.log(data)
    });
    