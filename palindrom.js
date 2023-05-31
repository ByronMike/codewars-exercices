function getPalindromes(words) {
    let result = [];
    for (let word of words) {
      let reversedWord = word.split('').reverse().join('');
      if (word === reversedWord) {
        result.push(word);
      }
    }
    return result.sort();
  }
  
  const examplePalindromes = ['HELLO', 'KAYAK', 'ANNA', 'TOTO', 'JAVASCRIPT', 'LOL', 'MODEM'];
  console.log(getPalindromes(examplePalindromes));
  