// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
  // Convert string to uppercase
  str = s.toUpperCase();

  // Initialize empty array to hold modified characters
  let result = [];

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    // Repeat the character i+1 times and add to array
    let repeatedChar = str[i].repeat(i + 1);

    // Convert characters other than the first to lowercase
    repeatedChar = repeatedChar.charAt(0) + repeatedChar.slice(1).toLowerCase();

    // Add modified character to get the result array
    result.push(repeatedChar);
  }

  // Join the modified characters with dashes and return it as a string
  return result.join("-");
}

// function accum(s) {
// 	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
// }

console.log(JSON.stringify(accum("abcd")));
