//https://www.codewars.com/kata/5c55ad8c9d76d41a62b4ede3/javascript
//You are given array of integers, your task will be to count all pairs in that array and return their count.

//Notes:

//Array can be empty or contain only one value; in this case return 0
//If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
//Random tests: maximum array length is 1000, range of values in array is between 0 and 1000


function duplicates(array){
  let obj = {}
  let result= 0
  for (let num of array){
    if(!obj[num]){obj[num] = 1}
    else{ obj[num] +=1}
  }
  for( let num of Object.values(obj)){
      result += Math.floor(num/2)
    }
    
  return result
  }