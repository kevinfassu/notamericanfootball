var searchSubmit = $("#search-submit");
let type;

// Grabbing inputs from search bar and sending them to the window 
function dropDownVal(event){
	var	categoryCapture = event.target;
     type = $(categoryCapture).text().trim();
    return;
}


function handleSearchFormSubmit(event){
	event.preventDefault();
	console.log("function is starting");
	var inputSearch = $('#searchbar').val();
	 var typeSearch = type;

	

	 var queryString =  './searchResults.html?endpoint=' + typeSearch + '&search=' + inputSearch;
	 location.assign(queryString);


}

 

$('#drop-down-menu section').click(dropDownVal);
searchSubmit.on("click",handleSearchFormSubmit);
