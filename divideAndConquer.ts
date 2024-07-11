// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

const data = ["5", "0", 9, 3, 2, 1, "9", 6, 7];

export function divCon(x: (string | number)[]): number {
  const sumOfIntegers = x
    .filter((e) => typeof e === "number")
    .reduce(
      (previousValue, currentValue) => previousValue + (currentValue as number),
      0
    );
  const sumOfStringNumbers = x
    .filter((e) => typeof e === "string")
    .reduce(
      (previousValue, currentValue) =>
        previousValue + parseInt(currentValue as string, 10),
      0
    );
  return sumOfIntegers - sumOfStringNumbers;
}

console.log(divCon(data));


// export function divCon(x: (string | number)[]): number {
//     return x.reduce<number>(
//       (acc: number, curr: string | number) => 
//         typeof curr === "number" 
//           ? acc + curr 
//           : acc - parseInt(curr, 10),
//       0
//     );
//   }
  