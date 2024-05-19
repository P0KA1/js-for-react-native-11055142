// Task 1

function processArray(array) {
  let result = [];
  for (let num of array) {
      if (num % 2 === 0) {
          // Even number: square it
          result.push(num * num);
      } else {
          // Odd number: triple it
          result.push(num * 3);
      }
  }
  return result;
}

function main() {
  let inputArray = [];
  let input = parseInt(prompt("Enter integers , and type a number less or equal to 0 to stop:"));

 
  while (input > 0) {
      inputArray.push(input);
      input = parseInt(prompt("Enter integers , and type a number less or equal to 0 to stop:"));
  }

  let processedArray = processArray(inputArray);


  for (let value of processedArray) {
      console.log(value + " ");
  }
}

main();  
  //Task 2


const readline = require("readline");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Modifies an array of strings based on corresponding numbers processed by processArray.
 * @param {string[]} stringsArray - An array of strings.
 * @param {number[]} numbersArray - An array of numbers processed by processArray.
 * @returns {string[]} - The modified array of strings.
 */
function formatArrayStrings(stringsArray, numbersArray) {
  
  if (stringsArray.length !== numbersArray.length) {
    throw new Error("Input arrays must have the same length.");
  }


  const resultArray = [];


  for (let i = 0; i < stringsArray.length; i++) {
    const string = stringsArray[i];
    const number = numbersArray[i];


    if (number % 2 === 0) {

      resultArray.push(string.toUpperCase());
    } else {

      resultArray.push(string.toLowerCase());
    }
  }

  return resultArray;
}


rl.question("Enter strings (comma-separated): ", (stringsInput) => {
  const strings = stringsInput.split(",");
  rl.question("Enter numbers (comma-separated): ", (numbersInput) => {
    const numbers = numbersInput.split(",").map(Number);
    try {
      const modifiedStrings = formatArrayStrings(strings, numbers);
      console.log("Modified strings:", modifiedStrings);
    } catch (error) {
      console.error("Error:", error.message);
    } finally {
      rl.close();
    }
  });
});
