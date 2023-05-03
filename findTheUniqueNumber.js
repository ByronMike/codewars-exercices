// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

//   const findUniq = (arr) => {
//     const magicNumber = []
//     for(let i = 0; i < arr.length; i++){
//         let filterNumber = arr.filter(e => e === arr[i])
//         if(filterNumber.length === 1){
//             magicNumber.push(arr[i])
//         }
//     }
//     return magicNumber[0]
//   }

  const findUniq = (arr) => {
    const count = {};
    
    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      count[num] = (count[num] || 0) + 1;
    }
    
    for (let num in count) {
      if (count[num] === 1) {
        return Number(num);
      }
    }
  }

  console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))