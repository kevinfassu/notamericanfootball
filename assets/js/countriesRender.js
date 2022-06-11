const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api-football-v1.p.rapidapi.com/v3/countries",
    "method": "GET",
    "headers": {
        "X-RapidAPI-Key": "7c1d331df8msh9322aee26b0f534p1d832bjsn27c5f09f0a59",
        "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
});






function displayCountries(data) {
    const countries = data.name[0];
    const countriesDiv = document.getElementById("countries");
    
  
  const countriesName = cocktail.strDrink;
  const heading = document.createElement("h1");
  heading.innerHTML = cocktailName;
  cocktailDiv.appendChild(heading);
  //const cocktailImg = document.createElement("img");
  //cocktailImg.src = cocktail.strDrinkThumb;
  //cocktailDiv.appendChild(cocktailImg);
  //document.body.style.backgroundImage = "url('" + cocktail.strDrinkThumb + "')";