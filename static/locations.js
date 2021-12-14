//Pull info from JSON file
//const data = require('./locations.json');
//console.log(data);

//fetch("./locations.json")
//.then(response =>{
//  return response.json();
//})
//.then(data => console.log(data));

//fetch("locations.json").then(async response => {
  // try {
  //    const data = await response.json()
//      console.log('response data?', data)
//   } catch (error) {
//      console.log('Error happened here!')
//      console.error(error)
//   }
//})

//Use onclick event to run the random location generator
//when the user clicks on the button on main page


//document.getElementById("foodButton").onclick = randomLocation();
var placeId = 0;


function randomLocation(){
  var restaurants = {
    "merced" :
      [
        {
          "id": 1,
          "Place": "Five Guys",
          "Address": "3572 G St, Merced, CA, 95340",
          "Type": "Fast Food",
          "Rating": "4.1",
        },
        {
          "id": 2,
          "Place": "A&W Restaurant",
        "Address": "180 W Olive Ave, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "4.0"
      },
      {
        "id": 3,
        "Place": "Del Taco",
        "Address": "1798 W Olive Ave, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "4.1"
      },
      {
        "id": 4,
        "Place": "Carl's Jr.",
        "Address": "300 W Olive Ave, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "4.0"
      },
      {
        "id": 5,
        "Place": "Carl's Jr.",
        "Address": "1400 V St, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "4.0"
      },
      {
        "id": 6,
        "Place": "Jack in the Box",
        "Address": "595 W Olive Ave, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "3.8"
      },
      {
        "id": 7,
        "Place": "Chipotle Mexican Grill",
        "Address": "3110 R St Ste A, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "4.1"
      },
      {
        "id": 8,
        "Place": "McDonald's",
        "Address": "3055 Loughborough Dr, Merced, CA 95340",
        "Type": "",
        "Rating": "3.7"
      },
      {
        "id": 9,
        "Place": "McDonald's",
        "Address": "206 W Olive Ave, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "3.7"
      },
      {
        "id": 10,
        "Place": "McDonald's",
        "Address": "1060 W 13th St, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "3.6"
      },
      {
        "id": 11,
        "Place": "Taco Bell",
        "Address": "3140 G St, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "4.1"
      },
      {
        "id": 12,
        "Place": "Taco Bell",
        "Address": "1440 Martin Luther King Jr Way, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "4.1"
      },
      {
        "id": 13,
        "Place": "Sonic Drive-In",
        "Address": "1101 W 18th St, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "3.9"
      },
      {
        "id": 14,
        "Place": "Long John Silver's",
        "Address": "360 W Olive Ave, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "4.2"
      },
      {
        "id": 15,
        "Place": "Burger King",
        "Address": "555 W Olive Ave, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "3.3"
      },
      {
        "id": 16,
        "Place": "Wendy's",
        "Address": "1400 Martin Luther King Jr Way, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "4.0"
      },
      {
        "id": 17,
        "Place": "El Pollo Loco",
        "Address": "613 W Olive Ave, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "4.0"
      },
      {
        "id": 18,
        "Place": "Five Star Burger Merced",
        "Address": "1725 Yosemite Pkwy, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "4.5"
      },
      {
        "id": 19,
        "Place": "H & W Drive-In",
        "Address": "121 W 16th St, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "4.6"
      },
      {
        "id": 20,
        "Place": "King's Asian Cuisine",
        "Address": "360 W Main St",
        "Type": "Asian",
        "Rating": "4.3"
      },
      {
        "id": 21,
        "Place": "Houa Khong 2",
        "Address": "3518 G St, Merced, CA 95340",
        "Type": "Asian",
        "Rating": "4.4"
      },
      {
        "id": 22,
        "Place": "Rice Bowl",
        "Address": "2410 U St, Merced, CA 95340",
        "Type": "Asian",
        "Rating": "5.0"
      },
      {
        "id": 23,
        "Place": "Thai Cuisine",
        "Address": "23 E 16th St, Merced, CA 95340",
        "Type": "Asian",
        "Rating": "4.4"
      },
      {
        "id": 24,
        "Place": "New Thai Cuisine",
        "Address": "909 W 16th St, Merced, CA 95340",
        "Type": "Asian",
        "Rating": "4.4"
      },
      {
        "id": 25,
        "Place": "Tokyo Don",
        "Address": "3040 Park Ave #E2, Merced, CA 95340",
        "Type": "Asian",
        "Rating": "3.5"
      },
      {
        "id": 26,
        "Place": "Hong Kong",
        "Address": "3556 G St, Merced, CA 95340",
        "Type": "Asian",
        "Rating": "4.1"
      },
      {
        "id": 27,
        "Place": "Golden Bowl",
        "Address": "3144 G St, Merced, CA 95340",
        "Type": "Asian",
        "Rating": "4.2"
      },
      {
        "id": 28,
        "Place": "Thai Star",
        "Address": "57 W Alexander Ave, Merced, CA 95340",
        "Type": "Asian",
        "Rating": "4.6"
      },
      {
        "id": 29,
        "Place": "Coconut Cafe",
        "Address": "3368 N State Hwy 59 STE N, Merced, CA 95340",
        "Type": "Asian",
        "Rating": "4.6"
      },
      {
        "id": 30,
        "Place": "Fusion Cafe & Fruits",
        "Address": "900 Loughborough Dr Ste. E, Merced, CA 95340",
        "Type": "Asian",
        "Rating": "4.5"
      },


      {
        "id": 31,
        "Place": "Sizzler",
        "Address": "1334 W Olive Ave, Merced, CA 95340",
        "Type": "Steakhouse",
        "Rating": "4.1"
      },
      {
        "id": 32,
        "Place": "Country Waffles Merced",
        "Address": "1794 W Olive Ave, Merced< CA 95340",
        "Type": "American",
        "Rating": "4.3"
      },
      {
        "id": 33,
        "Place": "Paul's Place Restaurant & Bakery",
        "Address": "2991 G St, Merced, CA 95340",
        "Type": "American",
        "Rating": "4.4"
      },
      {
        "id": 34,
        "Place": "Table 59",
        "Adress": "3360 N State Hwy 59, Merced, CA 95340",
        "Type": "Italian",
        "Rating": "4.4"
      },
      {
        "id": 35,
        "Place": "Pizza Villa",
        "Address": "1111 Loughborough Dr, CA 95340",
        "Type": "Italian",
        "Rating": "4.3"
      },
      {
        "id": 36,
        "Place": "Strings",
        "Address": "731 E Yosemite Ave, Merced, CA 95340",
        "Type": "Italian",
        "Rating": "4.2"
      },
      {
        "id": 37,
        "Place": "Villa's",
        "Address": "900 Loughborough Dr, Merced, CA 95348",
        "Type": "Mexican",
        "Rating": "4.4"
      },
      {
        "id": 38,
        "Place": "El Asadero Taco Shop",
        "Address": "3532 G St, Merced, CA 95340",
        "Type": "Mexican",
        "Rating": "4.3"
      },
      {
        "id": 39,
        "Place": "Taqueria El Huarache",
        "Address": "3115 R St, Merced, CA 95340",
        "Type": "Mexican",
        "Rating": "4.1"
      },
      {
        "id": 40,
        "Place": "Applebee's Grill + Bar",
        "Address": "1734 W Olive Ave, Merced, CA 95340",
        "Type": "Bar and Grill",
        "Rating": "3.9"
      }
    ],
  }
  //Redirect user using onclick event
  //document.getElementbyId("foodButton").onclick = function (){
  //  location.href = "/RESULTPAGE";
  //};
  //Get location data from JSON file
  //var locations = JSON.parse("Merced");
  //Generate random number
  var randomNum = Math.floor((Math.random() * 40) + 1);

  //Use random number to get random location info
  var placeName = restaurants.merced[randomNum].Place;
  var placeAddress = restaurants.merced[randomNum].Address;
  var placeType = restaurants.merced[randomNum].Type;
  var placeRating = restaurants.merced[randomNum].Rating;
  var newPlaceId = restaurants.merced[randomNum].id;
  //Use HTML to print location info
  document.getElementById("nameHTML").innerHTML = placeName;
  document.getElementById("addressHTML").innerHTML = placeAddress;
  document.getElementById("typeHTML").innerHTML = placeType;
  document.getElementById("ratingHTML").innerHTML = placeRating;

  document.querySelector("div.result").style.display = "inline-block";
  console.log(newPlaceId);
  return newPlaceId;
}

