// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

const findOdd = (A) => {
    // Here, we first initialize an empty object counts to store the count of each integer in the array. 
    let counts = {};
    // Then, we loop through the array and increment the count of each integer in the counts object.
    for (let i = 0; i < A.length; i++) {
      let num = A[i];
      // checks if num exists as a key in the counts object.
      if (num in counts) {
        // the corresponding value (which represents the count of occurrences of num) is incremented by 1.
        counts[num] += 1;
      } else {
        // a new key-value pair is added to the dictionary where the key is num and the value is initialized to 1.
        counts[num] = 1;
      }
    }
    
    // Finally, we iterate over the counts object and return the integer that appears an odd number of times (i.e., the key whose value is not divisible by 2).
    for (let key in counts) {
      if (counts[key] % 2 !== 0) {
        // parseInt(key) to convert the key from a string to an integer, since JavaScript objects use string keys by default.
        return parseInt(key);
      }
    }
}

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]))
  