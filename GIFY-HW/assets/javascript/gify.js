// array for to push user input
var failArray = ["fishing fail", "army fail", "rapping fail"];

var userInputGlobal = $('#userSearchInput').val().trim();


// function to make buttons
function btnCreation() {

	// clearing html so my buttons can be reset again
	$('.holdBtn').html('');

	// for loop function to create a button for each 
	for (i=0; i<failArray.length; i++){
		
		// creating buttons dynamiclally
		var addSearchBtn = $('<button>');
		var label = $('<label>');
		label.append(failArray[i]);
		addSearchBtn.attr('class', "searchClick");
		addSearchBtn.attr('data-name', failArray[i]);
		addSearchBtn.attr('data-state', "still");
		addSearchBtn.append(label);

		// adding data attr to the searchClick id
		$('.searchClick').attr('data-fail'+ failArray[i]);

		// css for fail array buttons
		$(".searchClick").css('margin', '10px');

		// showing buttons to the class
		$('.holdBtn').append(addSearchBtn);
	}
};
btnCreation();


// on click BTN listener to add buttons 
$('#addFail').on('click', function(){
	// var to capture userinput value
	var userInputLocal = $('#userSearchInput').val().trim();
	
	// function to push userInput into failArray
	function pushUserInput(){
		failArray.push(userInputLocal);
	};
	
	// creating the userInput value to be able to use it as a string
	$("userSearchInput").append('value=' + userInputLocal);

	// conditional to push user input into array or check if a string
	if (userInputLocal == ""){
		alert("Oops... Search a Fail!");
	} else{
		pushUserInput();
		$('#userSearchInput').val("");
		btnCreation();
		console.log(failArray);
	}

	// so the page won't reset
	return false;

});

 // Creating div for the button clicks of the fail
$("div").on("click", "button", function(event){
    
    event.preventDefault();
    console.log( $( this ).text() );

    // vars to call inside the AJAX
	var failSearch = $(this).attr("data-name");
	var apiKey = "&limit=10&rating=G&api_key=KjGZz4rr3h1EYc0PtGyiMVW9DXYclcWO";
	var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + failSearch + apiKey;

	// empty HTML when on click
	$('#failsGoHere').empty();

	// AJAX to get GIFY API
	$.ajax({
        url: queryUrl,
        method: "GET"
      })

      // After the data from the AJAX request comes back
      .done(function(response) {

    	console.log("------------------------------------");
    	console.log("URL: " + queryUrl);
    	console.log("------------------------------------");

      	// var to store GIFY data
      	var gifData = response.data;
      	
      	
      	for (k = 0; k < gifData.length; k++){
      		// div for img and rating 
      		var gifDiv = $("<div class='failGif'>");

      		// Placing the div and Gif IMG into the div
      		var gifImg = $("<img>")

      		gifImg.attr("class", "gifImage");
            gifImg.attr("src", gifData[k].images.fixed_height_still.url);
            gifImg.attr("data-state", "still");
            gifImg.attr("data-still", gifData[k].images.fixed_height_still.url);
            gifImg.attr("data-animate", gifData[k].images.fixed_height_downsampled.url);
            gifDiv.append(gifImg);

            // var to store gifRating
      		var gifRating = gifData[k].rating;

   			// var to display the rating to html
      		var p1 = $("<p>");
      		p1.append("Rating: " + gifRating);
      		p1.css('text-align', 'center');
      		p1.css('font-weight', 'bold');
      		p1.css('font-size', '20px');
      		gifDiv.append(p1);
      		$("#failsGoHere").append(gifDiv);

      		// css for the Gif Divs 
			$(".failGif").css('display', 'inline-block');
			$(".failGif").css('margin', '20px');

      	}

      	// on click funtion to animate and still gif IMG
      	$(".gifImage").on("click", function() {
            var state = $(this).attr("data-state");
            if (state === "still") {
            	$(this).attr("src", $(this).attr("data-animate"));
            	$(this).attr("data-state", "animate");
            } else {
            	$(this).attr("src", $(this).attr("data-still"));
            	$(this).attr("data-state", "still");
            }
        });

      	console.log(gifData);
      	console.log(gifRating);

      });

});

// css for the form id 
$("#addUserInput").css('float', 'right');
$("#addUserInput").css('margin', '30px');
$("#addFail").css('margin-top', '20px');


