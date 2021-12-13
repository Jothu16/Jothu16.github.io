//Pull info from JSON file
const data = require('./locations.json');
console.log(data);

fetch("./locations.json")
.then(response =>{
  return response.json();
})
.then(data => console.log(data));

//Use onclick event to run the random location generator
//when the user clicks on the button on main page
document.getElementById("BUTTON") = function {randomLocation()};


function randomLocation(){
  //Get location data from JSON file
  var locations = JSON.parse(Merced);
  //Generate random number
  var randomNum = Math.floor((Math.random() * 40) + 1);

  //Use random number to get random location info
  var placeName = locations[randomNum.Place];
  var placeAddress = locations[randomNum.Address];
  var placeType = locations[randomNum.Type];
  var placeRating = locations[randomNum.Rating];

  //Use HTML to print location info
  document.getElementById("FILL").innerHTML = placeName;
  document.getElementById("FILL").innerHTML = placeAddress;
  document.getElementById("FILL").innerHTML = placeType;
  document.getElementById("FILL").innerHTML = placeRating;

  /*NOTE: Button will redirect to next page. Data must be loaded
  before redirect occurs. To do this, we must add a timeout
  and redirect the user using JS instead of HTMl*/

  //Add Timeout of 5 seconds to load data

  //Redirect user using onclick event
  document.getElementbyId("BUTTON").onclick = function (){
    location.href = "/RESULTPAGE";
  };
}
