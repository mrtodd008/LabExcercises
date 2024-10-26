// Question 1
const results = [
  "" + 1 + 0,
  "" - 1 + 0,
  true + false,
  !true,
  6 / "3",
  "2" * "3",
  4 + 5 + "px",
  "$" + 4 + 5,
  "4" - 2,
  "4px" - 2,
  " -9 " + 5,
  " -9 " - 5,
  null + 1,
  undefined + 1,
  undefined == null,
  undefined === null,
  " \t \n" - 2,
];

console.log(results);

// Question 2
let three = "3";
let four = "4";
let thirty = "30";
//what is the value of the following expressions?
let addition = three + four;
let multiplication = three * four;
let division = three / four;
let subtraction = three - four;
let lessThan1 = three < four;
let lessThan2 = thirty < four;

console.log(three);
console.log(four);
console.log(thirty);
console.log(addition);
console.log(multiplication);
console.log(division);
console.log(subtraction);
console.log(lessThan1);
console.log(lessThan2);

// Question 3
if (0) console.log("#1 zero is true");
if ("0") console.log("#2 zero is true");
if (null) console.log("null is true");
if (-1) console.log("negative is true");
if (1) console.log("positive is true");

// Question 4
let a = 2,
  b = 3;
let result = `${a} + ${b} is `;
if (b < 10) {
  result += "less than 10";
} else {
  result += "greater than 10";
}

console.log(result);

// Question 5
function getGreeting(name) {
  return " Hello " + name + "!";
}

console.log(getGreeting("name"));

// Question 6
const westley = {
  name: "Westley",
  numFingers: 5,
};
const rugen = {
  name: "Count Rugen",
  numFingers: 6,
};
const inigo = {
  firstName: "Inigo",
  lastName: "Nego",
  greeting(person) {
    let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}. `;
    console.log(greeting + this.getCatchPhrase(person));
  },
  getCatchPhrase: (person) =>
    person.numFingers === 6
      ? "You killed my father. Prepare to die."
      : "Nice to meet you.",
};
inigo.greeting(westley);
inigo.greeting(rugen);

// Question 7
const basketballGame = {
  score: 0,
  fouls: 0,

  freeThrow() {
    this.score++;
    return this; // Enable chaining
  },

  basket() {
    this.score += 2;
    return this; // Enable chaining
  },

  threePointer() {
    this.score += 3;
    return this; // Enable chaining
  },

  halfTime() {
    console.log(`Halftime score is ${this.score}, fouls: ${this.fouls}`);
    return this; // Enable chaining
  },

  fullTime() {
    console.log(`Final score is ${this.score}, fouls: ${this.fouls}`);
    return this; // Enable chaining
  },

  incrementFoul() {
    this.fouls++;
    return this; // Enable chaining
  },
};

// Example usage
basketballGame
  .basket()
  .freeThrow()
  .freeThrow()
  .incrementFoul()
  .basket()
  .threePointer()
  .halfTime()
  .incrementFoul()
  .incrementFoul()
  .fullTime();

// Question 8
function printObjectProperties(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

const sydney = {
  name: "Sydney",
  population: 5_121_000,
  state: "NSW",
  founded: "26 January 1788",
  timezone: "Australia/Sydney",
};

const NewYork = {
  name: "New York",
  population: 5_061_000,
  state: "NY",
  founded: "30 August 1835",
  timezone: "NYC",
};

// Test with Sydney
console.log("Sydney Properties:");
printObjectProperties(sydney);

// Test with Melbourne
console.log("\nNew York Properties:");
printObjectProperties(NewYork);

//Question 9
let teamSports = ["Hockey", "Cricket", "Volleyball"];
let moreSports = [...teamSports]; // Create a shallow copy
moreSports.push("Basketball");
moreSports.unshift("Soccer");

let dog1 = "Bingo";
let dog2 = dog1;
dog2 = "Rover";

let cat1 = { name: "Fluffy", breed: "Siberian" };
let cat2 = { ...cat1 }; // Create a shallow copy
cat2.name = "Whiskers";

console.log("Original teamSports:", teamSports); // Outputs: ['Hockey', 'Cricket', 'Volleyball']
console.log("Original dog1:", dog1); // Outputs: 'Bingo'
console.log("Original cat1:", cat1); // Outputs: { name: 'Fluffy', breed: 'Siberian' }

//Question 10

// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.human = true;

  this.canDrive = function () {
    return this.age >= 18; // Method to check if the person can drive
  };
}

// Create first and second persons
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 15);

// Print properties
console.log(person1); // Outputs: Person { name: 'Alice', age: 30, human: true, canDrive: [Function] }
console.log(person2); // Outputs: Person { name: 'Bob', age: 15, human: true, canDrive: [Function] }

// Class definition
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
  }

  canDrive() {
    return this.age >= 18; // Method to check if the person can drive
  }
}

// Create a third person
const person3 = new PersonClass("Charlie", 20);
console.log(person3); // Outputs: PersonClass { name: 'Charlie', age: 20, human: true }

// Check if they can drive
console.log(person1.canDrive()); // Outputs: true
console.log(person2.canDrive()); // Outputs: false
console.log(person3.canDrive()); // Outputs: true
