/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with

let musicPlayer = document.querySelector(".player");
let realPlayer = document.querySelector(".music-player");
let searchArea = document.querySelector(".search");
let searchBar = document.querySelector(".search-form");
let resultsForm = document.querySelector(".results");
let baseUrl = "https://itunes.apple.com/search?term=" // assigned to a variable so we can easily access it later


let button = document.getElementById("searchButton");

let textInput = "";

// 2. Create your `submit` event for getting the user's search term

searchBar.addEventListener("submit", function (makeSearchBarString){ 
  makeSearchBarString.preventDefault()
  textInput = makeSearchBarString.target.querySelector('input[name = "search"]').value
  console.log(textInput);

// 3. Create your `fetch` request that is called after a submission
// use this link :

  fetch(baseUrl + textInput + "&limit=24")
  .then(function(response){
  console.log(response.status);
  response.json()

    .then(function(data){
      let songAndArtists = data.results;
      console.log(songAndArtists);
      console.log(songAndArtists.length);
    })


// 4. Create a way to append the fetch results to your page

// here is where i will have my for loop

for (i = 0; i < 24; i++){

}


})
})








// 5. Create a way to listen for a click that will play the song in the audio play

/* Calvins code

const form = document.querySelectorAll('form')[0]
const baseUrl = 'http://www.recipepuppy.com/api/'
let results
form.addEventListener('submit', function (event) {
  event.preventDefault()
  console.log(this)
  const nameInputValue = event.target.querySelector('input[name="name"]').value
  const emailInputValue = event.target.querySelector(
    'input[name="email"]'
  ).value

*/