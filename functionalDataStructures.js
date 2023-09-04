const anArrayMixedElements = [1, "hello", 80, "world", 24, "javascript", 6, 99, "LHL", 12, "bootcamp", 45, 3];

// Return an array with only numbers:
const filteredArray = anArrayMixedElements.filter((element) => typeof element === 'number');

console.log(filteredArray);

// Return the *first* number that is over 50 (*not* all numbers over 50):
const higherThanFifty = filteredArray.find((element) => element > 50);

console.log(higherThanFifty);

// Return the sum of all numbers in the array:
// "acc" == "accumulator"; "curr" == "currentValue"
const sumOfAllNumbers= filteredArray.reduce((acc, curr) => acc + curr);

console.log(sumOfAllNumbers);