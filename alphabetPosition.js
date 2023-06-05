// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function getAlphabetRank(char) {
    const uppercaseChar = char.toUpperCase();
    const charCode = uppercaseChar.charCodeAt(0);
    const rank = charCode - 64; // Subtract 64 to start the rank from 1
    return rank;
  }

function alphabetPosition(text) {
  const regex = /[A-Za-z]/;
  const arr = text.split("")
  console.log(arr)
  const onlyAlpha = []
  arr.forEach(element => {
    if(regex.test(element)){
        onlyAlpha.push(element)
      }
  });
  console.log(onlyAlpha)
  let result = onlyAlpha.map((letter) => getAlphabetRank(letter))
  return result.join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))




