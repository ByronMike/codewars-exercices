// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.

// If there is no index that would make this happen, return -1.

// For example:
// Let's say you are given the array {1,2,3,4,3,2,1}:
// Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.

const data = [1, 2, 3, 4, 3, 2, 1];

export function findEvenIndex(arr: number[]): number {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let index = i;
    let sumBeforeIndex = 0;
    let sumAfterIndex = 0;
    for (let j = 0; j < arr.length; j++) {
      if (j < i) {
        sumBeforeIndex += arr[j];
      } else if (j > i) {
        sumAfterIndex += arr[j];
      }
    }
    if (sumAfterIndex === sumBeforeIndex) {
      res.push(index);
    }
  }
  return res[0] ?? -1;
}

console.log(findEvenIndex(data));
