// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Input = {"Ryan", "Kieran", "Jason", "Yous"}
// Output = {"Ryan", "Yous"}

// Input = {"Peter", "Stephen", "Joe"}
// Output = {}
// Input strings will only contain letters. Note: keep the original order of the names in the output.

export function friend(friends: string[]): string[] {
  return friends.filter((e) => e.length === 4);
}

const data = ["Ryan", "Jimmy", "123", "4", "Cool Man"];
console.log(friend(data));
