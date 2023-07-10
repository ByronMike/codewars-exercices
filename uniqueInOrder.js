// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

const uniqueInOrder = (iterable) => {
    let arr = []
    for(let i = 0; i < iterable.length; i++){
        if(i === 0){
            arr.push(iterable[i])
        } else {
            if(iterable[i] !== arr[arr.length-1]){
                arr.push(iterable[i])
            }
        }
    }
    console.log(arr)
    return arr
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))  // ['A', 'B', 'C', 'D', 'A', 'B'])

console.log(uniqueInOrder('ABBCcAD'))          // ['A', 'B', 'C', 'c', 'A', 'D'])
console.log(uniqueInOrder([1,2,2,3,3]))        // [1,2,3])