// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]



const repeatFunction = (n: number, arrName: string[], funct1: string, funct2: string) => {
  for (let i = 0; i < n; i++) {
    arrName[funct1](" ");
    arrName[funct2](" ");
  }
};

export const towerBuilder = (nFloors: number): string[] => {
  let arr: string[] = [];

  for (let i = nFloors; i >= 1; i--) {
    const nTimes = i === 1 ? 1 : i + (i - 1);
    const stars = "*".repeat(nTimes);

    if (i === nFloors) {
      arr.push(stars);
    } else {
      const diff = nFloors - i;
      const splittedStars = stars.split("");
      repeatFunction(diff, splittedStars, "unshift", "push");
      console.log(splittedStars)
      const modifiedStars: string = splittedStars.join("");
      console.log(modifiedStars)
      arr.push(modifiedStars);
    }
  }

  return arr.reverse();
};




const floor = 5;
console.log(towerBuilder(floor));
