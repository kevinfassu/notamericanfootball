var resultTitleEl = $("#search-title");
var resultContentEl = $('#search-content');

function pullSearchParams(){
    //getting search params out of URL into an array
    var paramsArray = document.location.search.split('&');
    console.log(paramsArray);
    //Getting input and type values
    var searchType = paramsArray[0].split('=').pop().toLowerCase();
    console.log(searchType);
    var searchInput = paramsArray[1].split('=').pop().toLowerCase();
    console.log(searchInput);
   
     searchApi (searchType, searchInput)
}
pullSearchParams();

function searchApi (searchType, searchInput) {
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
    .then(data =>
        {for (var i=0; i < data.response.length; i++){
            renderResults(data.results[i]);
        }
        })
}; 

function renderResults(resultObj){
    console.log(resultObj);
    var resultsCard = 
}
