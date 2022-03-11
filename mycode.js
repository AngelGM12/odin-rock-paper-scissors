let res = "a ";
let arr = ["rock", "paper", "scissors"];
let index = " ";

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const divres = document.querySelector(".results");
const newgm = document.querySelector('#newgame');
let counter = 1;

let player=0;
let com=0;


function computerPlay() {
    
    index = Math.floor(Math.random() * arr.length); 
    return arr[index];
    
}

function playRound(computerSelection , playerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
    if(counter < 5){
        counter++;
        if (computerSelection === playerSelection ){
            res = "Its a tie";
            return res;
        }
        if(computerSelection === "rock" && playerSelection === "paper"){
            res ="You win";
            player++;
            return res;
        }
        if(computerSelection === "rock" && playerSelection === "scissors"){
            res ="Computer wins";
            com++;
            return res;
        }
        if(computerSelection === "paper" && playerSelection === "rock"){
            res ="Computer wins";
            com++;
            return res;
        }
        if(computerSelection === "paper" && playerSelection === "scissors"){
            res ="You win";
            player++;
            return res;
        }
        if(computerSelection === "scissors" && playerSelection === "paper"){
            res ="Computer wins";
            com++;
            return res;
        }
        if(computerSelection === "scissors" && playerSelection === "rock"){
            res ="You win";
            player++;
            return res;
        }
        
    }
    else{
        
        disableBtns();
        getWinner();
        
    }
    
    
    
}
function getWinner(){
    if(player>com){
        console.log("Player won");
        divres.textContent = "PlayerWon";
    }
    if(player<com){
        console.log("computer won");
        divres.textContent = "Computer Won";

    }
    if(player==com){
        console.log("Its a tie");
        divres.textContent = "It's a tie";
    }
    document.getElementById("newgame").hidden = false;
    
}

function disableBtns() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    
}
function enableBtns() {
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
}
function game(){
    /*for (let i = 0; i<5; i++){
        
    }
    let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    let computerSelection = computerPlay();
    console.log(playRound(computerSelection,playerSelection));*/
}
function newGame(){
    enableBtns();
    counter = 1;
    player = 0;
    com = 0;
    document.getElementById("newgame").hidden = true;
}


newgm.addEventListener('click', () =>{
    newGame();
} );

rock.addEventListener('click', () =>{
    let compselect = computerPlay();
    //console.log(playRound(compselect, "rock"));
    divres.textContent = playRound(compselect, "rock");
    
    //console.log(btns);
    console.log(counter);
});
paper.addEventListener('click', () =>{
    let compselect = computerPlay();
    //console.log(playRound(compselect, "paper"));
    divres.textContent = playRound(compselect, "paper");
    
    console.log(counter);
});
scissors.addEventListener('click', () =>{
    let compselect = computerPlay();
    //console.log(playRound(compselect, "scissors"));
    divres.textContent = playRound(compselect, "scissors");
    
    console.log(counter);
});


if(counter == 5){
    console.log("Game done")
}
