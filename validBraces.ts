// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// Examples
// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False

export function validBraces(braces: string): boolean {
  const stack: string[] = [];
  const pairs: { [key: string]: string } = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (const brace of braces) {
    if (brace in pairs) {
      // If it's an opening brace, push it onto the stack
      stack.push(brace);
    } else {
      // If it's a closing brace, check if it matches the last opened brace
      const lastOpened: string[] = stack.pop();
      if (brace !== pairs[lastOpened]) {
        return false; // Mismatched braces
      }
    }
  }

  // Ensure that the stack is empty, meaning all braces were matched
  return stack.length === 0;
}

const data = "(){}[]";
console.log(validBraces(data));
