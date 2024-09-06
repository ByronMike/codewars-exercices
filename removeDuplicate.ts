// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

const data = [1, 2, 1, 1, 3, 2];
const data2 = [1, 1, 2, 3] 

export const distinct = (a: number[]): number[] => {
  let seen: Set<number> = new Set();
  return a.filter((e) => {
    if (!seen.has(e)) {
      seen.add(e);
      return true;
    }
    return false;
  });
};

console.log(distinct(data));
console.log(distinct(data2))
