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
    if (computer) {
        computer.classList.add("selected");
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
    if (player) {
        player.classList.add("selected");
    };
    return result;
}

function update() {
    let result = document.getElementById("result");
    result.innerText = `Score: ${playerWin} wins / ${roundCounter} rounds`
}

function play(player, computer) {
    let elms = document.querySelectorAll("div.selected, button.selected");
    if (elms) {
        elms.forEach((item) => {
            item.classList.remove("selected");
        });
    };
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
    update();
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