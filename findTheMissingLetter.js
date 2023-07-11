// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'
// (Use the English alphabet with 26 letters!)

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!

function findMissingLetter(array){
  let arr = []
  for(e of array){
    arr.push(e.charCodeAt(0))
  }  
  console.log(arr)
  const sum = arr.reduce((previousValue, currentValue) => previousValue + currentValue)
  console.log(sum)

console.log(arr[0])
console.log(arr[arr.length - 1])

  let theoreticalArr = []
  for(let i = arr[0]; i < arr[arr.length - 1] + 1; i++ ){
    theoreticalArr.push(i)
  }
  console.log(theoreticalArr)
  const sumThoretical = theoreticalArr.reduce((previousValue, currentValue) => previousValue + currentValue)
  console.log(sumThoretical)

  const diff = sumThoretical - sum
  console.log(diff)

  console.log(String.fromCharCode(diff))
  return String.fromCharCode(diff)
}


const data = ['a','b','c','d','f']
console.log(findMissingLetter(data))