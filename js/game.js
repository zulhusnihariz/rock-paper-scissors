console.log("gamejsloaded");

// Inital score for player and computer
let playerScore = 0;
let computerScore = 0;

// Randomize computer's choice
function computerPlay() {
	let options = ["rock", "paper", "scissors"];
	let randomOptions = Math.floor(Math.random() * options.length);
	return options[randomOptions];
}

// Play a round; compare choice and decide winner. Whoever win, +1 to their score
function playRound(playerSelection) {
	const computerSelection = computerPlay();
	console.log(computerSelection);
	playerSelection = playerSelection.toLowerCase();

	const winStatement = [
		"You Win! Paper beats Rock",
		"You Win! Scissors beats Paper",
		"You Win! Rock beats Scissors",
	];
	const loseStatement = [
		"You Lose! Paper beats Rock",
		"You Lose! Scissors beats Paper",
		"You Lose! Rock beats Scissors",
	];
	const tieStatement = [
		"It's a Tie! Both chose Rock",
		"It's a Tie! Both chose Paper",
		"It's a Tie! Both chose Scissors",
	];

	// If Player Rock

	switch (true) {
		case playerSelection == "rock":
			switch (true) {
				case computerSelection == "rock":
					return tieStatement[0];
				// return "It's a Tie! You both choosed Rock";
				case computerSelection == "paper":
					computerScore += 1;
					return loseStatement[0];
				// return "You Lose! Paper beats Rock";
				case computerSelection == "scissors":
					playerScore += 1;
					return winStatement[2];
				// return "You Win! Rock beats Scissors";
			}
		case playerSelection == "paper":
			// If Player Paper
			switch (true) {
				case computerSelection == "paper":
					return tieStatement[1];
				// return "It's a Tie! You both choosed Paper";
				case computerSelection == "scissors":
					computerScore += 1;
					return loseStatement[1];
				// return "You Lose! Scissors beats Paper";
				case computerSelection == "rock":
					playerScore += 1;
					return winStatement[0];
				// return "You Win! Paper beats Rock";
			}
		case playerSelection == "scissors":
			// If Player Scissorsd
			switch (true) {
				case computerSelection == "scissors":
					return tieStatement[2];
				// return "It's a Tie! You both choosed Scissors";
				case computerSelection == "rock":
					computerScore += 1;
					return loseStatement[2];
				// return "You Lose! Rock beats Scissors";
				case computerSelection == "paper":
					playerScore += 1;
					return winStatement[1];
				// return "You Win! Scissors beats Paper";
			}
	}
}

// Check Score; first to 5 win
function checkWinner() {
	console.log(`Player Score: ${playerScore}`);
	console.log(`Computer Score: ${computerScore}`);
	while (playerScore < 5 || computerScore < 5) {
		if (playerScore == 5) {
			alert("Congratulations Human Won!");
			resetGame();
			break;
		} else if (computerScore == 5) {
			alert("Computer Won! Please try again.");
			resetGame();
			break;
		} else {
			break;
		}
	}
}
