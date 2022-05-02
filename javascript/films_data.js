let movies = {
  "titles": "Find Your Next Favorite Film",
  "films_list":[
    {
      "film_name": "Interstellar",
      "director": "Christopher Nolan",
      "release_date": 2014,
    },
    {
      "film_name": "Tenet",
      "director": "Christopher Nolan",
      "release_date": 2020,
    },
    {
      "film_name": "Inception",
      "director": "Christopher Nolan",
      "release_date": 2010,
    }
  ],
}

function populateHeader(obj) {
  const header = document.querySelector('header');
  const myH1 = document.createElement('h1');

  myH1.textContent = obj['titles'];
  console.log(myH1);
  header.appendChild(myH1);
}

function populateFilms(obj) {
  const section = document.querySelector('section');
  const films = obj['films_list'];

  for (const film of films){
    const myH2 = document.createELement('h2');
    const myPara1 = document.createElement('p');

    myH2.textContent = film.film_name;
    myPara1.textContent = film.director;
    myPara1.textContent = film.release_date;
  }
}

populateHeader(movies);
populateFilms(movies);
