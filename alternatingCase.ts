export function toAlternatingCase(s: string): string {
  return s.split("").map((letter) => {
    if (letter === letter.toLowerCase()) {
      return letter.toUpperCase();
    } else {
      return letter.toLowerCase();
    }
  }).join("");
}

const string = "toTo";
console.log(toAlternatingCase(string));
