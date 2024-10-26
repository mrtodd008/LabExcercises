// Question 1
function ucFirstLetters(str) {
  return str
    .split(" ") // Split the string into an array of words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(" "); // Join the words back into a single string
}

// Test the function with different strings
console.log(ucFirstLetters("los angeles")); // Los Angeles
console.log(ucFirstLetters("hello world")); // Hello World
console.log(ucFirstLetters("this is a test")); // This Is A Test
console.log(ucFirstLetters("javascript is fun")); // Javascript Is Fun
console.log(ucFirstLetters("capitalize every word")); // Capitalize Every Word

// Question 2

function truncate(str, max) {
  if (str.length > max) {
    return str.slice(0, max - 3) + "..."; // Truncate and add ellipsis
  }
  return str; // Return original string if it's not too long
}

// Test the function
console.log(truncate("This text will be truncated if it is too long", 25)); // This text will be truncat...

// Question 3

const animals = ["Tiger", "Giraffe"];

// a) Add 2 new values to the end
animals.push("Elephant", "Zebra");
console.log(animals); // ['Tiger', 'Giraffe', 'Elephant', 'Zebra']

// b) Add 2 new values to the beginning
animals.unshift("Lion", "Panda");
console.log(animals); // ['Lion', 'Panda', 'Tiger', 'Giraffe', 'Elephant', 'Zebra']

// c) Sort the values alphabetically
animals.sort();
console.log(animals); // ['Elephant', 'Giraffe', 'Lion', 'Panda', 'Tiger', 'Zebra']

// d) Function to replace the value in the middle of the animals array
function replaceMiddleAnimal(newValue) {
  const middleIndex = Math.floor(animals.length / 2);
  animals[middleIndex] = newValue;
}

replaceMiddleAnimal("Koala");
console.log(animals); // Check the output with the middle animal replaced

// e) Function to find matching animals
function findMatchingAnimals(beginsWith) {
  return animals.filter((animal) =>
    animal.toLowerCase().startsWith(beginsWith.toLowerCase())
  );
}

console.log(findMatchingAnimals("l")); // ['Lion']
console.log(findMatchingAnimals("e")); // ['Elephant']
console.log(findMatchingAnimals("Z")); // ['Zebra']

// Question 4
//a
function camelCase(cssProp) {
  return cssProp
    .split("-") // Split the string by dashes
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    ) // Capitalize the first letter of each subsequent word
    .join(""); // Join the words back together
}

// Testing the function
console.log(camelCase("margin-left")); // marginLeft
console.log(camelCase("background-image")); // backgroundImage
console.log(camelCase("display")); // display

//b
function camelCaseForLoop(cssProp) {
  const parts = cssProp.split("-");
  let result = parts[0]; // Start with the first word

  for (let i = 1; i < parts.length; i++) {
    result += parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
  }

  return result;
}

// Testing the for loop version
console.log(camelCaseForLoop("margin-left")); // marginLeft

//c

function camelCaseForOfLoop(cssProp) {
  const parts = cssProp.split("-");
  let result = parts[0]; // Start with the first word

  for (const part of parts.slice(1)) {
    result += part.charAt(0).toUpperCase() + part.slice(1);
  }

  return result;
}

// Testing the for...of loop version
console.log(camelCaseForOfLoop("background-image")); // backgroundImage

//d

function camelCaseWhileLoop(cssProp) {
  const parts = cssProp.split("-");
  let result = parts[0]; // Start with the first word
  let i = 1;

  while (i < parts.length) {
    result += parts[i].charAt(0).toUpperCase() + parts[i].slice(1);
    i++;
  }

  return result;
}

// Testing the while loop version
console.log(camelCaseWhileLoop("display")); // display

//E

//a
function camelCaseWithConditional(cssProp) {
  return cssProp
    .split("-")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}

// Testing the function with the conditional operator
console.log(camelCaseWithConditional("margin-left")); // marginLeft

//Question 5

function currencyAddition(float1, float2) {
  return parseFloat((float1 + float2).toFixed(2)); // Ensure the result is a float with two decimal places
}

