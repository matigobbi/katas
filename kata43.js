// https://www.codewars.com/kata/5831200eb812b8016d000094/train/javascript

// Your task is to write a function, smartSum, 
// that returns the sum of an arbitrary number of arguments.
//  But be careful, some of your arguments can be arrays of numbers or nested arrays.

function smartSum(){
  let merged = [...arguments].flat(2)
  return merged.reduce((a,b)=>b+a) 
}

