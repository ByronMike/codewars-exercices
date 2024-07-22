// This kata requires you to write a function which merges two strings together. It does so by merging the end of the first string with the start of the second string together when they are an exact match.

// "abcde" + "cdefgh" => "abcdefgh"
// "abaab" + "aabab" => "abaabab"
// "abc" + "def" => "abcdef"
// "abc" + "abc" => "abc"
// NOTE: The algorithm should always use the longest possible overlap.

// "abaabaab" + "aabaabab" would be "abaabaabab" and not "abaabaabaabab"

const firstData = "abcde";
const secondData = "cdefgh";

export const mergeStrings = (first: string, second: string): string => {
  const maxLength = Math.min(first.length, second.length);
  for (let i = maxLength; i > 0; i--) {
    console.log(i);
    console.log(first.slice(-i));
    console.log(second.slice(0, i));
    if (first.slice(-i) === second.slice(0, i)) {
      return first + second.slice(i);
    }
  }
  return first + second;
};

console.log(mergeStrings(firstData, secondData));
