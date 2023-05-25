// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero(operation = null) {
  if (operation) {
    return operation(0);
  }
  return 0;
}

function one(operation = null) {
  if (operation) {
    return operation(1);
  }
  return 1;
}

function two(operation = null) {
  if (operation) {
    return operation(2);
  }
  return 2;
}

function three(operation = null) {
  if (operation) {
    return operation(3);
  }
  return 3;
}

function four(operation = null) {
  if (operation) {
    return operation(4);
  }
  return 4;
}

function five(operation = null) {
  if (operation) {
    return operation(5);
  }
  return 5;
}

function six(operation = null) {
  if (operation) {
    return operation(6);
  }
  return 6;
}

function seven(operation = null) {
  if (operation) {
    return operation(7);
  }
  return 7;
}

function eight(operation = null) {
  if (operation) {
    return operation(8);
  }
  return 8;
}

function nine(operation = null) {
  if (operation) {
    return operation(9);
  }
  return 9;
}

function plus(b) {
  return function (a) {
    return a + b;
  };
}

function minus(b) {
  return function (a) {
    return a - b;
  };
}

function times(b) {
  return function (a) {
    return a * b;
  };
}

function dividedBy(b) {
  return function (a) {
    return Math.floor(a / b);
  };
}

console.log(seven(times(five()))); // Output: 35
console.log(four(plus(nine()))); // Output: 13
console.log(eight(minus(three()))); // Output: 5
console.log(six(dividedBy(two()))); // Output: 3
