// Move the first letter of each word to the end of it, then add "ay" to the end
// of the word. Leave punctuation marks untouched.

const pigIt = (str) => {
    const splittedStr = str.split(" ");
    const result = [];

    for (const word of splittedStr) {
        const firstChar = word[0];
        const remainingChars = word.slice(1);

        if (/[A-Za-z]/.test(firstChar)) {
            const modifiedWord = remainingChars + firstChar + "ay";
            result.push(modifiedWord);
        } else {
            result.push(word);
        }
    }

    return result.join(" ");
};

// const pigIt = (str) => {
//     const splittedStr = str.split(" ");
//     const arr = [];
//     for (const e of splittedStr) {
//         const firstCharArr = [];
//         const remainingArr = [];
//         for (let i = 0; i < e.length; i++) {
//             if (i === 0) {
//                 const mergeChar = [];
//                 mergeChar.push(e[i]);
//                 if (/[A-Za-z]/.test(e[i])) {
//                     mergeChar.push("ay");
//                 }
//                 const joinedChar = mergeChar.join("");
//                 firstCharArr.push(joinedChar);
//             } else if (i > 0 && i < e.length) {
//                 remainingArr.push(e[i]);
//             }
//         }
//         const modifiedWord = remainingArr.join("") + firstCharArr.join("");
//         arr.push(modifiedWord);
//     }
//     return arr.join(" ");
// };

// Examples
// igPay atinlay siay oolcay    // elloHay orldway !

console.log(pigIt("Pig latin is cool"));
