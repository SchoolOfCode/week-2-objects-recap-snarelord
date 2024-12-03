const myHouse = {
    stories: 2,
    parking: false,
    bedrooms: 2,
    garden: true,
    energyEfficienyRating: "D",
};

const myCar = {
    color: "Red",
    wheels: 4,
    powerSteering: true,
    seats: 2,
    mpg: 20,
};

const myFavouriteFilm = {
    title: "The Dark Knight",
    released: "2008",
    leadActor: "Christian Bale",
};

let person = {
    name: "Ben",
    likesChocolate: false,
  };

console.log(person.likesChocolate);

if (person.likesChocolate) {
    console.log("Ben loves chocolate")
} else {
    console.log("Ben hates chocolate")
};

let desiredPleasantry = "wagwarn";

let bensPhrases = {
  greeting: "Well hello there!",
  farewell: "See you in another life, brother",
  smallTalk: "Warm today, isn't it...",
};

console.log(bensPhrases.smallTalk);
console.log(desiredPleasantry);

let me = {
    firstName: "Kit",
    lastName: "Jones",
    isBootcamper: false,
  };

  me.isBootcamper = true;
  console.log(me.isBootcamper);

  let communication = {
    success: true,
    payload: {
      message: {
        text: "Please send biscuits!",
        priority: "URGENT",
      },
    },
  };

let messageText = communication.payload.message.text;
console.log(messageText);