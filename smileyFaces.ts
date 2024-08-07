// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

const data = [";D", ":-(", ":-)", ";~)"];

export function countSmileys(arr: string[]): number {
  const smileyRegex = /^[:;][-~]?[)D]$/;
    
  return arr.filter(face => smileyRegex.test(face)).length;
}

// function countSmileys(arr: string[]): number {
//     // Define the valid characters for each part of a smiley face
//     const validEyes = [':', ';'];
//     const validNoses = ['-', '~'];
//     const validMouths = [')', 'D'];

//     let count = 0;

//     // Iterate through each string in the array
//     for (const face of arr) {
//         // Check the length of the string and validate accordingly
//         if (face.length === 2) {
//             // Check if it has eyes and mouth only
//             if (validEyes.includes(face[0]) && validMouths.includes(face[1])) {
//                 count++;
//             }
//         } else if (face.length === 3) {
//             // Check if it has eyes, nose, and mouth
//             if (validEyes.includes(face[0]) && validNoses.includes(face[1]) && validMouths.includes(face[2])) {
//                 count++;
//             }
//         }
//     }

//     return count;
// }

console.log(countSmileys(data));
