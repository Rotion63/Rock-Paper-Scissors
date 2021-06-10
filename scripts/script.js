//setting all the score before playing game.
let playerScore=0;
let computerScore=0;
let playerChoice='';
let currentRound=0;
let updateText='';

//Access the all player Buttons
const playerButtons=document.querySelectorAll('div.playerButton button');
const pRock=document.querySelector('pRock');
const pPaper=document.querySelector('pPaper');
const pScissors=document.querySelector('pScissors');

//show the result above button
const showResult=document.getElementById('showResult');

//show the result in the scorebox.
const pScore=document.getElementById('playerScore');
const cScore=document.getElementById('computerScore');

//show the final result
const finalResult= document.querySelector('div.finalResult p');



playerButtons.forEach(button => {//when pressing any button trigering this event
    button.addEventListener("click", () => {

    if(button.name=='Rock'){
        playerChoice=button.name;
        playRound(playerChoice,computerChoice());
        scoreUpdate();
        checkForWinner();
    }else if(button.name=='Paper'){
        playerChoice=button.name;
        playRound(playerChoice,computerChoice());
        scoreUpdate();
        checkForWinner();
    }else if(button.name=='Scissors'){
        playerChoice=button.name;
        playRound(playerChoice,computerChoice());
        scoreUpdate();
        checkForWinner();
    }

});
    
});


function computerChoice(){

    let outputNames =["Rock","Paper","Scissors"];

    let randomNumber = Math.floor(Math.random()*outputNames.length); // calculate the random number within the range of outputNames.
   let randomOutputNames =outputNames[randomNumber];
    return randomOutputNames;
}

function playRound(playerSelection,computerSelection){//check the button pressed by player and selction by computer and check for winner.
    computerSelection=computerChoice();
    playerSelection=playerChoice;


    if((computerSelection=="Rock" && playerSelection=="Scissors") || (computerSelection=="Paper" && playerSelection=="Rock") || (computerSelection=="Scissors" && playerSelection=="Paper")){

        showResult.style.cssText='color:red;';
        showResult.textContent=`You Lose: ${computerSelection} Beats ${playerSelection}`;
        computerScore++;
        currentRound++;

        gameLog(showResult.textContent);

    }else if((computerSelection=="Rock" && playerSelection=="Paper") || (computerSelection=="Paper" && playerSelection=="Scissors") || (computerSelection=="Scissors" && playerSelection=="Rock")){
        
        showResult.style.cssText='color:green;';
        showResult.textContent=`You Win: ${playerSelection} Wins ${computerSelection}`;

        playerScore++;
        currentRound++;

        gameLog(showResult.textContent);

    }else{
        showResult.style.cssText='color:black;';
        showResult.textContent= `Tie: ${playerSelection} = ${computerSelection}`;
        currentRound++;

        gameLog(showResult.textContent);


    }
}

function scoreUpdate(){//update the score to score text.

    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
    
}

function gameLog(roundResult){//shows the gamelog.
    const logTable=document.querySelector('#logTable');
    const roundResultShow=document.createElement('div');
    roundResultShow.style.cssText=('display:flex; width:450px; justify-content:left; font-size:20px;');

    roundResultShow.classList.add('showThis');

    roundResultShow.textContent=`Round ${currentRound}: ${roundResult}`//put the roundResult in the text content of roundResultShow
    logTable.appendChild(roundResultShow);

}




function disableButtons() {//disable the button after winner is decided.
    document.getElementById("pRock").disabled = true;
    document.getElementById("pPaper").disabled = true;
    document.getElementById("pScissors").disabled = true;
  }

  // Game function that plays a set number of rounds and displays the result
function checkForWinner() {
  
    if (playerScore === 5 || computerScore === 5) {
        if(playerScore>computerScore){

      finalResult.style.cssText=('color:green');
      finalResult.textContent = "Congratulations! You Win.";
      disableButtons();
    } else if(playerScore<computerScore) {
        finalResult.style.cssText=('color:red');
      finalResult.textContent = "Sorry!! You Lost. Better Luck Next Time.";
      disableButtons();
    } 
  }
}