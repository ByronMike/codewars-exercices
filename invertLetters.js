// Invert the letters of each words without touching order of words
function reverseWords(str) {
    // 1) return a new array with words at the same place
    let splitString = str.split(" ")
    // console.log(splitString)
    // console.log(splitString[1].split("").reverse().join(""))
    // console.log(splitString[0].split("").reverse().join(""))
    // console.log(splitString[1].split("").reverse().join(""))
    // console.log(splitString[2].split("").reverse().join(""))
    // 2) invert each letters for each word (same position)
    for(let i=0 ; i<splitString.length; i++) {
    // let reverseLetter = []
    splitString[i] = splitString[i].split("").reverse().join("")
  }
  return splitString.join(" ");
}

 str = 'The quick brown fox jumps over the lazy'

 console.log(reverseWords(str))
