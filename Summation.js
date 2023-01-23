// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (num) {
    // 1) Initialization
    const start = 1 ;
    const end = num;

    // 2) Create a loop to save all the numbers between "start" and "end" numbers in an array
    const arr = []
    for (let i=start ; i < end + 1 ; i++) {
        arr.push(i);
        // console.log(i)
        // console.log(arr)
    }
    // console.log(arr)
    // 3) Sum all the numbers in the array
    const initialValue = 0;
    const sumWithInitial = arr.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        initialValue
      );
    return sumWithInitial
  }

//   summation(4)
  console.log(summation(4))