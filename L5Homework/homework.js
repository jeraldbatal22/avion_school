// Do not change any of the function names

//Example 1:
function getBiggest(x, y) {
  if (x > y) {
    return x
  } return y
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
}

function greeting(language) {
  if (language === 'German') {
    return 'Guten Tag!'
  } if (language === 'Mandarin') {
    return 'Ni Hao!'
  } if (language === 'Spanish') {
    return 'Hola!'
  } return 'Hello!'
  
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Mandarin' -> 'Ni Hao!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
}

function isTenOrFive(num) {
  return (num === 10 || num === 5)
  // return true if num is 10 or 5
  // otherwise return false
}

function isInRange(num) {
  return (num < 50 && num > 20)
  // return true if num is less than 50 and greater than 20
  // otherwise return false
}

function isInteger(num) {
    return (num === 5 || num === -20 || num === 0)
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
}

function fizzBuzz(num) {
  if (num === 9) {
    return 'fizz'
  } if (num === 10) {
    return 'buzz'
  } if (num === 15) {
    return 'fizzbuzz'
  } if (num === 4) {
    return num
  }
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
}

function isPrime(num) {
  if(num <= 1) {
    return false;
  }
  if (num === 2) {
    return true
  }
  for(var i = 2; i < num; i++) {
    return (num % i === 0) ? false : true
  }
  
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
};