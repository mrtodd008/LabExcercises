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
