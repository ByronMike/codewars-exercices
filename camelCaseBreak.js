// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

const solution = (string) => {
    const splittedString = string.split("");
    let beforeUpper;
    let afterUpper = [];
    let arr = [];
    for (let i = 0; i < splittedString.length; i++) {
      if (splittedString[i] === splittedString[i].toUpperCase()) {
        arr.push(i);
      }
    }
    if (string === "") {
      return "";
    } else if (arr.length > 0) {
      beforeUpper = splittedString.slice(0, arr[0]).join("") + " ";
      for (let j = 0; j < arr.length; j++) {
        afterUpper.push(splittedString.slice(arr[j], arr[j + 1]).join(""));
      }
      return beforeUpper + afterUpper.join(" ");
    } else {
      return string;
    }
  };
  
  console.log(solution("camelCasingString"));
  console.log(solution("large"));
  console.log(solution(""));
  