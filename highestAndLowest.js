// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers) {
  const array = numbers.split(" ").map(Number);
  //   console.log(array);

  const result = [];
  result.push(Math.max(...array));
  result.push(Math.min(...array));

  return `${result[0]} ${result[1]}`;
}

console.log(highAndLow("1 9 3 4 -5"));
