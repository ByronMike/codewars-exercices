// There is an array of strings. All strings contains similar letters except one. Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'
// Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 2 strings.

// This is the second kata in series:

// Find the unique number
// Find the unique string (this kata)
// Find The Unique

export function findUniq(arr: string[]): string {
    let result: string = '';
    for (let i = 0; i < arr.length; i++) {
      const currentChar = arr[0].charAt(0).toLowerCase();
      const firstChar = arr[i].charAt(0).toLowerCase();
      if (firstChar !== currentChar) {
        result = arr[i];
        break; // We can break the loop since we found the unique element
      }
    }
    return result;
  }
  

const data: string[] = ["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"];
console.log(findUniq(data));
