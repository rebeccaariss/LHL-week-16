//Objects
const object = {
  key: "Value of Key",
};

const copyOfObject = object;

//Arrays
const arrayOfNumbers = [1, 2, 3, 4, 5];

const copyArrayOfNumbers = arrayOfNumbers;

// console.log("This is the copied array: " + copyArrayOfNumbers);

arrayOfNumbers.push(7);

// console.log("This is the original array with a new number (7) added: " + arrayOfNumbers + "\nThis is the copied array now that we've updated the base array: " + copyArrayOfNumbers); // copied array *does* contain the new value 7 (even though we have only modified arrayOfNumbers - the original) because copyArrayOfNumbers points to the same array (it has NOT created an entirely new array)


object.greeting = "Hello world";

// console.log("This is the original object with a new key (greeting) added: " + Object.entries(object) + "\nThis is the copied object now that we've updated the base object: " + Object.entries(copyOfObject)); // the same is true for objects: if we modify the one that has been referenced by a variable, that change is accessible from the variable as well (because the variable points to the same object - it is not an independent copy).


//Objects
const object2 = {
  key: "Value of Key",
};

const copyOfObject2 = { ...object2 };

//Arrays
const arrayOfNumbers2 = [1, 2, 3, 4, 5];

const copyArrayOfNumbers2 = [...arrayOfNumbers2];

console.log("Here are object2 and arrayOfNumbers2, respectively:\n " + Object.entries(object2) + "\n" + arrayOfNumbers2);

object2.greeting = "Hello world";
arrayOfNumbers2.push(7);

console.log("The originals, but modified:\n" + Object.entries(object2) + "\n" + arrayOfNumbers2 + "\nAnd their copies:\n" + Object.entries(copyOfObject2) + "\n" + copyArrayOfNumbers2); // The copies do not contain the updated values because we initialized copyOfObject2 and copyArrayOfNumbers2 with the spread operator, which copies the *contents* of arrays/objects, NOT a reference to the originals.