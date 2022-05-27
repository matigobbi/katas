// You are given a list of unique integers arr, and two integers a and b. 
// Your task is to find out whether or not a and b appear consecutively in arr, 
// and return a boolean value (True if a and b are consecutive, False otherwise).
// It is guaranteed that a and b are both present in arr.
arr = [1, 3, 5, 7]
a = 3
b = 7


function consecutive(arr, a, b) {
  let i1 = arr.indexOf(a)
  let i2 = arr.indexOf(b)
  if (i2 === i1 + 1){ return true}
  if (i2 === i1 - 1){ return true}
  else {return false}
  }