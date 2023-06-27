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

function meeting(s) {
    let splitted = s.split(";");
    console.log(splitted);
    let arr = [];
    for (const e of splitted) {
      let splitted2 = e.split(":");
      console.log(splitted2[0].toUpperCase());
      console.log(splitted2[1].toUpperCase());
      arr.push({
        firstname: splitted2[0].toUpperCase(),
        lastname: splitted2[1].toUpperCase(),
      });
    }
    console.log(arr);
    console.log(arr.sort((a, b) => a.lastname - b.lastname));
  }
  
  s =
    "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
  console.log(meeting(s));
  