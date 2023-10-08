let gameNumber = 1; // Initialize the game number

//initialize the scores of home and guest
let scoreHomeValue = 0;
let scoreGuestValue = 0;

// initialize the fouls for home and guest

let foulHomeValue = 0;
let foulGuestValue = 0;

//define variables that access the scores

const scoreHome = document.getElementById("scoreHome");
const scoreGuest = document.getElementById("scoreGuest");

// define variables that access the foul counter

const foulHome = document.getElementById("foulHome");
const foulGuest = document.getElementById("foulGuest");
// define variables to acces the individual scoreboards and lead

const leadMessageHome = document.getElementById("leadMessageHome");
const scoreBoardHome = document.getElementById("scoreBoardHome");

const leadMessageGuest = document.getElementById("leadMessageGuest")
const scoreBoardGuest = document.getElementById("scoreBoardGuest");

const clearBtn = document.getElementById("clearBtn");
const gameStatsContainer = document.getElementById("gameStatsContainer");
const homeScoreStat = document.getElementById("homeScoreStat");
const guestScoreStat = document.getElementById("guestScoreStat");
const gameScoresContainer = document.getElementById("gameScoresContainer")

//define functions to increase the score for home and guest

function add1Home() {
    scoreHomeValue += 1;
    scoreHome.textContent = scoreHomeValue;
    updateLeader();
}

function add2Home() {
    scoreHomeValue += 2;
    scoreHome.textContent = scoreHomeValue;
    updateLeader();
}

function add3Home() {
    scoreHomeValue += 3;
    scoreHome.textContent = scoreHomeValue;
    updateLeader();
}

function add1Guest() {
    scoreGuestValue += 1;
    scoreGuest.textContent = scoreGuestValue;
    updateLeader();
}

function add2Guest() {
    scoreGuestValue += 2;
    scoreGuest.textContent = scoreGuestValue;
    updateLeader();
}

function add3Guest() {
    scoreGuestValue += 3;
    scoreGuest.textContent = scoreGuestValue;
    updateLeader();
}




//define functions to update the foul count for home and guest

function addFoulHome() {
    foulHomeValue += 1;
    foulHome.textContent = "Fouls: " + foulHomeValue;
    disqualification();
}

function addFoulGuest() {
    foulGuestValue += 1;
    foulGuest.textContent = "Fouls: " + foulGuestValue;
    disqualification();
}

// disqualification after 9 fouls

function disqualification() {
    if (foulHomeValue >= 9) {
        // adding and removing classes for the display of the guest
        leadMessageHome.classList.add("gameMessage");
        leadMessageHome.classList.add("disqualified");
        leadMessageHome.textContent = "Home is disqualified";
        
        scoreBoardHome.classList.remove("leadingScoreboard");
        leadMessageGuest.classList.add("gameMessage");
        leadMessageGuest.textContent = "Guest is the Winner";
        scoreBoardGuest.classList.add("leadingScoreboard");
        disableButtons()
    } else if (foulGuestValue >= 9) {
        // adding and removing classes for the display of guest
        scoreBoardGuest.classList.remove("leadingScoreboard");
        leadMessageHome.classList.add("gameMessage");
        leadMessageHome.textContent = "Home is the Winner";
        scoreBoardHome.classList.add("leadingScoreboard");

        leadMessageGuest.classList.add("gameMessage");
        leadMessageGuest.classList.add("disqualified");
        leadMessageGuest.textContent = "Guest is disqualified";
        disableButtons()
        
        
    }
}





// logic for adding the classes highlighting the leader

function updateLeader() {
    if (scoreHomeValue > scoreGuestValue) {
      leadMessageHome.classList.add("gameMessage");
      scoreBoardHome.classList.add("leadingScoreboard");
      leadMessageGuest.classList.remove("gameMessage");
      scoreBoardGuest.classList.remove("leadingScoreboard");
      // #######################
      leadMessageHome.textContent = "Home is the Winner";
      // #######################
    } else if (scoreHomeValue < scoreGuestValue) {
        leadMessageHome.classList.remove("gameMessage");
        scoreBoardHome.classList.remove("leadingScoreboard");
        leadMessageGuest.classList.add("gameMessage");
        scoreBoardGuest.classList.add("leadingScoreboard");
        // #######################
        leadMessageGuest.textContent = "Guest is the Winner";
        // #######################
    } else if (scoreHomeValue === scoreGuestValue ){
        leadMessageHome.classList.remove("gameMessage");
        scoreBoardHome.classList.remove("leadingScoreboard");
        leadMessageGuest.classList.remove("gameMessage");
        scoreBoardGuest.classList.remove("leadingScoreboard");
    }
}









