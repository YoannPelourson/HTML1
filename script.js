//Select the div via it's id and store the selected element inside gameContainer var.
let gameContainer = document.querySelector('#game-container');
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
  //si toutes divs sont rouge GG
  //si aucune divs n'est verte GG
};

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
          // on va inverser la couleur de la div gauche et de la div droite
       }  else if (i == 0) {
         invertColor(childDivs [i + 1]);
         //on va inverser la couleur de la div  droite
       }  else if ( i == (childDivs.length - 1)) {
         invertColor(childDivs [i - 1]);
         //on va inverser la couleur de la div gauche
       }







    }
  }
    checkVictory(childDivs);
});
