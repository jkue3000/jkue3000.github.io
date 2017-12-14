
// var arrays to refernece and show questions
var myQuestions = [
  {question: "What color does a hippo's sweat turn, when it is upset?",
  answers: ["blue", "red", "green", "yellow"],
  correct: "red"
	},

  {question: "Facebook Addiction Disorder a real mental disorder.",
  answers: ["True", "False"],
  correct: "True"
  },

  {question: "How far can a lions roar be heard from?",
  answers: ["1 mile", "30 miles", "15 miles", "5 miles"],
  correct: "5 miles"
  },

  {question: "Facebook is not banned in some parts of China.",
  answers: ["True", "False"],
  correct: "False"
  },

  {question: "What is the name of the bird in the Twitter logo?",
  answers: ["Tweety", "Larry", "Tasmania", "None of the above"], 
  correct: "Larry"
  },

  {question: "How many degrees Fahrenheit does -40 degrees Celsius equal?",
  answers: ["-200 degrees", "-124 degrees", "-40 degrees", "-50 degrees"],
  correct: "-40 degrees"
  },

  {question: "What year was Diet Coke invented in?",
  answers: ["2000", "1908", "1965", "1982"],
  correct: "1982"
  },

  {question: "The king of hearts is the only king without a moustache.",
  answers: ["True", "False"],
  correct: "True"
  },

  {question: "According to statistics, what day is the most likely day for people to self destruct?",
  answers: ["Monday", "Tuesday", "Friday", "What are you talking about?!?"],
  correct: "Monday"
  },

  {question: "The most money ever paid for a cow in an auction was $1.3 million.",
  answers: ["True", "False"],
  correct: "True"
  },

  {question: "A Narwhal is a whale the has a horn similar to a Unicorn.",
  answers: ["False", "True"],
  correct: "True"
  },

];

// var to compare and show score at the end of game
var score = 0;
var wrong = 0;

var unanswered = 0;


// first Display when on click show click to start timer and take the quiz
var newDiv = $('<div>');
newDiv.addClass('startText')
newDiv.append('<h1>R U FUN QUIZ!?!?</h1>')
$('body').append(newDiv);

var startGameBtn = $('<button>');
startGameBtn.addClass('startGame');
startGameBtn.append('Start Game')
$('body').append(startGameBtn);


// onclick function to show timer and questions
$('.startGame').on('click', function(){
  $('.startText').remove();
  $('.startGame').remove();
  $('body').html(questionsToHtml());
  var timerSpan = $('<span>');
  timerSpan.addClass('timer');
  $('h1').append(timerSpan);
  run();

});






