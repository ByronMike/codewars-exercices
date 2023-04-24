// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

const spinWords = (string) => {
    let array = []
    const splittedSentence = string.split(" ");
    for(const word of splittedSentence){
        if(word.length <= 4){
            array.push(word)
        } else {
            let wordRearranged = ""
            for(let i = word.length - 1 ; i >= 0 ; i--){
                wordRearranged += word[i]
            }
            array.push(wordRearranged)
        }
    }
    return array.join(" ")
}


console.log(spinWords("Hey fellow warriors"))

// *COMPACT CODE ! 
// function reverseLongWords(str) {
//     // Split the string into an array of words
//     let words = str.split(" ");
  
//     // Reverse the words with length 5 or more
//     for (let i = 0; i < words.length; i++) {
//       if (words[i].length >= 5) {
//         words[i] = words[i].split("").reverse().join("");
//       }
//     }
  
//     // Join the words back into a string and return it
//     return words.join(" ");
//   }
  