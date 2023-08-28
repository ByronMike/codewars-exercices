// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
// For C: do not mutate input.

// More examples in test cases. Good luck!

export function solve(s: string) {


  
  let stringTableCorrespondance = {};
  for(let i = 1 ; i < 27 ; i++){
    const baseCharCode = 96
    let updateCharCode = baseCharCode + i
    let key = String.fromCharCode(updateCharCode)
    let value = key.charCodeAt(0)
      stringTableCorrespondance[`${key}`] = value - 95
  }
  console.log(stringTableCorrespondance)
  console.log(String.fromCharCode(97));
  console.log("a".charCodeAt(0))

  const consonant = ["a","e","i","o","u"]
  let consonantByPack = []

  for(let i = 0; i < s.length; i++){
    let arr = []
    if(consonant.includes(s[i])){
      
      // arr.push(s[i])
      
    }
    console.log(arr)
  }

}

const data = "strength";
console.log(solve(data));
