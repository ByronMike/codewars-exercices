// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
  let length = s.length;
  let array = [];
  if (length % 2 === 0) {
    array.push(s[length / 2 - 1]);
    array.push(s[length / 2]);
  } else {
    array.push(s[Math.floor(length / 2)]);
  }
  return array.join("");
}

console.log(getMiddle("testing"));
