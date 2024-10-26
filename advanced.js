// Question 1
let counter1 = makeCounter();
let counter2 = makeCounter();

counter1(); // 1
counter1(); // 2

counter2(); // 1 (independent of counter1)
counter2(); // 2 (still independent)

function makeCounter(startFrom = 0) {
  let currentCount = startFrom;
  return function () {
    currentCount++;
    console.log(currentCount);
    return currentCount;
  };
}

// Testing the modified counter
let counter3 = makeCounter(5);
counter3(); // 6
counter3(); // 7

function makeCounter(startFrom = 0, incrementBy = 1) {
  let currentCount = startFrom;
  return function () {
    currentCount += incrementBy;
    console.log(currentCount);
    return currentCount;
  };
}

// Testing the modified counter with both startFrom and incrementBy
let counter4 = makeCounter(5, 2);
counter4(); // 7 (5 + 2)
counter4(); // 9 (7 + 2)

// Question 2

const delayMsg = (msg) => {
  console.log(`This message will be printed after a delay: ${msg}`);
};

setTimeout(delayMsg, 100, "#1: Delayed by 100ms");
setTimeout(delayMsg, 20, "#2: Delayed by 20ms");
setTimeout(delayMsg, 0, "#3: Delayed by 0ms");
delayMsg("#4: Not delayed at all");

// Adding a fifth test with a large delay
const timeoutId = setTimeout(delayMsg, 10000, "#5: Delayed by 10 seconds");

// Clear the timeout to prevent it from executing
clearTimeout(timeoutId);

// Question 3

function debounce(func, wait = 1000) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
}

function printMe(msg) {
  console.log(`printing debounced message: ${msg}`);
}

// Create a debounced version of printMe
printMe = debounce(printMe, 1000);

// Fire off 3 calls to printMe within 300ms with different messages
setTimeout(() => printMe("First call"), 100);
setTimeout(() => printMe("Second call"), 200);
setTimeout(() => printMe("Third call"), 300);

// Question 5

// Function using setInterval
function printFibonacci(limit) {
  let count = 0;
  let a = 1,
    b = 1;

  const intervalId = setInterval(() => {
    if (count < limit) {
      console.log(a);
      [a, b] = [b, a + b]; // Update Fibonacci numbers
      count++;
    } else {
      clearInterval(intervalId); // Stop the interval after reaching the limit
    }
  }, 1000);
}

// Function using nested setTimeout
function printFibonacciTimeouts(limit) {
  let count = 0;
  let a = 1,
    b = 1;

  function printNext() {
    if (count < limit) {
      console.log(a);
      [a, b] = [b, a + b]; // Update Fibonacci numbers
      count++;
      setTimeout(printNext, 1000); // Schedule the next number
    }
  }

  printNext(); // Start the first call
}

// Example usage
printFibonacci(10); // Print first 10 Fibonacci numbers using setInterval
// printFibonacciTimeouts(10); // Uncomment to print using nested setTimeout

// Question 6

let car = {
  make: "Porsche",
  model: "911",
  year: 1964,
  description() {
    console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
  },
};

// a) Correcting setTimeout call
car.description(); // Works
setTimeout(() => car.description(), 200); // Now works

// b) Clone and change the year
let newCar = { ...car, year: 2020 };
console.log(newCar); // { make: 'Porsche', model: '911', year: 2020, description: [Function: description] }

// c) The delayed description() call will use original values from `car`, not `newCar`.

// d) Using bind to fix the description method
setTimeout(car.description.bind(car), 200); // This will work

// e) Change another property and test with setTimeout
let anotherCar = { ...car, model: "Cayenne" };
setTimeout(anotherCar.description.bind(anotherCar), 200); // Outputs: This car is a Porsche Cayenne from 1964

// Question 7

// Add delay method to Function prototype
Function.prototype.delay = function (ms) {
  const originalFunction = this; // Save the original function context
  return function (...args) {
    setTimeout(() => {
      originalFunction.apply(this, args); // Use apply to maintain context and pass arguments
    }, ms);
  };
};

// Original multiply function (2 parameters)
function multiply(a, b) {
  console.log(a * b);
}

// Test the original multiply function
multiply.delay(500)(5, 5); // Prints 25 after 500 milliseconds

// Modify multiply to take 4 parameters
function multiply(a, b, c, d) {
  console.log(a * b * c * d);
}

// Test the modified multiply function
const delayedMultiply = multiply.delay(500);
delayedMultiply(2, 2, 2, 2); // Prints 16 after 500 milliseconds

function Person(name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;

  // Custom toString method
  this.toString = function () {
    return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`;
  };
}

// Testing the Person constructor
const person1 = new Person("James Brown", 73, "male");
const person2 = new Person("Mary Smith", 45, "female");

console.log("person1: " + person1); // Outputs: Name: James Brown, Age: 73, Gender: male
console.log("person2: " + person2); // Outputs: Name: Mary Smith, Age: 45, Gender: female

function Student(name, age, gender, cohort) {
  // Call the Person constructor to initialize inherited properties
  Person.call(this, name, age, gender);
  this.cohort = cohort;
}

// Inherit from Person
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

// Custom toString method for Student
Student.prototype.toString = function () {
  return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Cohort: ${this.cohort}`;
};

// Testing the Student constructor
const student1 = new Student("Alice Johnson", 20, "female", "Cohort A");
const student2 = new Student("Bob Lee", 22, "male", "Cohort B");

console.log("student1: " + student1); // Outputs: Name: Alice Johnson, Age: 20, Gender: female, Cohort: Cohort A
console.log("student2: " + student2); // Outputs: Name: Bob Lee, Age: 22, Gender: male, Cohort: Cohort B
