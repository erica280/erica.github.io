async function getFilm(num) {
  console.log("quote button was clicked");
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText)
    }
    const json = await response.json();
    console.log(json);
    displayFilm(json.results[num].original_title);
  }catch(err) {
    console.log(err)
    alert('Failed');
  }
}
function displayFilm(film) {
  const filmText = document.querySelector('#js-quote-text');
  filmText.textContent = film;
}

const endpoint = 'https://api.themoviedb.org/3/discover/movie?api_key=74d3057f71540a65a5b5bc0f2fa1d29c';
const filmButton = document.querySelector('#js-new-film');
// var num = (Math.Floor(Math.random()*19);
function myCallback(){
  const random_index = (Math.floor(Math.random() * 19));
  getFilm(random_index);
}

filmButton.addEventListener('click', myCallback);
