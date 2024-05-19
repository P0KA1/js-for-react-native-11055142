// Task 1

function processArray(numbers) {
    return numbers.map((num) => {
      if (num % 2 === 0) {
        // Even number: square it
        return num * num;
      } else {
        // Odd number: triple it
        return num * 3;
      }
    });
  }
  
  // Example usage:
  const inputArray = [1, 2, 3, 4, 5];
  const resultArray = processArray(inputArray);
  console.log(resultArray); // [3, 4, 9, 16, 15]
  
  //Task 2
  function formatArrayStrings(stringsArray, processedNumbers) {
    const modifiedStrings = [];
  
    for (let i = 0; i < stringsArray.length; i++) {
      const originalString = stringsArray[i];
      const number = processedNumbers[i];
  
      // Capitalize if the number is even, otherwise convert to lowercase
      const modifiedString = number % 2 === 0
        ? originalString.toUpperCase()
        : originalString.toLowerCase();
  
      modifiedStrings.push(modifiedString);
    }
  
    return modifiedStrings;
  }