// Testing the function
console.log(currencyAddition(0.2, 0.1)); // 0.30

//b
function currencyOperation(float1, float2, operation) {
  let result;

  switch (operation) {
    case "+":
      result = float1 + float2;
      break;
    case "-":
      result = float1 - float2;
      break;
    case "*":
      result = float1 * float2;
      break;
    case "/":
      result = float1 / float2;
      break;
    default:
      throw new Error("Invalid operation");
  }

  return parseFloat(result.toFixed(2)); // Ensure the result has two decimal places
}

// Testing the function
console.log(currencyOperation(0.2, 0.1, "+")); // 0.30
console.log(currencyOperation(0.2, 0.1, "-")); // 0.10
console.log(currencyOperation(0.2, 0.1, "*")); // 0.02
console.log(currencyOperation(0.2, 0.1, "/")); // 2.00

//c
function currencyOperation(float1, float2, operation, numDecimals) {
  let result;

  switch (operation) {
    case "+":
      result = float1 + float2;
      break;
    case "-":
      result = float1 - float2;
      break;
    case "*":
      result = float1 * float2;
      break;
    case "/":
      result = float1 / float2;
      break;
    default:
      throw new Error("Invalid operation");
  }

  // Ensure numDecimals is between 1 and 10
  if (numDecimals < 1 || numDecimals > 10) {
    throw new Error("numDecimals must be between 1 and 10");
  }

  const fixedResult = result.toFixed(numDecimals); // Format the result
  return parseFloat(fixedResult); // Return as float
}

// Testing the extended function
console.log(currencyOperation(0.2, 0.1, "+", 2)); // 0.30
console.log(currencyOperation(0.2, 0.1, "*", 4)); // 0.0200

function currencyAddition(float1, float2) {
  // Multiply by 100 to shift decimal places, add, then shift back
  return Math.round(float1 * 100 + float2 * 100) / 100;
}

// Testing the function
console.log(currencyAddition(0.1, 0.2)); // 0.3
console.log(0.3 === currencyAddition(0.1, 0.2)); // true

console.log(currencyAddition(0.15, 0.25)); // 0.40
console.log(0.4 === currencyAddition(0.15, 0.25)); // true

console.log(currencyOperation(0.3, 0.1, "-")); // 0.2
console.log(currencyOperation(0.3, 0.1, "*")); // 0.03
console.log(currencyOperation(0.3, 0.1, "/")); // 3

// Question 6

function unique(duplicatesArray) {
  return Array.from(new Set(duplicatesArray)); // Convert Set back to an array
}

// Test with the provided arrays
const colours = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "red",
  "blue",
  "yellow",
];
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43];

console.log(unique(colours)); // ['red', 'green', 'blue', 'yellow', 'orange']
console.log(unique(testScores)); // [55, 84, 97, 63, 32, 91, 43]

// Test with another array of your own
const mixedArray = [1, 2, 2, 3, 4, 4, 5, 1, 6];
console.log(unique(mixedArray)); // [1, 2, 3, 4, 5, 6]

// Question 7

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { id: 3, title: "1984", author: "George Orwell", year: 1949 },
  { id: 4, title: "Brave New World", author: "Aldous Huxley", year: 1932 },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
];
//b
function getBookTitle(bookId) {
  const book = books.find((b) => b.id === bookId);
  return book ? book.title : null; // Return title or null if not found
}

// Testing the function
console.log(getBookTitle(2)); // 'To Kill a Mockingbird'
console.log(getBookTitle(5)); // 'The Catcher in the Rye'

//c
function getOldBooks() {
  return books.filter((b) => b.year < 1950); // Filter books published before 1950
}

// Testing the function
console.log(getOldBooks());
/*
[
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }
]
*/

//d

function addGenre() {
  return books.map((b) => ({ ...b, genre: "classic" })); // Add 'classic' genre to each book
}

// Testing the function
console.log(addGenre());
/*
[
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, genre: 'classic' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, genre: 'classic' },
    ...
]
*/
//e

