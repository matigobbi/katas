// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


function XO(str) {
  //turn into an arr
let arr = str.split("");
  //create  counters for x and o 
let x=0; 
let o=0;
  //loop trougth arr and add count
for(let i = 0; i < arr.length; i++){
  if(arr[i]==="x"||arr[i]==="X") x+= 1;
  if(arr[i]==="o"||arr[i]==="O") o+= 1;
}
  // compare and return
if(x == o) {return true}
else {return false}
}
