function getComputerChoice() {
    let option = Math.floor((Math.random() * 300) % 3);
    switch (option) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    };
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase().trim();
    computerSelection = computerSelection.toLowerCase().trim();
    if (playerSelection === computerSelection) {
        return "Tie";
    };
    let result = {
        won: false,
        text: ""
    };
    let winPlay = "";
    let losePlay = "";
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "scissors") {
                result.won = true;
                winPlay = "Rock";
                losePlay = "Scissors";
            } else {
                winPlay = "Paper";
                losePlay = "Rock";
            };
            break;
        case "paper":
            if (computerSelection === "rock") {
                result.won = true;
                winPlay = "Paper";
                losePlay = "Rock";
            } else {
                winPlay = "Scissors";
                losePlay = "Paper";
            };
            break;
        case "scissors":
            if (computerSelection === "paper") {
                result.won = true;
                winPlay = "Scissors";
                losePlay = "Paper";
            } else {
                winPlay = "Rock";
                losePlay = "Scissors";
            };
            break;
    };
    result.text = `You ${result.won ? "Won" : "Lose"}! ${winPlay} beats ${losePlay}`;
    return result;
}

function game() {
    let roundsPlayed = 0;
    let wonByPlayer = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound(
            prompt("Choose 'rock', 'paper', or 'scissors'"),
            getComputerChoice()
        );
        roundsPlayed++;
        if (result.wonByPlayer) {
            wonByPlayer++;
        };
        console.log(result.text);
    };
    console.log(`Rounds played: ${ roundsPlayed }`)
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
//game();