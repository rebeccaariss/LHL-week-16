//Objects
const object = {
  key: "Value of Key",
};

const copyOfObject = object;

//Arrays
const arrayOfNumbers = [1, 2, 3, 4, 5];

const copyArrayOfNumbers = arrayOfNumbers;

console.log("This is the copied array: " + copyArrayOfNumbers);

arrayOfNumbers.push(7);

console.log("This is the original array with a new number (7) added: " + arrayOfNumbers + "\nThis is the copied array now that we've updated the base array: " + copyArrayOfNumbers); // copied array *does* contain the new value 7 (even though we have only modified arrayOfNumbers - the original) because copyArrayOfNumbers points to the same array (it has NOT created an entirely new array)


object.greeting = "Hello world";

console.log("This is the original object with a new key (greeting) added: " + Object.entries(object) + "\nThis is the copied object now that we've updated the base object: " + Object.entries(copyOfObject)); // the same is true for objects: if we modify the one that has been referenced by a variable, that change is accessible from the variable as well (because the variable points to the same object - it is not an independent copy).