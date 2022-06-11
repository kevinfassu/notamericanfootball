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
    console.log(searchInput);
    console.log(searchType);

    var searchUrl = `https://api-football-v1.p.rapidapi.com/v3/${searchType}?search=${searchInput}`;
    console.log(searchUrl);
}