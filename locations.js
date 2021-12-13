//Pull info from JSON file
const data = require('./locations.json');
console.log(data);

fetch("./locations.json")
.then(response =>{
  return response.json();
})
.then(data => console.log(data));

function randomLocation(){
  var locations = JSON.parse(Merced);

}
