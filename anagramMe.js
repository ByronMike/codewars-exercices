function anagramMe(word) {
    debugger
  const anagramList = [];
  
  if (word.length === 1) {
      return [word];
  }
   
  for (let i = 0; i < word.length; i++){
      const letter = word[0];
      const newWord = anagramMe(word.slice(1, word.length));
      
      for (let j = 0; j < newWord.length; j++) {
          anagramList.push(letter + newWord[j]);
      }
      
      word = word.substr(1, word.length - 1) + letter;
  }

  return anagramList.sort();
}

console.log(anagramMe('AGE'));
// Expected: ['AEG', 'AGE', 'EAG', 'EGA', 'GAE', 'GEA']
