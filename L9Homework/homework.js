// Do not change any of the function names

function invokeCallback(cb) {
   cb(cb)
  // invoke cb
}

function sumArray(numbers, cb) {
  var result = numbers.reduce(function(x, y) {
    return x + y;
  })
  cb(result);
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
} 

function forEach(arr, cb) {
  for (let i = 0; i < arr.length; i++){
    cb(arr[i]);
  }
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
}

function map(arr, cb) {
  return arr.map(function(x) {
    return cb(x)
  });
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument
}

module.exports = {
  invokeCallback,
  sumArray,
  forEach,
  map,
};