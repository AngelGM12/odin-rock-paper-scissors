let res = "a ";
let arr = ["rock", "paper", "scissors"];
let index = " ";

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const divres = document.querySelector("#results");
const finalRes= document.getElementById("gameres");
const newgm = document.querySelector('#newgame');
const playchoice = document.querySelector('#playerChoice');
const comchoice = document.querySelector('#comChoice');

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

    if (computerSelection === playerSelection ){
        res = "Its a tie";
        //return res;
    }
    if(computerSelection === "rock" && playerSelection === "paper"){
        res ="You win";
        player++;
        //return res;
    }
    if(computerSelection === "rock" && playerSelection === "scissors"){
        res ="Computer wins";
        com++;
        //return res;
    }
    if(computerSelection === "paper" && playerSelection === "rock"){
        res ="Computer wins";
        com++;
        //return res;
    }
    if(computerSelection === "paper" && playerSelection === "scissors"){
        res ="You win";
        player++;
        //return res;
    }
    if(computerSelection === "scissors" && playerSelection === "paper"){
        res ="Computer wins";
        com++;
        //return res;
    }
    if(computerSelection === "scissors" && playerSelection === "rock"){
        res ="You win";
        player++;
        //return res;
    }
    if (player==5 || com==5){
        getWinner();
        
        disableBtns();
    }
    console.log(player, com);
    return res;
    
}

function getWinner(){
    let pcwin="";
    if(player>com){
        console.log("Player won");
        pcwin = "Player won";
    }
    if(player<com){
        console.log("computer won");
        pcwin = "Computer Won";
        

    }
    if(player==com){
        console.log("Its a tie");
        pcwin = "It's a tie";
        
    }
    
    divres.textContent = pcwin;
    game(pcwin);
    document.getElementById("newgame").hidden = false;
    
}

function disableBtns() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    divres.textContent = "It's a tie";
    
}
function enableBtns() {
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
}
function game(string){

    
    finalRes.textContent = string;
}
function newGame(){
    enableBtns();
    counter = 1;
    player = 0;
    com = 0;
    document.getElementById("playerScore").textContent = 0;
    document.getElementById("comScore").textContent = 0;
    finalRes.textContent="";
    divres.textContent="";
    comchoice.textContent = "";
    playchoice.textContent = "";
    document.getElementById("newgame").hidden = true;

}
function updateScore(){
    document.getElementById("playerScore").textContent = player;
    document.getElementById("comScore").textContent = com;


}

function choices (computerSelection , playerSelection) {
    if(computerSelection == "rock"){
        comchoice.textContent = "???";
    }
    
    if(computerSelection == "paper"){
        comchoice.textContent = "???";
    }
    
    if(computerSelection == "scissors"){
        comchoice.textContent = "??????";
    }
    if(playerSelection == "rock"){
        playchoice.textContent = "???";
    }
    
    if(playerSelection == "paper"){
        playchoice.textContent = "???";
    }
    
    if(playerSelection == "scissors"){
        playchoice.textContent = "??????";
    }
    
}

newgm.addEventListener('click', () =>{
    newGame();
} );

rock.addEventListener('click', () =>{
    let compselect = computerPlay();
   
    divres.textContent = playRound(compselect, "rock");
    updateScore();
    choices(compselect, "rock");
    console.log(counter);
});
paper.addEventListener('click', () =>{
    let compselect = computerPlay();
    
    divres.textContent = playRound(compselect, "paper");
    updateScore();
    console.log(counter);
    choices(compselect, "paper");
});
scissors.addEventListener('click', () =>{
    let compselect = computerPlay();
    
    divres.textContent = playRound(compselect, "scissors");
    updateScore();
    console.log(counter);
    choices(compselect, "scissors");
});


