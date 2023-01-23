// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Exemples : 
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    // 1) Transform strings into arrays
    const a = s1.split('');
    const b = s2.split('');
    // console.log(a)
    // console.log(b)
    // console.log(typeof(a))
    // 2) Declare the alphabetical list in a string
    const list = "abcdefghijklmnopqrstuvwxyz"
    const listDest = list.split('')
    // console.log(listDest)
    // console.log(typeof(listDest))
    // 3) Search if a letter from the alphabetical list is either in "a" or "b" with a loop, if yes, keep it, if not, delete it from the array.
    // WARNING : backward loop to preserve indexes (don't excede bounds)
    for (let i = list.length - 1 ; i >= 0  ; i--) {
        if(a.includes(list[i]) || b.includes(list[i])) {
            
        } else {
            listDest.splice(i, 1);
        }
    // console.log(i)
    // console.log(list[i])
    // console.log(typeof(list[i]))
    // console.log(a.includes(list[i]))
    // console.log(a.includes(list[0]) )
    // console.log(a.includes(list[3]) )
    }
    // 4) Return the array
    return listDest.join("");
  }

  longest("abc","bcd")
  console.log(longest("abc","bcd"))