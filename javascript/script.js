var p = document.querySelector('p');
var paragraph = document.getElementById('paragraph');

p.addEventListener("mouseover", function(){
  paragraph.style.background = "#FFC1BA";
});

p.addEventListener("mouseout", function(){
  paragraph.style.background = "#E8AFA9";
});

var button = document.querySelector('button');
var box = document.getElementById('changeMe');

function changeColor(){
  if(box.style.background == 'lightpink'){
    box.style.background = 'lightgray';
  }else{
    box.style.background = 'lightpink';
  }
}
