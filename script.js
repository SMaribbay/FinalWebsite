var firstDiv = document.getElementById('favorites')

let favoriteMovies = [

];

for (let i = 0; i < favoriteMovies.length; i++) {
  creatingElements(favoriteMovies[i]);
}
function creatingElements(incomingMovie) {

  let newMovie = document.createElement("div");
  newMovie.classList.add ("newMovie");

  let filmTitle = document.createElement("h2");
  filmTitle.classList.add ("filmTitle");
  filmTitle.innerText = incomingMovie['film'];
  newMovie.appendChild(filmTitle);


  let directorSlide = document.createElement("DIV");
  newMovie.appendChild(directorSlide);
  directorSlide.classList.add("directorSlide");
  let innerTextOne = document.createElement("p");
  innerTextOne.innerText = incomingMovie['director'];
  directorSlide.appendChild(innerTextOne);



  let poster = document.createElement("IMG");
  poster.classList.add("poster");
  poster.src = incomingMovie["poster"];
  newMovie.appendChild(poster);


  firstDiv.appendChild(newMovie);
}
{
  const config = {

  }
     new Glide('.glide',).mount()
}
