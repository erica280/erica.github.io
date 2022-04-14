const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "A rainy night in Gotham City, it was 35 fahrenheit outside, so :insertx: went to fight crime. When he got :inserty:, a group of teens harassing an old man was seen. He slowly began to emerge from the dark, then :insertz:. Catwoman saw the whole thing, but was not surprised — :insertx: weighs 185 pounds and is a beloved treasure of Gotham.";
const insertX = ["Bruce Wayne", "Batman", "Battinson"];
const insertY = ["to the subway", "under the bridge", "to the alley"];
const insertZ = ["did a triple roundhouse kick", "knocked out each of the teens", "threw a punch to the faces of each of the teens"];

randomize.addEventListener('click', result);

function result() {
  var newStory = storyText;
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(/:inserty:/g, yItem);
  newStory = newStory.replace(/:insertz:/g, zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace(/Catwoman/g, name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14)+" stones";
    const temperature =  Math.round(5/9*(94-32))+" celsius";

    newStory = newStory.replace(/185 pounds/g, weight);
    newStory = newStory.replace(/35 fahrenheit/g, temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
