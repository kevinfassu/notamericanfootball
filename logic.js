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
	.catch(err => console.error(err));
.then(function (response) {
  return response.json();
}) 
.then(function (data) {
    console.log(data)
    for (var i = 0; i < data.length; i++) {
        // Creating elements, tablerow, tabledata, and anchor
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var link = document.createElement('a');

        // Setting the text of link and the href of the link
        link.textContent = data[i].html_url;
        link.href = data[i].html_url;

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        tableBody.appendChild(createTableRow);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
      }
    });