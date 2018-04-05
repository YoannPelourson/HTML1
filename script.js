//Select the div via it's id and store the selected element inside gameContainer var.
let gameContainer = document.querySelector('#game-container');
let resetButton = document.querySelector('#reset-button');
let score = 0;
const casNumber = 6;

function init(){
  let gameContainerDiv = document.createElement('div');
  gameContainerDiv.id = "game-container";
  for (var i = 1; i <= casNumber; i++) {
    let tempDiv = document.createElement('div');
    tempDiv.className = "green-color";
    gameContainerDiv.appendChild(tempDiv);
  }
  document.querySelector(' data-use=gameBoardContainer').appendChild(gameContainerDiv);
  let reinitButton = document.createElement('input');
  reinitButton.setAttribute('type', 'button');
  reinitButton.setAttribute('value', 'reinit');
  reinitButton.setAttribute('data-action', 'reinit');
}

function invertColor(div){
  let green = "green-color";
  let red = "red-color";
  if(div.classList.contains(green)){
    div.classList.remove(green);
    div.classList.add(red);
  } else {
    div.classList.remove(red);
    div.classList.add(green);
  };
};
function restart(div){
  let green = "green-color";
  let red = "red-color"
  if(div.classList.contains(red)){
    div.classList.remove(red);
    div.classList.add(green);
  };
};
//Defeat condition
function checkDefeat(divs){
  let defeatStatus = true ;
  for (let i = 0; i < divs.length; i++) {
    if(divs[i].classList.contains('green-color')){
      defeatStatus = true;
      break;
    }
  }
    if(defeatStatus == true) {
      setTimeout(function(){
        alert('you lose');
      }, 500);
    }
  }




//Victory check
function checkVictory(divs){
  let victoryStatus = true;
  for (let i = 0; i < divs.length; i++) {
    if(divs[i].classList.contains('green-color')){
      victoryStatus = false;
      break;
    }

  }
  if(victoryStatus == true) {
    setTimeout(function(){
    alert('GG WP!');

  }, 500);

  }

};
  document.getElementById('compteur').innerHTML = score;

//When someone clicks on anything inside the game container, it triggers the anonymous function.
gameContainer.addEventListener('click', function(el){



  let childDivs = document.querySelectorAll('#game-container>div');
//We get the target of te click event, which is the specific div and not the container div.
  let clickedElement = el.target;


  for(let i = 0; i < childDivs.length; i++)


  {
//childDivs[i] allow us ti display every value of the childDivs Array because we select it via the array key [i]


    //if this is the div we clicked on.
     if (childDivs[i] == clickedElement) {


       if (i > 0 && i<(childDivs.length - 1)) {
         invertColor(childDivs [i + 1]);
         invertColor(childDivs [i - 1]);
         invertColor(childDivs [i]);
          // on va inverser la couleur de la div gauche et de la div droite
       }  else if (i == 0) {
         invertColor(childDivs [i + 1]);
         invertColor(childDivs [i]);
         //on va inverser la couleur de la div  droite
       }  else if ( i == (childDivs.length - 1)) {
         invertColor(childDivs [i - 1]);
         invertColor(childDivs [i]);
         //on va inverser la couleur de la div gauche
       }







    }
  }
    score++;
    document.getElementById('compteur').innerHTML = score;
    if(score > 4){
      checkDefeat(childDivs);

    }

    checkVictory(childDivs);

});

  resetButton.addEventListener('click',function(el){
    let childDivs = document.querySelectorAll('#game-container>div');
    let reset = document.querySelectorAll('#reset-button>div');
    for(let i = 0; i < childDivs.length; i ++){
      restart(childDivs [i]);
      score = 0;
      document.getElementById('compteur').innerHTML = score;

    }






  });
