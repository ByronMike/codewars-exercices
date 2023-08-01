// Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

// Examples (input --> output):
// "hello case" --> "HelloCase"
// "camel case word" --> "CamelCaseWord"
// Don't forget to rate this kata! Thanks :)

export function camelCase(str: string): string {
  const words = str.split(" "); // Split the input string into words
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  // Capitalize the first letter of each word and convert the rest to lowercase
  
  return capitalizedWords.join(""); // Join the words back together to form the camelCase string
}

const input: string = "hello case"; 
console.log(camelCase(input)); // Output: "HelloCase"
