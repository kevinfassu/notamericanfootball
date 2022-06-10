var searchSubmit = $("#search-submit")

function handleSearchFormSubmit(event){
	event.preventDefault();

	var inputSearch = $('#searchbar').val();
	var typeSearch = $('#modal').val();

	if (!inputSearch){
		return false;
	}

	var queryString = '/' + typeSearch + 'search=' + inputSearch;
	location.assign(queryString);


}
searchSubmit.submit(handleSearchFormSubmit);