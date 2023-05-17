// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

function toCamelCase(text) {
    console.log(text);
    console.log(text.replace(/[-_]/g, " "));
    const words = text.replace(/[-_]/g, " ").split(" ");
    console.log(words);
    let camelCase = words[0];
  
    for (let i = 1; i < words.length; i++) {
      const capitalizedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
      camelCase += capitalizedWord;
      console.log(camelCase)
    }
  
    return camelCase;
  }
  
  // Test examples
  console.log(toCamelCase("the-stealth-warrior"));
  // console.log(toCamelCase("the_stealth_warrior"));
  // console.log(toCamelCase("the_stealth-warrior"));
  
  // Examples
  // "the-stealth-warrior" gets converted to "theStealthWarrior"
  
  // "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
  
  // "The_Stealth-Warrior" gets converted to "TheStealthWarrior"
  
  // Exemple 2 (do not manager joint cases (_ and - in the same str))
  
  // const toCamelCase = (str) => {
  //   const regex1 = /-/;
  //   const regex2 = /_/;
  //   let splittedStr;
  //   let arr = [];
  //   console.log(arr)
  
  //   if (regex1.test(str)) {
  //     splittedStr = str.split("-");
  //     console.log(splittedStr)
  //     arr.push(splittedStr[0]);
  
  //     for (let i = 1; i < splittedStr.length; i++) {
  //       console.log(i)
  //       let arr2 = [];
  //       for (let j = 0; j < splittedStr[i].length; j++) {
  //         console.log(j)
  //         if (j === 0) {
  //           arr2.push(splittedStr[i][j].toUpperCase());
  //         } else {
  //           arr2.push(splittedStr[i][j]);
  //         }
  //       }
  //       console.log(arr2)
  //       console.log(arr2.join(''))
  //       arr.push(arr2.join(''));
  //       console.log(arr)
  //     }
  //   } else if (regex2.test(str)) {
  //     splittedStr = str.split("_");
  //     arr.push(splittedStr[0]);
  
  //     for (let i = 1; i < splittedStr.length; i++) {
  //       let arr2 = [];
  //       for (let j = 0; j < splittedStr[i].length; j++) {
  //         if (j === 0) {
  //           arr2.push(splittedStr[i][j].toUpperCase());
  //         } else {
  //           arr2.push(splittedStr[i][j]);
  //         }
  //       }
  //       arr.push(arr2.join(''));
  //     }
  //   }
  //   console.log(arr)
  //   console.log(arr.join(''))
  //   const camelCase = arr.join('');
  //   return camelCase;
  // };
  
  // Test examples
  // console.log(toCamelCase("the-stealth-warrior"));
  