function solution(str) {
    let array = [];
    for (let i = str.length; i >= 0; i--) {
      console.log(i);
      array.push(str[i]);
    }
    return array.join("");
  }
  