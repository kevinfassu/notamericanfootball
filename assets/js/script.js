var searchSubmit = $("#search-submit");

function handleSearchFormSubmit(event){
	event.preventDefault();
	console.log("function is starting");
	var inputSearch = $('#searchbar').val();
	var typeSearch = $('#modal').val();

	// if (!inputSearch){
	// 	return false;
	// }

	var queryString =  './searchResults.html?endpoint=' + "teams"+ '&search=' + "Manchester";
	location.assign(queryString);


}
searchSubmit.on("click",handleSearchFormSubmit);