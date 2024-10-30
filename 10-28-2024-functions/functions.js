// functions.js
// ***** Variable Declarations
let name = "Gregory";

// this will work because of hoisting
//      only because sayHello was defined using a function declaration
// sayHello('anonymous');

// function expressions are not hoisted, so they MUST be defined
// earlier in the code than where you want to execute them
// ***** This will give us an error
// sayHello2('Amber');

// ***** Function Definitions

// ==========   Three ways to define a function     ==========
// *****    1. Function Declaration
//          starts with the keyword _function_
//          parameters and arguments...
//          name is a parameter that I am passing in
function sayHello(name) {
  console.log("Hi,", name + "! Good Morning!");
}

// *****    2. Function Expression
//          starts with const, name the function and set it = function () {}
const sayHello2 = function (name) {
  console.log(`Hello! ${name}`);
};

// ***** The biggest practical difference between these two is
//      function declarations can be __hoisted__ which means that they CAN be invoked before their definition
//      function expressions must be defined earlier in the code than where you invoke them

// *****    3. Arrow Functions
//      in this example, I have two parameters, so I have two things that I will pass in
//      a and b are parameters
//      (parameters) => { code block that executes }
const add = (a, b) => {
  return a + b;
};

// *****    Exercise
function areBothEven(n1, n2) {
  return !(n1 % 2) && !(n2 % 2);
}

function areBothEvenAlt(n1, n2) {
  let isN1Even, isN2Even;
  if (n1 % 2 === 0) {
    isN1Even = true;
  } else {
    isN1Even = false;
  }
  // using less code
  // n2 % 2 is 0 when n2 is even, but that looks like false
  // n2 % 2 is 1 when n2 is odd, but that looks like true
  // i want those values flipped
  isN2Even = !(n2 % 2);
  return isN1Even && isN2Even;
}

// I would normally call this lower, but to keep the answer with the exercise...
// console.log(areBothEven(3, 4));
// console.log(areBothEven(2, 4));
// console.log(areBothEven(-4, 4));
// console.log(areBothEven(3, 5));
// console.log(areBothEvenAlt(3, 4));
// console.log(areBothEvenAlt(2, 4));
// console.log(areBothEvenAlt(-4, 4));
// console.log(areBothEvenAlt(3, 5));

// ***** Practice Activity 1: write a Function Declaration
function computeArea(width, height) {
  let area = width * height;
  return `The area of a rectangle with a width of ${width} and a height of ${height} is ${area} square units`;
}
// console.log(computeArea(3, 4));

// ***** Practice Activity 2: write a Function Expression
const planetHasWater = function (planet) {
  planet = planet.toLowerCase();
  if (planet === "earth" || planet === "mars") {
    return true;
  } else {
    return false;
  }
  // an alternative
  // return (planet === 'earth' || planet === 'mars);
};
// console.log(planetHasWater('mArS'));

// ***** main code that you are executing

// calling the function
// using the () invokes the function, it means execute the code in the function definition
// sayHello("Davon");
// sayHello2('Christopher');
// sayHello2('Amber');

// This will not run that function, it will refer the block of code
// sayHello;
// console.log(sayHello);

// calling a function with two parameters and a return value
//      I have created a variable called sum to catch the return value of sum
//      I need to pass in two ARGUMENTS
let sum = add(3, 4);
console.log(sum);

// arguments are the things that I pass in when I invoke the function
// invoking the function is what makes it run
sum = add(2, 10);
console.log(sum);

// shorthand for above, if you don't need to save the value
console.log(add(1, 2));