function newGame() {
    // ###############
    enableButtons()
    // ###############
    
    // show game score container
    gameScoresContainer.style.display = "block";

    // Store the previous game's scores in a new game container
    let newGameContainer = document.createElement("div");
    newGameContainer.classList.add("game-stats-container");
    newGameContainer.innerHTML = `
        <h3>Game #${gameNumber}</h3> <!-- Add the game number -->
        <div class="game-container">
            <p class="score-stat">Home: ${scoreHomeValue}</p>
            <p class="score-stat">Guest: ${scoreGuestValue}</p>
        </div>
    `;
    gameStatsContainer.appendChild(newGameContainer);

    // Increment the game number
    gameNumber++;

    // Clear the scores for the new game
    scoreHomeValue = 0;
    scoreGuestValue = 0;
    scoreHome.textContent = scoreHomeValue;
    scoreGuest.textContent = scoreGuestValue;

    // Remove classes indicating the lead
    leadMessageHome.classList.remove("gameMessage");
    scoreBoardHome.classList.remove("leadingScoreboard");
    leadMessageGuest.classList.remove("gameMessage");
    scoreBoardGuest.classList.remove("leadingScoreboard");

    // Reset the fouls
    // 
    leadMessageHome.classList.remove("disqualified");
    leadMessageGuest.classList.remove("disqualified");
    // 
    foulHomeValue = 0;
    foulGuestValue = 0;
    foulHome.textContent = "Foul: " + foulHomeValue;
    foulGuest.textContent = "Foul: " + foulGuestValue;

    // Show the clear button by removing the "clearHidden" class
    clearBtn.classList.remove("clearHidden");
}




function clearValues() {
    // ###############
    enableButtons()
    // ###############
    //hide the gameScoresContainer
    gameScoresContainer.style.display = "none";

    //reset the game number to 1 

    gameNumber = 1;

    // Reset the scores to 0
    scoreHomeValue = 0;
    scoreGuestValue = 0;
    scoreHome.textContent = scoreHomeValue;
    scoreGuest.textContent = scoreGuestValue;

    // Reset the fouls to 0
    foulHomeValue = 0;
    foulGuestValue = 0;
    foulHome.textContent = "Foul: " + foulHomeValue;
    foulGuest.textContent = "Foul: " + foulGuestValue;

    // Remove all the game containers and their values
    while (gameStatsContainer.firstChild) {
        gameStatsContainer.removeChild(gameStatsContainer.firstChild);
    }

    // Remove classes indicating the lead
    leadMessageHome.classList.remove("gameMessage");
    scoreBoardHome.classList.remove("leadingScoreboard");
    leadMessageGuest.classList.remove("gameMessage");
    scoreBoardGuest.classList.remove("leadingScoreboard");

    // Hide the clear button
    clearBtn.classList.add("clearHidden");
}

function disableButtons() {
    document.getElementById('add1Home').classList.add('disabled')
    document.getElementById('add2Home').classList.add('disabled')
    document.getElementById('add3Home').classList.add('disabled')
    
    document.getElementById('add1Guest').classList.add('disabled')
    document.getElementById('add2Guest').classList.add('disabled')
    document.getElementById('add3Guest').classList.add('disabled')
    
    document.getElementById('addFoulHome').classList.add('disabled')
    document.getElementById('addFoulGuest').classList.add('disabled')
}

function enableButtons() {
    document.getElementById('add1Home').classList.remove('disabled')
    document.getElementById('add2Home').classList.remove('disabled')
    document.getElementById('add3Home').classList.remove('disabled')
    
    document.getElementById('add1Guest').classList.remove('disabled')
    document.getElementById('add2Guest').classList.remove('disabled')
    document.getElementById('add3Guest').classList.remove('disabled')
    
    document.getElementById('addFoulHome').classList.remove('disabled')
    document.getElementById('addFoulGuest').classList.remove('disabled')
}