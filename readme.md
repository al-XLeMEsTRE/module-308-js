# ALAB 308.5.1: Creating Reusable Functions

### Version 1.0, 10/13/23

## Introduction

This assignment is about learning to write reusable functions to avoid repeating code (DRY principle). This helps make code more efficient and easier to maintain.

## Objectives

- Create reusable functions.
- Use Array methods to manipulate data.

## Instructions

1. Set up a new project folder, initialize a Git repository, and create a JavaScript file.
2. Commit frequently as you complete tasks.

## Part 1: Writing Functions

Write small, simple functions to solve the tasks below:

1. **Sum of Numbers**: Function to return the sum of an array of numbers.
2. **Average of Numbers**: Function to return the average of an array of numbers.
3. **Longest String**: Function to return the longest string from an array.
4. **Strings Longer Than Given Number**: Function to return strings longer than a given length.
   - Example: `stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3)` returns `['hello', 'morning']`.
5. **Print Numbers Recursively**: Function to print numbers from 1 to `n` using recursion.

## Part 2: Using Array Methods

Use Array methods and callbacks to work with the data below:

```javascript
[
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];
```

1. **Sort by Age**: Sort the array by `age`.
2. **Filter by Age**: Remove entries with an age greater than 50.
3. **Map and Transform**: Change "occupation" to "job" and increment each age by 1.
4. **Reduce for Sum and Average Age**: Calculate the sum of ages, then find the average.

## Part 3: Object Manipulation

Write functions to manipulate objects:

1. **Increment Age**: Function to increment the `age` field of an object. If `age` doesn't exist, set it to 0.
2. **Copy and Increment**: Function to make a copy of an object, increment `age`, and add or update `updated_at` with the current date.

## Part 4: Practical Application

Review these skills for your upcoming Skills-Based Assessment (SBA). Reusable functions and methods are essential in real-world projects.

## Part 5: Review Past Assignments

Look at your past JavaScript projects and consider:

- Which parts can be turned into functions?
- How can you improve function parameters and return values?
- Can you create smaller helper functions?

## Submission

Submit your project by sharing a GitHub link to your repository. Ensure all parts are committed and well-documented.

### Good Practices

- **Commit Often**: Commit whenever something works.
- **Descriptive Names**: Use clear, descriptive names for functions, inputs, and outputs.

## Conclusion

This assignment helps you learn to write reusable functions, making your code more efficient and easier to manage. Keep practicing to master the DRY principle!
