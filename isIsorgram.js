// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str){
    let count = 0
    let arr = []
    let stock = str.split("")
    for(e of stock){
        if(!arr.includes(e.toLowerCase())){
            arr.push(e.toLowerCase())
        } else {
            count ++
        }
    }
   if(str===""){
    return true
   } else {
    return count > 0 ? false : true
   }
  }

console.log(isIsogram("moOse"))