console.log("definitionjsloaded");

// const startButton = document.querySelector("#startButton");
const numberOfRound = document.querySelector("#numberOfRound");
const scoreStatus = document.querySelector("#scoreStatus");

const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");

let click = 1;
let results;

function updateRoundNumber() {
	if (checkWinner()) {
		resetGame();
	} else {
		numberOfRound.textContent = `Round ${click}`;
		click += 1;
	}
}

function displayResults(anyResults) {
	scoreStatus.textContent = anyResults;
}

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
