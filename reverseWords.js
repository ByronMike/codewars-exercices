function reverseWords(str) {
  let arr = [];
  let splittedStr = str.split(" ");
  for (word of splittedStr) {
    let invertArr = [];
    for (let i = word.length - 1; i >= 0; i--) {
      invertArr.push(word[i]);
    }
    arr.push(invertArr.join(""));
  }
  return arr.join(" ")
}

console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
