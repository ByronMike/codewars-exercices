// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  if (input && input.length) {
    const positive = input.filter((numb) => numb > 0);
    const negative = input.filter((numb) => numb <= 0);
    console.log(positive);
    //   console.log(negative);
    const count = positive.length;

    const initialValue = 0;
    const sumNegative = negative.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );

    //   console.log(sumNegative);
    //   console.log(sumPositive);
    let array2 = [];
    array2.push(count, sumNegative);

    return array2;
  } else {
    let array3 = [];
    return array3;
  }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
console.log(countPositivesSumNegatives(array));
