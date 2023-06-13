// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
    // 1) Calculer le score de chaque mot
    // 1.1) Extraire chaque mot de la phrase
    let arrOfWords = x.split(" ");
    console.log(arrOfWords);
    // 1.2) Calculer le score de chaque mot avec une fonction computeWord
  
    const computeWord = (word) => {
      let letterScore = {};
      for (let i = 1; i < 27; i++) {
        let score = i;
        console.log(score);
        let letter = String.fromCharCode(i + 96);
        console.log(letter);
        letterScore[`${letter}`] = score;
      }
      console.log(letterScore);
  
      const splittedWord = word.split("");
      arrayScore = [];
      for (letter of splittedWord) {
        for (e in letterScore) {
          if (letter === e) {
            arrayScore.push(letterScore[`${e}`]);
          }
        }
      }
      let score = arrayScore.reduce(
        (previousValue, currentValue) => previousValue + currentValue
      );
      return score;
    };
  
    console.log(computeWord("abc"));
  
    // 1.3) Stocker le score de chaque mot associé au mot
    let allScores = [];
    for (word of arrOfWords) {
      allScores.push(computeWord(word));
    }
    console.log(allScores);
    // 2) Calculer le score maximum  et return le mot correspondant ()et si égalité return celui qui apparait le plus tôt)
    // 2.1) Calculer le socre maximum et return le mot correspondant
    const maxScore = Math.max(...allScores);
    console.log(maxScore);
    const indexMaxScore = allScores.indexOf(maxScore)
    console.log(indexMaxScore)
    const wordMaxScore = arrOfWords[indexMaxScore]
    console.log(wordMaxScore)
    return wordMaxScore
    // 2.2) Rajouter une condition d'égalité
  }
  
  const mock = "man i need a taxi up to ubud"; // return taxi
  console.log(high(mock));
  