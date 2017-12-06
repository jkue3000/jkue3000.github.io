// set the buttons to random #'s'
var facebook = Math.floor(Math.random() * 12) +1;
var instagram = Math.floor(Math.random() * 12) +1;
var snapchat = Math.floor(Math.random() * 12) +1;
var twitter = Math.floor(Math.random() * 12) +1;

// generate computer number
var randomNumGen = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

// blank vars for wins/losses and userClickValue
var userValue= "";

wins = 0;
loss = 0;

// show RandomNum to HTML
$('.randomNumGen').html(randomNumGen);

// button listeners for clicks on the buttons and fucntions
$('.facebook').on('click', function(){
	if (facebook > 0){
		userValue = parseInt(userValue + facebook);
		$('.buttons-score').html(userValue);
		gameCheck();
		console.log(facebook);
	};
});

$('.snapchat').on('click', function(){
	if (snapchat > 0){
		userValue = parseInt(userValue + snapchat);
		$('.buttons-score').html(userValue);
		gameCheck();
	};
});

$('.instagram').on('click', function(){
	if (instagram > 0){
		userValue = parseInt(userValue + instagram);
		$('.buttons-score').html(userValue);
		gameCheck();
	};
});

$('.twitter').on('click', function(){
	if (twitter > 0){
		userValue = parseInt(userValue + twitter);
		$('.buttons-score').html(userValue);
		gameCheck();
	};
});

// function for win or lose
function gameCheck(){
	if (randomNumGen == userValue){
		wins++;
		$('.winLossAlert').html("You Won!");
		$('#win').html("Wins:" + " " + wins);
		reset();
	} else if (randomNumGen < userValue){
		loss++;
		$('.winLossAlert').html("You Lost! Try Again!");
		$('#loss').html("Losses:" + " " + loss);
		reset();
	};
};

// Function to reset game if win or lose
function reset(){
	facebook = Math.floor(Math.random() * 12) +1;
	instagram = Math.floor(Math.random() * 12) +1;
	snapchat = Math.floor(Math.random() * 12) +1;
	twitter = Math.floor(Math.random() * 12) +1;
	randomNumGen = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	$('.randomNumGen').html(randomNumGen);
	userValue = "";
	$('.buttons-score').html("<h2>Match your # to the computer # below</h2>");
};
