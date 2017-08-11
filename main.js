let musicPlayer = document.querySelector(".player");
let realPlayer = document.querySelector(".music-player");
let searchArea = document.querySelector(".search");
let searchBar = document.querySelector(".search-form");
let resultsForm = document.querySelector(".results");
let baseUrl = "https://itunes.apple.com/search?term=" // assigned to a variable so we can easily access it later

function playSong(url){
  realPlayer.setAttribute("src", url);
}

function clearResults(){
  resultsForm.innerHTML = "";

}

// resultsForm.innerHTML = <img src = "https://viralviralvideos.com/wp-content/uploads/GIF/2014/08/Dancing-GIF.gif">

let button = document.getElementById("searchButton");

let textInput = "";


searchBar.addEventListener("submit", function (makeSearchBarString){ 
  makeSearchBarString.preventDefault()
  textInput = makeSearchBarString.target.querySelector('input[name = "search"]').value
  console.log(textInput);


  clearResults();

  fetch(baseUrl + textInput + "&limit=24")
  .then(function(response){
  console.log(response.status);
  response.json()

    .then(function(data){
      let songsAndArtists = data.results;
      console.log(songsAndArtists);
      console.log(songsAndArtists.length);
      function musicPage(music){
            let html =`
                <div class = "boxContainer">
                <div class = "audio" onclick = "playSong('${music.previewUrl}')" >
                  <img src = "${music.artworkUrl100}" alt = "Album Art">
                    <ul>
                      <li><span>${music.trackCensoredName}</span></li>
                      <li>${music.artistName}</li>
                    </ul>
                </div>
                </div>
            `;
          return html;
  }

    console.log(musicPage);

      for (i = 0; i < 24; i++){
        let music = songsAndArtists[i];
        
       

// previewUrl -- preview audio
// artworkUrl100 -- thumbnail
// trackCensoredName -- song title
// artistName -- artist name

let addMusicToPage = musicPage(songsAndArtists[i]);
resultsForm.innerHTML += addMusicToPage;

}



})


})
})
