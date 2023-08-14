// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

// Notes
// You can see another examples in the "Sample tests".

export function meeting(s: string): string {
    let arr: { name: string,  firstname: string, }[] = [];
    const result = s.split(";").map((e) => e.toUpperCase());
  
    for (const e of result) {
      
      const splitted = e.split(":");
      const firstname = splitted[0];
      const name = splitted[1];
      let obj: { name: string, firstname: string,  } = {name: name, firstname : firstname};
      arr.push(obj);
    }
    console.log(arr)
    const sortedArr = arr.sort(function (a, b) {
      const nameComparison = a.name.localeCompare(b.name);
      if (nameComparison === 0) {
        return a.firstname.localeCompare(b.firstname);
      }
      return nameComparison;
    });
    const finalArr = sortedArr.map(e => `(${e.name}, ${e.firstname})`)
    console.log(finalArr)
    return finalArr.join("")
  }
  

const data =
  "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn";
console.log(meeting(data));

