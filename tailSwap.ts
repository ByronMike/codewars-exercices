// You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

// Examples
// ["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
// ["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]

const data = ["a:12345", "777:xyz"];

export function tailSwap(arr: string[]): string[] {
  const splitData = arr.map((e) => e.split(":"));
  const secondVal = splitData.map((e) => e[1]);
  splitData[0][1] = secondVal[1];
  splitData[1][1] = secondVal[0];

  const result = splitData.map((e) => e.join(":").toString());
  return result;
}

console.log(tailSwap(data));
