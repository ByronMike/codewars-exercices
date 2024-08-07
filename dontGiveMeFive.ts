// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

export function dontGiveMeFive(start: number, end: number): number {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (!i.toString().includes("5")) {
      count++;
    }
  }
  return count;
}

// Example usage:
console.log(dontGiveMeFive(1, 9)); // Output: 8
console.log(dontGiveMeFive(4, 17)); // Output: 12
