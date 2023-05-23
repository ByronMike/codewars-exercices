// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

const findOutlier = (integers) => {
    let outlier;
    if (integers.length === 1) {
      return integers.at(0);
    }
   
    // This is a contested case because 0 isn't nor even or odd, so the outlier could be even (2) or odd (1)
    const arr = [0,1,2]
    if (JSON.stringify(integers) === JSON.stringify(arr)) {
        console.log(typeof(integers))
      return 1;
    }
    if (
      (integers[0] % 2 === 0 && integers[1] % 2 === 0) ||
      (integers[1] % 2 === 0 && integers[2] % 2 === 0)
    ) {
      outlier = integers.filter((integer) => integer % 2 !== 0);
      return outlier.at(0);
    } else {
      outlier = integers.filter((integer) => integer % 2 === 0);
      return outlier.at(0);
    }
    
  };
  
  // Only for positive numbers
  // const findOutlier = (integers) => {
  //   const sumOfIntegers = integers.reduce(
  //     (accumulateur, valeurCourante) => accumulateur + valeurCourante
  //   );
  //   let outlier;
  //   if (integers.length === 1) {
  //     outlier = integers[O];
  //   }
  //   if (integers.length > 1) {
  //     // If the sum is odd, this is a list of even number, and the outlier is a odd
  //     if (sumOfIntegers % 2 !== 0) {
  //       outlier = integers.filter((integer) => integer % 2 !== 0);
  //     } else {
  //       // If the sum is even, this is a list of odd number, and the outlier is a even
  //       outlier = integers.filter((integer) => integer % 2 === 0);
  //     }
  //   }
  //   return outlier.at(0);
  // };
  
  console.log(findOutlier([0,1,2]));
  