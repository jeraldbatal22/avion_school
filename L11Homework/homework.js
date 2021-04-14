// Do not change any of the function names

// solve these recursively

function nFactorial(n) {
 let answer = 1;
  if (n == 1){
    return answer;
  } else {
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;
  } 

  // return the factorial for n
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
}

function nFibonacci(n) {
  var a = 1, b = 0, temp;

  while (n >= 0){
    temp = a;
    a = a + b;
    b = temp;
    n--;
    
  }

  return b;
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  nFactorial,
  nFibonacci,
};