// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

const word = "CodEWaRs";

export function capitals(word: string): number[] {
  return word
    .split("")
    .map((letter, index) => (letter === letter.toUpperCase() ? index : -1))
    .filter((index) => index !== -1);
}

console.log(capitals(word));
