function getHumanChoice(){
    let choice = prompt("Insert Your Choice[Rock, Paper, Scissors]: ");
    choice = choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
    return choice;
}

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice === computerChoice){
        console.log("It's a tie");
        return "tie";
    }

    if(
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        console.log("You win this round");
        return "human";
    } else {
        console.log("Computer wins this round");
        return "computer";
    }
}

let humanScore = 0;
let computerScore = 0;

for(let i = 0; i < 5; i++){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    let roundWinner = playRound(humanSelection, computerSelection);
    if(roundWinner == "human"){
        humanScore++;
    }
    else if(roundWinner == "computer"){
        computerScore++;
    }
    console.log("Human: " + humanScore + " Computer: " + computerScore);

}


console.log(humanScore > computerScore ? "You Win!" : "You Lose!");