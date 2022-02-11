let res = "a ";
let arr = ["rock", "paper", "scissors"];
let index = " ";



function computerPlay() {
    
    index = Math.floor(Math.random() * arr.length); 
    return arr[index];
    
}

function playRound(computerSelection , playerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
    if (computerSelection === playerSelection ){
        res = "Its a tie";
        return res;
    }
    if(computerSelection === "rock" && playerSelection === "paper"){
        res ="You win";
        return res;
    }
    if(computerSelection === "rock" && playerSelection === "scissors"){
        res ="Computer wins";
        return res;
    }
    if(computerSelection === "paper" && playerSelection === "rock"){
        res ="Computer wins";
        return res;
    }
    if(computerSelection === "paper" && playerSelection === "scissors"){
        res ="You win";
        return res;
    }
    if(computerSelection === "scissors" && playerSelection === "paper"){
        res ="Computer wins";
        return res;
    }
    if(computerSelection === "scissors" && playerSelection === "rock"){
        res ="You win";
        return res;
    }
    

}

function game(){
    for (let i = 0; i<5; i++){
        let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        let computerSelection = computerPlay();
        console.log(playRound(computerSelection,playerSelection));
    }
    
}
game();



//console.log(testtring());