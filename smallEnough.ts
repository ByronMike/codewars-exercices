// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

export function smallEnough(a: number[], limit: number): boolean {
    return a.every(value => value <= limit);
  }

const arr = [4, 3, 9, 4, 4, 8, 2, 0, 4, 3, 6, 3, 7, 0, 6, 7];
const limit = 9;
console.log(smallEnough(arr, limit));
