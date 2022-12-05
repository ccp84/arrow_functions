/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function

// function addTwoNumbers (a, b) {
//     return a + b;
// }

// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Arrow Function With Parameters

const addTwoNumbers = (a, b) => {
    return a + b;
}

let sum = addTwoNumbers(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters

const addTwoNums = (a, b) => a + b;

let sum2 = addTwoNums(4, 4);
console.log(sum2);

// Implicit Returns

const sayHi = message => console.log(message);

sayHi('Hello World');

// Returning Multiple Lines

const multiLines = multi => (`
    return
    multi
    lines
    `);

let multiMessage = multiLines();
console.log(multiMessage);