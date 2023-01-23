// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  // 1) Extract every digit in an array
  const array = num.toString().split("").map(Number);
  // 2) Apply a method to get the square of each digit
  newArray = array.map((element) => element * element);
  // 3) Re-merge the results obtained (with numbers not string)
  result = parseInt(newArray.join(""));

  return result;
}

console.log(squareDigits(234));
