let roundCounter = 0;
let playerWin = 0;
let options = ["Rock", "Paper", "Scissor"];

function getChoice() {
    let result = Math.floor((Math.random() * 300) % 3);
    let computer = null;
    switch (result) {
        case 0:
            computer = document.getElementById("computerRock");
            break;
        case 1:
            computer = document.getElementById("computerPaper");
            break;
        case 2:
            computer = document.getElementById("computerScissors");
            break;
    };
    return result;
}

function setChoice(result) {
    let player = null;
    switch (result) {
        case 0:
            player = document.getElementById("playerRock");
            break;
        case 1:
            player = document.getElementById("playerPaper");
            break;
        case 2:
            player = document.getElementById("playerScissors");
            break;
    };
    return result;
}

function resetDisplay() {
    let elms = document.querySelectorAll("div.selected, button.selected");
    if (elms) {
        elms.forEach((item) => {
            item.classList.remove("selected");
        });
    };
}

function updateStats(player, computer) {
    roundCounter++;
    if (player !== computer) {
        switch (player) {
            case 0:
                if (computer === 2) {
                    playerWin++;
                };
                break;
            case 1:
                if (computer === 0) {
                    playerWin++;
                };
                break;
            case 2:
                if (computer === 1) {
                    playerWin++;
                };
                break;
        };
    };
}

function updateDisplay(player, computer) {
    switch (player) {
        case 0:
            document.getElementById("playerRock").classList.add("selected");
            break;
        case 1:
            document.getElementById("playerPaper").classList.add("selected");
            break;
        case 2:
            document.getElementById("playerScissors").classList.add("selected");
            break;
    };
    switch (computer) {
        case 0:
            document.getElementById("computerRock").classList.add("selected");
            break;
        case 1:
            document.getElementById("computerPaper").classList.add("selected");
            break;
        case 2:
            document.getElementById("computerScissors").classList.add("selected");
            break;
    };
    let result = document.getElementById("result");
    result.innerText = `Score: ${playerWin} wins / ${roundCounter} rounds`
}

function play(player, computer) {
    resetDisplay();
    updateStats(player, computer);
    updateDisplay(player, computer);
    return;
}

(function () {
    let button = document.getElementById("playerRock");
    button.addEventListener("click", function () {
        play(setChoice(0), getChoice());
    });
    button = document.getElementById("playerPaper");
    button.addEventListener("click", function () {
        play(setChoice(1), getChoice());
    });
    button = document.getElementById("playerScissors");
    button.addEventListener("click", function () {
        play(setChoice(2), getChoice());
    });
})();