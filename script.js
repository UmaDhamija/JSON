var cards;

let whatTheCardsHold = [
  {
    "name" : "Old Man",
    "image" : "oldman.jpg",
    "qualities": ["Color", " Vintage", " Symmetry"]
  },
  {
    "name" : "Night Life",
    "image" : "saif.jpg",
    "qualities": ["Colors", " Accents", " Raw"]
  },
  {
    "name" : "Stage",
    "image" : "Stage.jpg",
    "qualities": ["Lights", " Symmetry", " Still"]
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
  let qualities = document.createElement("H4");
  qualities.innerHTML = incomingJSON["qualities"];
  cardDiv.appendChild(qualities);

  console.log("createDeck cards:");
  console.log(cards);
  cards.appendChild(cardDiv);
}

document.addEventListener("DOMContentLoaded", function(event){

  cards = document.getElementById('cards');

  for(var i = 0; i < whatTheCardsHold.length; i++){
    createDeck(whatTheCardsHold[i]);
  }

})

// cards not appearing
// blue background behind cards?
// blue background only for "WHO am I?"
