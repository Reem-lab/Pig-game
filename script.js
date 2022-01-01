'use strict';

//select elemnts
const player0 = document.querySelector('.player--0')
const player1 = document.querySelector('.player--1')
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const current0 =document.getElementById('current--0');
const current1 =document.getElementById('current--1');
const message = document.querySelector('.message');


const diceImage = document.querySelector('.dice') //image
const btnNew =document.querySelector('.btn--new'); //btnNewgame
const btnRoll =document.querySelector('.btn--roll'); //btn NewRoll
const btnHold =document.querySelector('.btn--hold'); //btn NewHold

//initial conditions because it is static as 43 and 24 and hide the dice 
score0.textContent = 0;
score1.textContent = 0;
diceImage.classList.add('hidden');

const scores =[0, 0];
let currentScore= 0 ;
let activePlayer = 0;

let playing = true; // to finish the game

const switchPlayer = function (){
        // if one switch the roll
        //set the previous player it score to 0 then current score to next player to 0
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currentScore= 0; 

        //switch through ternary operator
        activePlayer = activePlayer === 0 ? 1 : 0 ;

        //to change the background color
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
}

//when you click the dice btnRoll 
btnRoll.addEventListener('click', function(){
    if(playing){
          //start roll the dice
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    //show the image and change with each image dice-1 and so on 
    diceImage.classList.remove('hidden');
    diceImage.src = `dice-${diceNumber}.png`;

    //make if not the dice 1 add old score to new score for the player0
    if(diceNumber !== 1){
        currentScore += diceNumber;
        // get the score by the active player if the first or the second
        document.getElementById(`current--${activePlayer}`).textContent = currentScore; 
       
    }else {
         //switch the roles
         switchPlayer();
          };
    };

});

btnHold.addEventListener('click', function(){
    if(playing){
         //add current score to the score 
    scores[activePlayer] += currentScore ; //add current score to the total score
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]; //display it on the screen 

    //check if the score equally or greater than 100
    if(scores[activePlayer] >= 100 ){
     //finish the game   
     playing = false ;
     diceImage.classList.add('hidden');//make the image disapear
     message.classList.add('message');

     document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
     document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

    }else {
    //switch the roles 
    switchPlayer();
      };
    };
});


btnNew.addEventListener('click', function(){  
    let scores =[0, 0];
    let currentScore= 0 ;
    let activePlayer = 0;
    let playing = true;

    //document.getElementById(`current--${activePlayer}`).textContent = 0; 
    current0.textContent =0;
    current1.textContent = 0 ;
    score0.textContent = 0;
    score1.textContent = 0;
    diceImage.classList.add('hidden');

    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');

   // document.querySelector(`#score--${activePlayer}`).textContent = 0;

    //document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
   // document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
})