placeId = newPlaceId;

function redirectRestaurant(){
  const urlName = encodeURI(document.getElementById("nameHTML").innerHTML);
  window.location.href = "http://127.0.0.1:5000/moredetails/" + urlName;
}

function localSaveLocation(){

  var urlLive = window.location.href;

  var pathname = new URL(urlLive).pathname
  const lookingRestaurant = decodeURI(pathname.split("/")[2])




  var restaurants = {
    "merced" :
      [
        {
          "id": 1,
          "Place": "Five Guys",
          "Address": "3572 G St, Merced, CA, 95340",
          "Type": "Fast Food",
          "Rating": "4.1",
        },
        {
          "id": 2,
          "Place": "A&W Restaurant",
        "Address": "180 W Olive Ave, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "4.0"
      },
      {
        "id": 3,
        "Place": "Del Taco",
        "Address": "1798 W Olive Ave, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "4.1"
      },
      {
        "id": 4,
        "Place": "Carl's Jr.",
        "Address": "300 W Olive Ave, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "4.0"
      },
      {
        "id": 5,
        "Place": "Carl's Jr.",
        "Address": "1400 V St, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "4.0"
      },
      {
        "id": 6,
        "Place": "Jack in the Box",
        "Address": "595 W Olive Ave, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "3.8"
      },
      {
        "id": 7,
        "Place": "Chipotle Mexican Grill",
        "Address": "3110 R St Ste A, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "4.1"
      },
      {
        "id": 8,
        "Place": "McDonald's",
        "Address": "3055 Loughborough Dr, Merced, CA 95340",
        "Type": "",
        "Rating": "3.7"
      },
      {
        "id": 9,
        "Place": "McDonald's",
        "Address": "206 W Olive Ave, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "3.7"
      },
      {
        "id": 10,
        "Place": "McDonald's",
        "Address": "1060 W 13th St, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "3.6"
      },
      {
        "id": 11,
        "Place": "Taco Bell",
        "Address": "3140 G St, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "4.1"
      },
      {
        "id": 12,
        "Place": "Taco Bell",
        "Address": "1440 Martin Luther King Jr Way, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "4.1"
      },
      {
        "id": 13,
        "Place": "Sonic Drive-In",
        "Address": "1101 W 18th St, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "3.9"
      },
      {
        "id": 14,
        "Place": "Long John Silver's",
        "Address": "360 W Olive Ave, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "4.2"
      },
      {
        "id": 15,
        "Place": "Burger King",
        "Address": "555 W Olive Ave, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "3.3"
      },
      {
        "id": 16,
        "Place": "Wendy's",
        "Address": "1400 Martin Luther King Jr Way, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "4.0"
      },
      {
        "id": 17,
        "Place": "El Pollo Loco",
        "Address": "613 W Olive Ave, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "4.0"
      },
      {
        "id": 18,
        "Place": "Five Star Burger Merced",
        "Address": "1725 Yosemite Pkwy, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "4.5"
      },
      {
        "id": 19,
        "Place": "H & W Drive-In",
        "Address": "121 W 16th St, Merced, CA 95340",
        "Type": "Fast Food",
        "Rating": "4.6"
      },
      {
        "id": 20,
        "Place": "King's Asian Cuisine",
        "Address": "360 W Main St",
        "Type": "Asian",
        "Rating": "4.3"
      },
      {
        "id": 21,
        "Place": "Houa Khong 2",
        "Address": "3518 G St, Merced, CA 95340",
        "Type": "Asian",
        "Rating": "4.4"
      },
      {
        "id": 22,
        "Place": "Rice Bowl",
        "Address": "2410 U St, Merced, CA 95340",
        "Type": "Asian",
        "Rating": "5.0"
      },
      {
        "id": 23,
        "Place": "Thai Cuisine",
        "Address": "23 E 16th St, Merced, CA 95340",
        "Type": "Asian",
        "Rating": "4.4"
      },
      {
        "id": 24,
        "Place": "New Thai Cuisine",
        "Address": "909 W 16th St, Merced, CA 95340",
        "Type": "Asian",
        "Rating": "4.4"
      },
      {
        "id": 25,
        "Place": "Tokyo Don",
        "Address": "3040 Park Ave #E2, Merced, CA 95340",
        "Type": "Asian",
        "Rating": "3.5"
      },
      {
        "id": 26,
        "Place": "Hong Kong",
        "Address": "3556 G St, Merced, CA 95340",
        "Type": "Asian",
        "Rating": "4.1"
      },
      {
        "id": 27,
        "Place": "Golden Bowl",
        "Address": "3144 G St, Merced, CA 95340",
        "Type": "Asian",
        "Rating": "4.2"
      },
      {
        "id": 28,
        "Place": "Thai Star",
        "Address": "57 W Alexander Ave, Merced, CA 95340",
        "Type": "Asian",
        "Rating": "4.6"
      },
      {
        "id": 29,
        "Place": "Coconut Cafe",
        "Address": "3368 N State Hwy 59 STE N, Merced, CA 95340",
        "Type": "Asian",
        "Rating": "4.6"
      },
      {
        "id": 30,
        "Place": "Fusion Cafe & Fruits",
        "Address": "900 Loughborough Dr Ste. E, Merced, CA 95340",
        "Type": "Asian",
        "Rating": "4.5"
      },


      {
        "id": 31,
        "Place": "Sizzler",
        "Address": "1334 W Olive Ave, Merced, CA 95340",
        "Type": "Steakhouse",
        "Rating": "4.1"
      },
      {
        "id": 32,
        "Place": "Country Waffles Merced",
        "Address": "1794 W Olive Ave, Merced< CA 95340",
        "Type": "American",
        "Rating": "4.3"
      },
      {
        "id": 33,
        "Place": "Paul's Place Restaurant & Bakery",
        "Address": "2991 G St, Merced, CA 95340",
        "Type": "American",
        "Rating": "4.4"
      },
      {
        "id": 34,
        "Place": "Table 59",
        "Adress": "3360 N State Hwy 59, Merced, CA 95340",
        "Type": "Italian",
        "Rating": "4.4"
      },
      {
        "id": 35,
        "Place": "Pizza Villa",
        "Address": "1111 Loughborough Dr, CA 95340",
        "Type": "Italian",
        "Rating": "4.3"
      },
      {
        "id": 36,
        "Place": "Strings",
        "Address": "731 E Yosemite Ave, Merced, CA 95340",
        "Type": "Italian",
        "Rating": "4.2"
      },
      {
        "id": 37,
        "Place": "Villa's",
        "Address": "900 Loughborough Dr, Merced, CA 95348",
        "Type": "Mexican",
        "Rating": "4.4"
      },
      {
        "id": 38,
        "Place": "El Asadero Taco Shop",
        "Address": "3532 G St, Merced, CA 95340",
        "Type": "Mexican",
        "Rating": "4.3"
      },
      {
        "id": 39,
        "Place": "Taqueria El Huarache",
        "Address": "3115 R St, Merced, CA 95340",
        "Type": "Mexican",
        "Rating": "4.1"
      },
      {
        "id": 40,
        "Place": "Applebee's Grill + Bar",
        "Address": "1734 W Olive Ave, Merced, CA 95340",
        "Type": "Bar and Grill",
        "Rating": "3.9"
      }
    ],
  }
  //Redirect user using onclick event
  //document.getElementbyId("foodButton").onclick = function (){
  //  location.href = "/RESULTPAGE";
  //};
  //Get location data from JSON file
  //var locations = JSON.parse("Merced");
  //Generate random number
  var rest;
  for(objs of restaurants.merced){
    if(objs.Place == lookingRestaurant){
      rest = objs;
      console.log(objs.Place + " " + lookingRestaurant)
      break;
    }

  }

  //Use random number to get random location info
  // var savedPlaceName = restaurants.merced[placeId].Place;
  // var savedPlaceAddress = restaurants.merced[placeId].Address;
  // var savedPlaceType = restaurants.merced[placeId].Type;
  // var savedPlaceRating = restaurants.merced[placeId].Rating;
  // //Use HTML to print location info
  document.getElementById("nameRestaurant").innerHTML = rest.Place;
  document.getElementById("addressRestaurant").innerHTML = rest.Address;
  document.getElementById("typeRestaurant").innerHTML = rest.Type;
  document.getElementById("ratingRestaurant").innerHTML = rest.Rating;

  //document.querySelector("div.result").style.display = "inline-block";

}
