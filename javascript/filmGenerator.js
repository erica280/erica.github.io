async function getFilm() {
  console.log("quote button was clicked");
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText)
    }
    const json = await response.json();
    console.log(json);
    displayFilm(json.Title);
  }catch(err) {
    console.log(err)
    alert('Failed');
  }
}
function displayFilm(film) {
  const filmText = document.querySelector('#js-quote-text');
  filmText.textContent = film;
}

const endpoint = 'http://www.omdbapi.com/?i=tt3896198&apikey=70cbd268';
const filmButton = document.querySelector('#js-new-film');
filmButton.addEventListener('click', getFilm);
