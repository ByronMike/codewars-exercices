// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
    let letterCount = {};
    for (let letter of s) {
      if (letter in letterCount) {
        letterCount[`${letter}`] += 1;
      } else if (letter.toLowerCase() in letterCount) {
        letterCount[`${letter.toLowerCase()}`] += 1;
      } else if (letter.toUpperCase() in letterCount) {
        letterCount[`${letter.toUpperCase()}`] += 1;
      } else {
        letterCount[`${letter}`] = 1;
      }
    }
    console.log(letterCount);
    if((Object.values(letterCount)).every(e => e > 1) ){
      return ""
    }
    const arr = []
    for(const [key, value] of Object.entries(letterCount)){
      if(value === 1){
        return key
      } 
    }
    console.log(arr)
  }
  
  const data = "sTreSS";
  
  console.log(firstNonRepeatingLetter(data));
  