
function initClickerGame() {

    let score = 0

    const button = document.querySelector("#click-me");
    const scoreBoard = document.querySelector("#score-board");

    function addToScore() {
        console.log("clicked");
        const num = 1
        score += num;
        scoreBoard.innerHTML = score;
    }

    button.addEventListener("click", addToScore);
}

initClickerGame();