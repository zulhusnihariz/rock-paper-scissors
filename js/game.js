// Inital score for player and computer
let playerScore = 0;
let computerScore = 0;

// Randomize computer's choice
function computerPlay() {
	let options = ["rock", "paper", "scissors"];
	let randomOptions = Math.floor(Math.random() * options.length);
	return options[randomOptions];
}

// Check whether input is valid(rock/paper/scissors); if alert for new input,
function choiceValidity(playerSelection) {
	playerSelection = playerSelection.toLowerCase();

	if (
		playerSelection == "rock" ||
		playerSelection == "paper" ||
		playerSelection == "scissors"
	) {
		console.log("Valid input");
	} else {
		console.log(playerSelection + " Invalid input");
		playerSelection = window.prompt("Please only choose Rock/Paper/Scissors.");
		choiceValidity(playerSelection);
		return playerSelection;
	}
}

// Play a round; compare choice and decide winner. Whoever win, +1 to their score
function playRound(playerSelection) {
	choiceValidity(playerSelection);

	const computerSelection = computerPlay();
	playerSelection = playerSelection.toLowerCase();

	// If Player Rock
	switch (playerSelection == "rock") {
		case computerSelection == "rock":
			return "It's a Tie! You both choosed Rock";
		case computerSelection == "paper":
			computerScore += 1;
			return "You Lose! Paper beats Rock";
		case computerSelection == "scissors":
			playerScore += 1;
			return "You Win! Rock beats Scissors";
	}

	// If Player Paper
	switch (playerSelection == "paper") {
		case computerSelection == "paper":
			return "It's a Tie! You both choosed Paper";
		case computerSelection == "scissors":
			computerScore + 1;
			return "You Lose! Scissors beats Paper";
		case computerSelection == "rock":
			playerScore + 1;
			return "You Win! Paper beats Rock";
	}

	// If Player Scissorsd
	switch (playerSelection == "scissors") {
		case computerSelection == "scissors":
			return "It's a Tie! You both choosed Scissors";
		case computerSelection == "rock":
			computerScore + 1;
			return "You Lose! Rock beats Scissors";
		case computerSelection == "paper":
			playerScore + 1;
			return "You Win! Scissors beats Paper";
	}
}

// Loop 5 times; First Player to get to 5 win.
function fullGame() {
	playerSelection = window.prompt("Please only choose Rock/Paper/Scissors.");

	while (playerScore < 5 || computerScore < 5) {
		playRound(playerSelection);

		console.log(playerScore);
		console.log(computerScore);

		if (playerScore == 5) {
			alert("Congratulations Human Won!");
			break;
		} else if (computerScore == 5) {
			alert("Computer Won! Please try again.");
			break;
		} else {
			playerSelection = window.prompt("Please choose Rock/Paper/Scissors.");
		}
	}
}
