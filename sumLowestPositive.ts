// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

const data = [10, 343445353, 3453445, 3453545353453];

export function sumTwoSmallestNumbers(numbers: Array<number>): number {
  const firstNumber = numbers.sort((a, b) => a - b)[0];
  const secondNUmber = numbers.sort((a, b) => a - b)[1];
  return [firstNumber, secondNUmber].reduce(
    (prevValue, currentValue) => prevValue + currentValue
  );
}

console.log(sumTwoSmallestNumbers(data));
