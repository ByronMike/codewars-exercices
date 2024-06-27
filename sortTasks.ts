// Sort an array by value and index
// Your task is to sort an array of integer numbers by the product of the value and the index of the positions.

// For sorting the index starts at 1, NOT at 0!
// The sorting has to be ascending.
// The array will never be null and will always contain numbers.

// Example:

// Input: 23, 2, 3, 4, 5
// Product of value and index:
// 23 => 23 * 1 = 23  -> Output-Pos 4
//  2 =>  2 * 2 = 4   -> Output-Pos 1
//  3 =>  3 * 3 = 9   -> Output-Pos 2
//  4 =>  4 * 4 = 16  -> Output-Pos 3
//  5 =>  5 * 5 = 25  -> Output-Pos 5

// Output: 2, 3, 4, 23, 5

const data = [23, 2, 3, 4, 5];

interface Obj {
  number: number;
  position: number;
}

export function sortByValueAndIndex(array: number[]): number[] {
  const product = array.map((e, index) => e * (index + 1));

  const sumUp: Obj[] = [];
  for (let i = 0; i < array.length; i++) {
    const obj: Obj = {
      number: array[i],
      position: product[i],
    };
    sumUp.push(obj);
  }
  console.log(sumUp);

  const sort = sumUp.sort((a, b) => a.position - b.position);
  return sort.map((e) => e.number);
}

console.log(sortByValueAndIndex(data));



// OR

// export function sortByValueAndIndex(array:number[]) : number[]
// {
//   return array.map((elem, index, _array) => [elem, elem * (1 + index)])
//               .sort((a, b) => a[1] - b[1])
//               .map((elem, index, _array) => elem[0]);
// }