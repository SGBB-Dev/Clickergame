
function initClickerGame() {

    const spawnWarButton = document.getElementById("spawn_war");
    const spawnLightButton = document.getElementById("spawn_light");
    const spawnZone = document.getElementById("spawn_zone");

    const spawnedCorgis = []

    spawnWarButton.addEventListener("click", spawnWarCorgi);
    spawnLightButton.addEventListener("click", spawnLightCorgi);
    spawnZone.addEventListener("click", increaseScore)

    function spawnWarCorgi() {
        const newCorgi = {
            id: spawnedCorgis.length + 1,
            score: 0,
            type: "war"
        }

        spawnedCorgis.push(newCorgi);
        renderCorgis()
    }

    function spawnLightCorgi() {
        const newCorgi = {
            id: spawnedCorgis.length + 1,
            score: 0,
            type: "light"
        }

        spawnedCorgis.push(newCorgi);
        renderCorgis();
    }

    
    function getClickerHTML(corgi) {
        switch(corgi.type) {
            case "war": 
            return `
            <div class="spawned-clicker" id="corgi-${corgi.id}">
            <img src="assets/war_corgi.png" id="corgi-${corgi.id}"  class="war-corgi-img" alt="war_corgi">
            <p class="score">${corgi.score}</p>
            </div>
            `
            case "light":
            return `
            <div class="spawned-clicker" id="corgi-${corgi.id}">
            <img src="assets/light_gardian_corgi.jpg" id="corgi-${corgi.id}" class="light-corgi-img" alt="light_corgi">            <p class="score">${corgi.score}</p>
            </div>
            `
            default:
                return ``;
        }
    }


    function renderCorgis() {
        let spawnedCorgisHTML = '';

        spawnedCorgis.forEach(corgi => {
            spawnedCorgisHTML += getClickerHTML(corgi)
        })

        spawnZone.innerHTML = spawnedCorgisHTML;
    }

    function increaseScore(event) {
        const corgiIndex = parseInt(event.target.id.split("-")[1] - 1);
        console.log(corgiIndex)
        spawnedCorgis[corgiIndex].score += 1;

        renderCorgis();
    }

  
}

initClickerGame();