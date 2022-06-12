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
    var resultsCard = $("<div></div>").attr( "class", "block p-4 max-w-md bg-stone-300 border-gray-200 shadow-sm hover:bg-stone-500").appendTo("#search-content");
    var cardTitleEl = $("<h3></h3>").attr("class", "mb-3 text-lg font-semibold text-gray-900").appendTo(resultsCard);
    cardTitleEl.text(resultObj.team.name);
    var logoEl = $("<img></img").attr("src");
        logoEl.text(resultObj.team.logo);
    var countryEl = $("<p></p>").attr("class", "font-normal, mb-1, text-stone-500");
        countryEl.text(resultObj.team.country);
    var dateEl = $()
   
    
}

