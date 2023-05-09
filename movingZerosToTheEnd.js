// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


const moveZeros = (arr) => {
    let result = []
    for (let e of arr){
        result = arr.filter(e => e !== 0)
        nbZero = arr.filter(e => e === 0)
        for(let i = 0; i < nbZero.length; i++){
            result.push(0)
        }
        
    }
    return result
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))