// get questions and choices on the screen
function questionsToHtml(){

  // for loop for the questions to display on the HTML
  for(i = 0; i < myQuestions.length; i++){
    var newElement = $('<div>');
    newElement.addClass('questions'+i);
    newElement.append('<h2>' + myQuestions[i].question + '</h2>' + "<br>");
    $('.parent').append(newElement);
    }

    $('.parent').prepend('<h1>Let Us See How Fun You Actually Are!</h1>')
    
    
    
    // could not figure out how to create a loop that could work to display the answers to the questions properly
  $('.questions0').append('<input type= radio name= group0 value=' + myQuestions[0].answers[0] +'>'+ myQuestions[0].answers[0]+'</input> <br>');
  $('.questions0').append('<input type= radio name= group0 value=' + myQuestions[0].answers[1] +'>'+ myQuestions[0].answers[1]+'</input> <br>');
  $('.questions0').append('<input type= radio name= group0 value=' + myQuestions[0].answers[2] +'>'+ myQuestions[0].answers[2]+'</input> <br>');
  $('.questions0').append('<input type= radio name= group0 value=' + myQuestions[0].answers[3] +'>'+ myQuestions[0].answers[3]+'</input> <br>');

  $('.questions1').append('<input type= radio name= group1 value=' + myQuestions[1].answers[0] +'>'+ myQuestions[1].answers[0]+'</input> <br>');
  $('.questions1').append('<input type= radio name= group1 value=' + myQuestions[1].answers[1] +'>'+ myQuestions[1].answers[1]+'</input> <br>');

  $('.questions2').append('<input type= radio name= group2 value=' + myQuestions[2].answers[0] +'>'+ myQuestions[2].answers[0]+'</input> <br>');
  $('.questions2').append('<input type= radio name= group2 value=' + myQuestions[2].answers[1] +'>'+ myQuestions[2].answers[1]+'</input> <br>');
  $('.questions2').append('<input type= radio name= group2 value=' + myQuestions[2].answers[2] +'>'+ myQuestions[2].answers[2]+'</input> <br>');
  $('.questions2').append('<input type= radio name= group2 value=' + myQuestions[2].answers[3] +'>'+ myQuestions[2].answers[3]+'</input> <br>');

  $('.questions3').append('<input type= radio name= group3 value=' + myQuestions[3].answers[0] +'>'+ myQuestions[3].answers[0]+'</input> <br>');
  $('.questions3').append('<input type= radio name= group3 value=' + myQuestions[3].answers[1] +'>'+ myQuestions[3].answers[1]+'</input> <br>');

  $('.questions4').append('<input type= radio name= group4 value=' + myQuestions[4].answers[0] +'>'+ myQuestions[4].answers[0]+'</input> <br>');
  $('.questions4').append('<input type= radio name= group4 value=' + myQuestions[4].answers[1] +'>'+ myQuestions[4].answers[1]+'</input> <br>');
  $('.questions4').append('<input type= radio name= group4 value=' + myQuestions[4].answers[2] +'>'+ myQuestions[4].answers[2]+'</input> <br>');
  $('.questions4').append('<input type= radio name= group4 value=' + myQuestions[4].answers[3] +'>'+ myQuestions[4].answers[3]+'</input> <br>');

  $('.questions5').append('<input type= radio name= group5 value=' + myQuestions[5].answers[0] +'>'+ myQuestions[5].answers[0]+'</input> <br>');
  $('.questions5').append('<input type= radio name= group5 value=' + myQuestions[5].answers[1] +'>'+ myQuestions[5].answers[1]+'</input> <br>');
  $('.questions5').append('<input type= radio name= group5 value=' + myQuestions[5].answers[2] +'>'+ myQuestions[5].answers[2]+'</input> <br>');
  $('.questions5').append('<input type= radio name= group5 value=' + myQuestions[5].answers[3] +'>'+ myQuestions[5].answers[3]+'</input> <br>');

  $('.questions6').append('<input type= radio name= group6 value=' + myQuestions[6].answers[0] +'>'+ myQuestions[6].answers[0]+'</input> <br>');
  $('.questions6').append('<input type= radio name= group6 value=' + myQuestions[6].answers[1] +'>'+ myQuestions[6].answers[1]+'</input> <br>');
  $('.questions6').append('<input type= radio name= group6 value=' + myQuestions[6].answers[2] +'>'+ myQuestions[6].answers[2]+'</input> <br>');
  $('.questions6').append('<input type= radio name= group6 value=' + myQuestions[6].answers[3] +'>'+ myQuestions[6].answers[3]+'</input> <br>');

  $('.questions7').append('<input type= radio name= group7 value=' + myQuestions[7].answers[0] +'>'+ myQuestions[7].answers[0]+'</input> <br>');
  $('.questions7').append('<input type= radio name= group7 value=' + myQuestions[7].answers[1] +'>'+ myQuestions[7].answers[1]+'</input> <br>');

  $('.questions8').append('<input type= radio name= group8 value=' + myQuestions[8].answers[0] +'>'+ myQuestions[8].answers[0]+'</input> <br>');
  $('.questions8').append('<input type= radio name= group8 value=' + myQuestions[8].answers[1] +'>'+ myQuestions[8].answers[1]+'</input> <br>');
  $('.questions8').append('<input type= radio name= group8 value=' + myQuestions[8].answers[2] +'>'+ myQuestions[8].answers[2]+'</input> <br>');
  $('.questions8').append('<input type= radio name= group8 value=' + myQuestions[8].answers[3] +'>'+ myQuestions[8].answers[3]+'</input> <br>');

  $('.questions9').append('<input type= radio name= group9 value=' + myQuestions[9].answers[0] +'>'+ myQuestions[9].answers[0]+'</input> <br>');
  $('.questions9').append('<input type= radio name= group9 value=' + myQuestions[9].answers[1] +'>'+ myQuestions[9].answers[1]+'</input> <br>');

  $('.questions10').append('<input type= radio name= group10 value=' + myQuestions[10].answers[0] +'>'+ myQuestions[10].answers[0]+'</input> <br>');
  $('.questions10').append('<input type= radio name= group10 value=' + myQuestions[10].answers[1] +'>'+ myQuestions[10].answers[1]+'</input> <br>');

  $('.parent').append('<input type=button value=submit id=answerCheck></input>');


// Submit form button
  $('#answerCheck').on('click', function (){
    var formVals = $('form').serializeArray();
    for (i = 0; i < myQuestions.length; i++) {

      if (formVals[i] == undefined){
        unanswered++;
        console.log(unanswered);
      } 
      
      if (formVals[i].value == myQuestions[i].correct){
        score++;
        console.log(score);
      } else {
        wrong++;
        console.log(wrong);
      }
    }
    displayScore();
  });

};





// Timer count down
var number = 1000;

var intervalId;

$(".startGame").on("click", run);

function run() {
  intervalId = setInterval(decrement, 1000);
}

function decrement() {

  number--;

  $(".timer").html("<h2>Seconds:" + number + "</h2>");

  if (number === 0) {

    stop();
    $('div').remove();
    $('body').html('<h1>Your Fun-O-Meter Scores</h1>' + '<br>' + 'Right Answers: ' + score + '<br>' + 'Wrong Answers: ' + wrong + '<br>' + 'Unanswered: ' + unanswered);
  }
}

function stop() {

  clearInterval(intervalId);
}


// Display scores when submited
function displayScore(){
  $('div').remove();
  $('body').html('<h1>Your Fun-O-Meter Scores</h1>' + '<br>' + 'Right Answers: ' + score + '<br>' + 'Wrong Answers: ' + wrong + '<br>' + 'Unanswered: ' + unanswered);
}




