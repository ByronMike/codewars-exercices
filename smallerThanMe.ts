// Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

// For example:

// Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
// Input [1, 2, 0] => Output [1, 1, 0]
// If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the much tougher version How many are smaller than me II?

const data = [1, 2, 0];

export function smaller(nums: number[]): number[] {
  let arr: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    let arr_i = 0;
    for (let j = 0; j < nums.length; j++) {
      if (j > i) {
        if (nums[j] < nums[i]) {
          arr_i++;
        }
      }
    }
    arr.push(arr_i);
  }
  return arr;
}

console.log(smaller(data));
