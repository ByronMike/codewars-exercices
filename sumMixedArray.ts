// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

export function sumMix(x: any[]): number {
  const stringArr = x.map((e) => (typeof (e === "String") ? parseInt(e) : e));
  return stringArr.reduce(
    (prevValue, currentValue) => prevValue + currentValue
  );
}

const x = [9, 3, "7", "3"];

console.log(sumMix(x));
