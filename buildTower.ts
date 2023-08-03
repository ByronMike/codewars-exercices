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
//   "   *****   ", 3 : 5
//   "  *******  ", 4 : 7
//   " ********* ", 5 : 9
//   "***********"  6 : 11
// ]

export const towerBuilder = (nFloors: number): string[] => {
  let arr = [];
  for (let i = nFloors; i >= 1; i--) {
    console.log(i);
    // n is the bottom
    const nTimes = i === 1 ? 1 : i + (i - 1);
    const stars = "*".repeat(nTimes);
    const stage = `\"${stars}\"`;
    const nb = i + i - 1;
    console.log(stars);
    console.log(stage);
    console.log(nb);
    if (i === nFloors) {
      arr.push(stage);
    } else {
      const diff = nFloors - i;
      const stagArr = stage.join("");
      stage.splice(0, diff, " ");
    }
  }

  return;
};

const floor = 6;
console.log(towerBuilder(floor));
