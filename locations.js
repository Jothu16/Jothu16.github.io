//Pull info from JSON file
//const data = require('./locations.json');
//console.log(data);

//fetch("./locations.json")
//.then(response =>{
//  return response.json();
//})
//.then(data => console.log(data));

fetch("locations.json").then(async response => {
   try {
      const data = await response.json()
      console.log('response data?', data)
   } catch (error) {
      console.log('Error happened here!')
      console.error(error)
   }
})

//Use onclick event to run the random location generator
//when the user clicks on the button on main page
document.getElementById("foodButton").onclick = randomLocation();


function randomLocation(){
  //Redirect user using onclick event
  //document.getElementbyId("foodButton").onclick = function (){
  //  location.href = "/RESULTPAGE";
  //};
  //Get location data from JSON file
  var locations = JSON.parse("Merced");
  //Generate random number
  var randomNum = Math.floor((Math.random() * 40) + 1);

  //Use random number to get random location info
  var placeName = locations[randomNum.Place];
  var placeAddress = locations[randomNum.Address];
  var placeType = locations[randomNum.Type];
  var placeRating = locations[randomNum.Rating];

  //Use HTML to print location info
  document.getElementById("nameHTML").innerHTML = placeName;
  document.getElementById("addressHTML").innerHTML = placeAddress;
  document.getElementById("typeHTML").innerHTML = placeType;
  document.getElementById("ratingHTML").innerHTML = placeRating;
}
