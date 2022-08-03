let roundCounter = 0;
let playerWin = 0;
let options = ["Rock", "Paper", "Scissor"];

function getChoice() {
    return Math.floor((Math.random() * 300) % 3);

}

function update() {
    let result = document.getElementById("result");
    result.innerText = `Score: ${playerWin} wins / ${roundCounter} rounds`
}

function play(player, computer) {
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
        play(0, getChoice());
    });
    button = document.getElementById("playerPaper");
    button.addEventListener("click", function () {
        play(1, getChoice());
    });
    button = document.getElementById("playerScissors");
    button.addEventListener("click", function () {
        play(2, getChoice());
    });
})();