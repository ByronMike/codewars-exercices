// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


function isPangram(string){

    let alphaCount = {}
    for( i=0; i < 26; i++){
      alphaCount[`${String.fromCharCode(97 + i)}`] = 0
    }
  
    console.log(alphaCount)
  
    const arr = string.toLowerCase().split("")
    for(let char of arr){
      if(char in alphaCount){
        alphaCount[char] += 1
      }
    }
  
   console.log(Object.values(alphaCount))
   const count = Object.values(alphaCount)
  
   console.log(count.every(element => element > 0))
   return count.every(element => element > 0)
  }
  
  const pangram = "Cwm fjord bank glyphs vext quiz"
  console.log(isPangram(pangram))