// Question 8

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

// . Question 9

class DigitalClock {
  constructor(prefix) {
    this.prefix = prefix;
  }

  display() {
    let date = new Date();
    let [hours, mins, secs] = [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
    ];

    if (hours < 10) hours = "0" + hours;
    if (mins < 10) mins = "0" + mins;
    if (secs < 10) secs = "0" + secs;

    console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), 1000);
  }
}

class PrecisionClock extends DigitalClock {
  constructor(prefix, precision = 1000) {
    super(prefix); // Call the parent constructor
    this.precision = precision;
  }

  start() {
    this.display();
    this.timer = setInterval(() => this.display(), this.precision);
  }
}

class AlarmClock extends DigitalClock {
  constructor(prefix, wakeupTime = "07:00") {
    super(prefix);
    this.wakeupTime = wakeupTime;
  }

  display() {
    super.display(); // Call the parent's display method
    let currentTime = new Date();
    let formattedTime = currentTime.toTimeString().slice(0, 5); // Get hh:mm

    if (formattedTime === this.wakeupTime) {
      console.log(`${this.prefix} Wake Up!`);
      this.stop();
    }
  }
}

// Example usage of clocks
const myPrecisionClock = new PrecisionClock("My Precision Clock:", 500);
myPrecisionClock.start();

const myAlarmClock = new AlarmClock("My Alarm Clock:", "00:00"); // Test with immediate wakeup
myAlarmClock.start();

// Manually stop the clocks after 10 seconds
setTimeout(() => {
  myPrecisionClock.stop();
  console.log("PrecisionClock has been stopped.");
}, 10000); // Stops after 10 seconds

setTimeout(() => {
  myAlarmClock.stop();
  console.log("AlarmClock has been stopped.");
}, 10000); // Stops after 10 seconds

// Promise-based random delay function
function randomDelay() {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 20000) + 1000; // Random delay between 1s and 20s
    setTimeout(() => {
      if (delay % 2 === 0) {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

// Testing the randomDelay function
randomDelay()
  .then((delay) => {
    console.log(`Success! Delayed for ${delay} milliseconds.`);
  })
  .catch((delay) => {
    console.log(`Failure! Random delay was ${delay} milliseconds.`);
  });

// Question 10

import fetch from "node-fetch";
globalThis.fetch = fetch;

async function fetchURLData(url) {
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Request failed with status ${response.status}`);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

async function fetchMultipleURLs(urls) {
  try {
    const fetchPromises = urls.map((url) => fetchURLData(url));
    const results = await Promise.all(fetchPromises);
    return results;
  } catch (error) {
    throw new Error(`Failed to fetch one or more URLs: ${error.message}`);
  }
}

// Test with a valid URL
fetchURLData("https://jsonplaceholder.typicode.com/todos/1")
  .then((data) => console.log("Valid URL Data:", data))
  .catch((error) => console.error("Error:", error.message));

// Test with an invalid URL
fetchURLData("https://invalid-url-example.com")
  .then((data) => console.log("This should not print:", data))
  .catch((error) => console.error("Error with invalid URL:", error.message));

// Test multiple URLs
const urls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://invalid-url-example.com", // This will cause an error
];

fetchMultipleURLs(urls)
  .then((data) => console.log("Fetched Data:", data))
  .catch((error) =>
    console.error("Error fetching multiple URLs:", error.message)
  );
