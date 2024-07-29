// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]: [string, number]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:

// ["", 0]
// Happy coding! :)

const data = "cbdeuuu900";
const data2 = "aaaabb";
const data3 = "f";

interface Element {
  char: string;
  count: number;
}

// NON CONSECUTIVE
export function longestRepetition(text: string): [string, number] {
  let dict: Element[] = [];
  for (let char of text) {
    if (!dict.map((e) => e.char).includes(char)) {
      dict.push({ char: char, count: 1 });
    } else if (dict.map((e) => e.char).includes(char)) {
      dict.forEach((e) => {
        if (e.char === char) {
          return { ...e, count: e.count++ };
        } else {
          return;
        }
      });
    }
  }

  const res = dict.sort((a, b) => b.count - a.count);
  return [res[0].char, res[0].count];
}

// CONSECUTIVE
export function longestRepetition1(text: string): [string, number] {
  if (text.length === 0) return ["", 0];

  let dict: Element[] = [];
  let currentChar = text[0];
  let currentCount = 1;

  for (let i = 1; i < text.length; i++) {
    if (text[i] === currentChar) {
      currentCount++;
    } else {
      dict.push({ char: currentChar, count: currentCount });
      currentChar = text[i];
      currentCount = 1;
    }
  }
  dict.push({ char: currentChar, count: currentCount });

  const res = dict.sort((a, b) => b.count - a.count);
  return [res[0].char, res[0].count];
}

console.log(longestRepetition(data));
console.log(longestRepetition(data2));
console.log(longestRepetition(data3));

console.log(longestRepetition1(data));
console.log(longestRepetition1(data2));
console.log(longestRepetition1(data3));

console.log(
    JSON.stringify(longestRepetition(data)) === JSON.stringify(longestRepetition1(data))
  );
  