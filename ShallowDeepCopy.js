// const originalObj = { name: "John", age: 30, hobbies: ["reading", "gaming"] };

// // Shallow copy using spread operator
// const shallowCopy = { ...originalObj };

// // Modify the shallow copy
// shallowCopy.name = "Jane";
// shallowCopy.hobbies.push("cooking");

// console.log(originalObj); // Output: { name: "John", age: 30, hobbies: ["reading", "gaming", "cooking"] }
// console.log(shallowCopy); 


// Original object
const originalObj = { name: "John", age: 30, hobbies: ["reading", "gaming"] };

// Deep copy using JSON.parse and JSON.stringify
const deepCopy = JSON.parse(JSON.stringify(originalObj));

// Modify the deep copy
deepCopy.name = "Jane";
deepCopy.hobbies.push("cooking");

console.log(originalObj); // Output: { name: "John", age: 30, hobbies: ["reading", "gaming"] }
console.log(deepCopy);