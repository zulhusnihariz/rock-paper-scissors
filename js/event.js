console.log("definitionjsloaded");

// const startButton = document.querySelector("#startButton");
const numberOfRound = document.querySelector("#numberOfRound");
const scoreStatus = document.querySelector("#scoreStatus");

const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");

const displayPlayerScore = document.querySelector("#displayPlayerScore");
const displayComputerScore = document.querySelector("#displayComputerScore");

let click = 1;
let results;

// Reset Scores & Display

function resetGame() {
	playerScore = 0;
	computerScore = 0;
	click = 0;

	scoreStatus.textContent = "Rock/Paper/Scissors";
}

function updateRoundNumber() {
	if (checkWinner()) {
		resetGame();
		numberOfRound.textContent = "Choose one"; // does not work; screen display Round 0 instead

		return;
	} else {
		numberOfRound.textContent = `Round ${click}`;
		click += 1;
		displayPlayerScore.textContent = `${playerScore}`;
		displayComputerScore.textContent = `${computerScore}`;
	}
}

// Diplay Win/Tie/Lose Statement
function displayResults(anyResults) {
	scoreStatus.textContent = anyResults;
}

// Event listener for all buttons

rock.addEventListener("click", () => {
	results = playRound("Rock");
	displayResults(results);
	updateRoundNumber();
	checkWinner();
});

paper.addEventListener("click", () => {
	results = playRound("Paper");
	displayResults(results);
	updateRoundNumber();
	checkWinner();
});

scissors.addEventListener("click", () => {
	results = playRound("Scissors");
	displayResults(results);
	updateRoundNumber();
	checkWinner();
});
