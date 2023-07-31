// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"
// Don't forget to rate this kata! Thanks :)

export function camelCase(str: string): string {
    let arr = []
    for(const element of str){
        const splittedElement = element.split("")
        const result = splittedElement.map(word=> word.slice(0).toUpperCase() + word.slice(1,word.length))
        arr.push(result)
    }
    
    console.log(arr)
    return result; // your code here
  }

const input: string = "hello case" 
console.log(camelCase(input))