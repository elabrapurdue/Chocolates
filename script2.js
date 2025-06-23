let chocs = [
  {
    chocName: "Plain Milk",
    description: "Smooth milk chocolate",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream",
    img: "plain_milk.jpg",
  },
  {
    chocName: "Plain Dark",
    description: "Dark chocolate",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream",
    img: "plain_dark.jpg",
  },
  {
    chocName: "Bailey's Cup",
    description: "Dark chocolate with Bailey's Cream Filling",
    calories: 100,
    ingredients: "Cocoa butter, Milk, Cream, baileys",
    img: "baileys_cup.jpg",
  },
  {
    chocName: "Cappuccino Cup",
    description: "Dark chocolate with Cappuccino style cream filling",
    calories: 120,
    ingredients: "Cocoa butter, Milk, Cream, Cappuccino fondant",
    img: "cappuccino_cup.jpg",
  },
  {
    chocName: "Nutter Butter",
    description: "Dark chocolate with peanut butter",
    calories: 190,
    ingredients: "Cocoa butter, Milk, Cream, peanut butter",
    img: "nutter_butter.jpg",
  },
  {
    chocName: "Orange Fondant",
    description: "Dark chocolate folded with orange fondant",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream, orange peel, orange fondant",
    img: "orange_fondant.jpg",
  },
  {
    chocName: "Pistachio Cup",
    description: "Dark chocolate with nuggets of pistachio",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream, chunks of pistachio nut",
    img: "pistachio_diamond.jpg",
  },
  {
    chocName: "Rum Barrel",
    description: "Dark chocolate with a decadent rum filling",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream, rum paste and rum flavourings",
    img: "rum_barrel.jpg",
  },
  {
    chocName: "Toffee Crunch",
    description: "Dark chocolate with brittle toffee candy",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream, toffee",
    img: "toffee_crunch.jpg",
  },
  {
    chocName: "Plain Supreme",
    description: "Dark chocolate with slivers of milk chocolate",
    calories: 90,
    ingredients: "Cocoa butter, Milk, Cream",
    img: "plain_hybrid.jpg",
  },
];

function displayChocolates() {
  chocs.forEach((choc, index) => {
    $('#chocContainer').append(`
      <div class="card" data-index="${index}">
        <h3>${choc.chocName}</h3>
        <img src="${choc.img}" alt="${choc.chocName}">
        <div class="info">
          <p><strong>${choc.description}</strong></p>
          <p>Calories: ${choc.calories}</p>
          <p>Ingredients: ${choc.ingredients}</p>
        </div>
      </div>
    `);
  });
}

function toggleInfo() {
  $('.info').toggle();
}

function giveFreeSample() {
  let randomIndex = Math.floor(Math.random() * chocs.length);
  let randomCode = Math.floor(Math.random() * 50) + 1;

  $('.card').css("background-color", "#fffdd0"); // reset
  $('.card').eq(randomIndex).css("background-color", "yellow");

  alert(`🎉 FREE SAMPLE CODE: ${randomCode}. Show this to the cashier!`);
}

$(document).ready(() => {
  displayChocolates();
  $('#toggleInfoBtn').click(toggleInfo);
  $('#freeSampleBtn').click(giveFreeSample);
});
