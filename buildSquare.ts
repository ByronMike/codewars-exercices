// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

// Example
// n = 3, so I expect a 3x3 square back just like below as a string:

// +++
// +++
// +++

export function generateShape(n: number): string {
  let square: string = "";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      square += "+";
    }
    if (i < n - 1) {
      square += "\n";
    }
  }

  return square;
}

console.log(generateShape(4));
