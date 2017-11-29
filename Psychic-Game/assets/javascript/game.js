// Array of letters
var letters = ['a', 'b', 'c', 'd', 'e',
			   'f', 'g', 'h', 'i', 'j',
			   'k', 'l', 'm', 'n', 'o',
			   'p', 'q', 'r', 's', 't',
			   'u', 'v', 'w', 'x', 'y', 
			   'z'];
//Score var
var lossCounter = 0;
var winCounter = 0;
var remainingGuess = 10;
var userAlreadyGuessed = [];

// Generate computer letter
var computerGuess = letters[Math.floor(Math.random() * letters.length)];

// function to update win points
function userWinUpdate() {
	document.getElementById('win').innerHTML= "Wins :" + winCounter;
};

// function to update loss
function userLossUpdate() {
	document.getElementById('loss').innerHTML = "Loss :" + lossCounter;
};

// function to update the user guessed already array
function userAlreadyGuessedUpdate(){
	document.getElementById('wrongGuess').innerHTML = "Wrong Guesses :" + userAlreadyGuessed.join(', ');
};

// fucntion to update the remaining guesses
function remainingGuessUpdate(){
	document.getElementById('remainingGuesses').innerHTML = "Remaining Guesses: " + remainingGuess;
};

// Function to generate letter in the reset
function letterGenerator(){
	letters[Math.floor(Math.random() * letters.length)];
};


userWinUpdate();
userLossUpdate();
remainingGuessUpdate();
userAlreadyGuessedUpdate();

// function to reset game
function gameReset(){
	 remainingGuess = 10;
	 userAlreadyGuessed = [];

	 computerGuess = letters[Math.floor(Math.random() * letters.length)];
};


// Key event lisener functiton
document.onkeyup = function(event){

	// Key listener for user Guess
	var userGuess = event.key.toLowerCase();
	

	// Check if userGuess is a letter
	if (letters.indexOf(userGuess) <= -1) {
		alert('Please choose a letter!');

	  // userGuess is a letter and pushes the userGuess to an userAlreadyGuessed
	} else if (letters.indexOf(userGuess) >= 0) {
		userAlreadyGuessed.push(userGuess);
		userAlreadyGuessedUpdate();
		remainingGuess--;
		remainingGuessUpdate();

	  // Checks if the letter has already been picked
	} else if (userAlreadyGuessed.indexOf() == userGuess) {
		alert('Pick a new letter...');
	};

	// When you guess the right answer then add to winCounter and reset game
	if (userGuess === computerGuess){
		alert('You Won!')
		winCounter++;
		userWinUpdate();
		gameReset();

	};
	// When guesses equal 0 then reset game and add to the lossCounter
	if (remainingGuess == 0){
		alert('You lost buddy... Try again...')
		lossCounter++;
		userLossUpdate();
		remainingGuessUpdate();
		gameReset();
	};
};