function getTitles(authorInitial) {
  return books
    .filter((b) => b.author.startsWith(authorInitial)) // Filter books by author initial
    .map((b) => b.title); // Map to titles
}

// Testing the function
console.log(getTitles("F")); // ['The Great Gatsby']
console.log(getTitles("H")); // ['To Kill a Mockingbird']

//e
function latestBook() {
  let latest = null;
  books.forEach((b) => {
    if (!latest || b.year > latest.year) {
      latest = b; // Update latest if current book is newer
    }
  });
  return latest;
}

// Testing the function
console.log(latestBook()); // { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }

// Question 8

const phoneBookABC = new Map();
phoneBookABC.set("Annabelle", "0412312343");
phoneBookABC.set("Barry", "0433221117");
phoneBookABC.set("Caroline", "0455221182");

const phoneBookDEF = new Map([
  ["David", "0466334455"],
  ["Eva", "0499445566"],
  ["Frank", "0422334455"],
]);

// Update Caroline's phone number
phoneBookABC.set("Caroline", "0461122334");

// Function to print phone book
function printPhoneBook(contacts) {
  for (const [name, number] of contacts) {
    console.log(`${name}: ${number}`);
  }
}

// Print phoneBookABC
console.log("Phone Book ABC:");
printPhoneBook(phoneBookABC);

// Combine the two phone books
const combinedPhoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

// Print combined phone book
console.log("\nCombined Phone Book:");
printPhoneBook(combinedPhoneBook);

// Questiom 9

let salaries = {
  Timothy: 35000,
  David: 25000,
  Mary: 55000,
  Christina: 75000,
  James: 43000,
};

// a) Function to calculate the total of all salaries
function sumSalaries(salaries) {
  let total = 0;
  for (const salary of Object.values(salaries)) {
    total += salary; // Add each salary to the total
  }
  return total; // Return the total salary
}

// b) Function to find the person earning the highest salary
function topEarner(salaries) {
  let maxSalary = 0;
  let highestPaidEmployee = "";

  for (const [employee, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary; // Update maxSalary
      highestPaidEmployee = employee; // Update highest paid employee
    }
  }

  return highestPaidEmployee; // Return the name of the top earner
}

// Testing the functions
console.log("Total Salaries:", sumSalaries(salaries)); // Output the total salaries
console.log("Top Earner:", topEarner(salaries)); // Output the top earner

// Question 10

const today = new Date();

// a) Print current time
console.log("Current time is " + today.toLocaleTimeString());

// b) Print the total number of hours that have passed today
console.log(today.getHours() + " hours have passed so far today");

// c) Print the total number of minutes that have passed so far today
const minutesPassed = today.getHours() * 60 + today.getMinutes();
console.log(minutesPassed + " minutes have passed so far today");

// d) Print the total number of seconds that have passed so far today
const secondsPassed =
  today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds();
console.log(secondsPassed + " seconds have passed so far today");

// e) Calculate and print your age
function calculateAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  // Adjust age if the birth month hasn't occurred yet this year
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  const days = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24));
  const years = Math.floor(days / 365);
  const months = Math.floor((days % 365) / 30);
  const daysLeft = days % 30;

  return { years, months, daysLeft };
}

// Example birth date: January 1, 1990
const birthDate = new Date(1990, 0, 1); // Note: Months are 0-indexed (0 = January)
const age = calculateAge(birthDate);
console.log(
  `I am ${age.years} years, ${age.months} months, and ${age.daysLeft} days old`
);

// f) Function to calculate days between two dates
function daysInBetween(date1, date2) {
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const diffInMilliseconds = Math.abs(date2 - date1);
  return Math.floor(diffInMilliseconds / millisecondsPerDay);
}

// Example usage of daysInBetween
const date1 = new Date(2022, 0, 1); // January 1, 2022
const date2 = new Date(2024, 0, 1); // January 1, 2024
console.log(
  `There are ${daysInBetween(
    date1,
    date2
  )} days between ${date1.toLocaleDateString()} and ${date2.toLocaleDateString()}`
);
