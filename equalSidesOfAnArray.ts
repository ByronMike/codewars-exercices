// Let's look at another one.
// You are given the array {1,100,50,-51,1,1}:
// Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.

// Last one:
// You are given the array {20,10,-80,10,10,15,35}
// At index 0 the left side is {}
// The right side is {10,-80,10,10,15,35}
// They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
// Index 0 is the place where the left side and right side are equal.

// Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

// Input:
// An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

// Output:
// The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

// Note:
// If you are given an array with multiple answers, return the lowest correct index.

export function findEvenIndex(arr: number[]): number {
  for (let i = 0; i < arr.length; i++) {
    let leftSide = arr.slice(0, i);
    let rightSide = arr.slice(i + 1, arr.length);
    console.log(leftSide);
    console.log(rightSide);
    let sumLeft =
      leftSide.length === 0
        ? 0
        : leftSide.reduce(
            (previousValue, currentValue) => previousValue + currentValue
          );
    let sumRight =
      rightSide.length === 0
        ? 0
        : rightSide.reduce(
            (previousValue, currentValue) => previousValue + currentValue
          );
    console.log(sumLeft);
    console.log(sumRight);
    if (sumLeft === sumRight) {
      return i;
    }
  }
  return -1;
}

let data = [1, 100, 50, -51, 1, 1];
console.log(findEvenIndex(data));
