// Move the first letter of each word to the end of it, then add "ay" to the end
// of the word. Leave punctuation marks untouched.

const pigIt = (str) => {
    const splittedStr = str.split(" ");
    // const arr = [];
    for (const e of splittedStr) {
        const word = [];
        const transformedWord = [];
        word.push(e);
        for (let i = 0; i < word.length; i++) {
            transformedWord.push(word[0]);
            transformedWord.push("ay");
            transformedWord.unshift(word);
        }
        debugger
        console.log(transformedWord);
    }
};

// Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !