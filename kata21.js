// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.



function divCon(x){
  let numbers=[]
  let strings=[]
  let totalNum=0
  let totalStr=0
for(let i = 0; i<x.length; i++){
  if(typeof x[i] === "number"){
    numbers.push(x[i])
  } else { strings.push(x[i]) }}
    for (var i in numbers) {
  totalNum += numbers[i];
}
    for (var i in strings) {
  totalStr += Number(strings[i]);
}
  return  totalNum - totalStr 
}