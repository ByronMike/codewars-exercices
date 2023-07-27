export function even_or_odd(n: number): string {
 return n % 2 === 0 ? "Even" : "Odd";
}

const data = 10;
console.log(even_or_odd(data));
