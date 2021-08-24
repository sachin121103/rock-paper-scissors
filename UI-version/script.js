const buttons = document.querySelectorAll('input');
let playerScore = 0;
let compScore = 0;

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random()* choices.length)];
}

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true
    })
}

function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

function playRound(playerSelection) {
    let result = ""
    let compSelection = computerPlay();

    if ((compSelection == 'rock' && playerSelection == 'paper') || 
    (compSelection == 'paper' && playerSelection == 'scissors') ||
    (compSelection == 'scissors' && playerSelection == 'rock')
    ) {

        playerScore++;
        result = result = (`You win! ${toTitleCase(playerSelection)} beats ${toTitleCase(compSelection)}
        <br><br>Player score: ${playerScore} <br>Computer score: ${compScore}`)


        if (playerScore == 5) {
            result += '<br>You won the game!. <br>Reload to play again!'
            disableButtons()

    }}

    else if ((compSelection == 'rock' && playerSelection == 'scissors') || 
    (compSelection == 'paper' && playerSelection == 'rock') ||
    (compSelection == 'scissors' && playerSelection == 'paper')) 

    {
        compScore++;
        result = (`I win! ${toTitleCase(compSelection)} beats ${toTitleCase(playerSelection)}
        <br><br>Player score: ${playerScore} <br>Computer score: ${compScore}`);

        if (compScore == 5) {
            result += '<br>I won the game!<br>Reload to play again!'
            disableButtons()
        }

    }

    else if (playerSelection == compSelection) {
        result = ("It's a tie!");
    }


    document.getElementById('result').innerHTML = result
    return

    }

buttons.forEach(button =>{
    button.addEventListener('click', function(){
            playRound(button.value)
    })
})