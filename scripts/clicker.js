
function initClickerGame() {

    let score = 0

    const warManaButton = document.querySelector("#summon-war-mana");
    const lightManaButton = document.querySelector("#summon-light-mana");
    const scoreBoard = document.querySelector("#score-board");

    function addMana(num) {
        score += num;
        scoreBoard.innerHTML = score;
    }

    function addWarMana () {
        return addMana(1);
    }

    function addLightMana() {
        return addMana(1);
    }

    
    warManaButton.addEventListener("click", addWarMana);
    lightManaButton.addEventListener("click", addLightMana);
}

initClickerGame();