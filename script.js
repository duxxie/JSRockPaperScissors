function getComputerChoice() {
    const choices = ["🪨", "📄", "✂️"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice){

    if(humanChoice === "Reset"){
        return "reset";
    }

    if(humanChoice === computerChoice){
        return "tie";
    }

    if(
        (humanChoice === "🪨" && computerChoice === "✂️") ||
        (humanChoice === "📄" && computerChoice === "🪨") ||
        (humanChoice === "✂️" && computerChoice === "📄")
    ){
        return "human";
    }
    else{
        return "computer";
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame(humanChoice){

    const computerChoice = getComputerChoice();
    let roundWinner = playRound(humanChoice, computerChoice);

    let resultText = `You chose: ${humanChoice} | Computer chose: ${computerChoice} -> `;

    if(roundWinner == "human"){
        humanScore++;
        resultText+= "You win this round!"
    }
    else if(roundWinner == "computer"){
        computerScore++;
        resultText+= "You lost this round."
    }
    else if(roundWinner == "reset"){
        humanScore = 0;
        computerScore = 0;
        resultText = "Choose your move!";
    }
    else{
        resultText+= "It's a tie";
    }

    document.getElementById("human").innerText = `Human Score: ${humanScore}`;
    document.getElementById("computer").innerText = `Computer Score: ${computerScore}`;
    document.getElementById("result").innerText = resultText;
}