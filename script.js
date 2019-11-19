var cards;

let whatTheCardsHold = [
  {
    "name" : "Old Man",
    "image" : "oldman.jpg",
    "qualities": ["color", "vintage", "symmetry"]
  },
  {
    "name" : "Night Life",
    "image" : "saif.jpg",
    "qualities": ["colors", "accents", "raw"]
  },
  {
    "name" : "Stage",
    "image" : "Stage.jpg",
    "qualities": ["lights", "symmetry", "still"]
  }
];


function createDeck(incomingJSON){
  var cardDiv = document.createElement("DIV");

  //create div for these whatTheCardsHold

  //create h3 for names
  let name = document.createElement("H3");
  name.innerHTML = incomingJSON["name"];
  cardDiv.appendChild(name);

  //create div for images
  let image = document.createElement("IMG");
  image.src = incomingJSON["image"];
  cardDiv.appendChild(image);

  //create g3 again for qualities
  let qualities = document.createElement("H3");
  qualities.innerHTML = incomingJSON["qualities"];
  cardDiv.appendChild(qualities);

  console.log("createDeck cards:");
  console.log(cards);
  cards.appendChild(cardDiv);
}

document.addEventListener("DOMContentLoaded", function(event){

  cards = document.getElementById('cards');
  console.log("Loaded cards:")
  console.log(cards);

  for(var i = 0; i < whatTheCardsHold.length; i++){
    createDeck(whatTheCardsHold[i]);
  }

})

// cards not appearing
// blue background behind cards?
// blue background only for "WHO am I?"
