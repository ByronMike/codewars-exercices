// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

const solution = (number) => {
  const array3 = [];
  const array5 = [];
  for (let i = 1; i < number; i++) {
    if (3 * i < number && (3 * i) % 5 !== 0) {
      array3.push(3 * i);
    }
    if (5 * i < number) {
      array5.push(5 * i);
    }
  }
  const initialValue = 0;
  const sumArray3 = array3.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  const sumArray5 = array5.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  const totalSum = sumArray3 + sumArray5;
  if (totalSum < 0) {
    return 0;
  }
  return totalSum;
};

console.log(solution(20));
