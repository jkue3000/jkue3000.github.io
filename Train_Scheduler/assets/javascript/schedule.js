// Initialize Firebase
  var config = {
    apiKey: "AIzaSyANi8njx95zyEA5CqMjI29odp-sfhKttJI",
    authDomain: "train-scheduler-1b660.firebaseapp.com",
    databaseURL: "https://train-scheduler-1b660.firebaseio.com",
    projectId: "train-scheduler-1b660",
    storageBucket: "",
    messagingSenderId: "996041314145"
  };
  firebase.initializeApp(config);

  // var to access firebase.database
  var database = firebase.database();

  // initalizing vars to get later
  var trainName;
  var destination;
  var firstTrainTime;
  var frequency;
  
  // getting these values from the making math problem 
  var nextArrival;
  var minAway;

  $("#formSubmit").on("click", function() {
  
  // getting values from the form inputs
  trainName = $("#trainName-input").val().trim();
  destination = $("#destination-input").val().trim();
  frequency = $("#frequency-input").val().trim();
  firstTrainTime = $("#trainTime-input").val().trim();

  // pushing the information to firebase
  database.ref().push({
    
    trainName: trainName,

    destination: destination,

    frequency: frequency,

    firstTrainTime: firstTrainTime,

    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });


})  


database.ref().on("child_added", function(snapshot) {

  // var values that give display the value of the time according to the frequency 
  minAway = snapshot.val().frequency;
  nextArrival = moment().add(minAway, "minutes");

  var nextTrain = moment(nextArrival).format("hh:mm a");

  

  var newRow = $("<tr>");

  newRow.append("<td>" + snapshot.val().trainName + "</td> <td>" + snapshot.val().destination + "</td> <td>" + snapshot.val().frequency + "</td>" + "<td>" + nextTrain + "</td> <td>" + minAway + "m" + "</td>");

  $("#userData").append(newRow);
  

})
