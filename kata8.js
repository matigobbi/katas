// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)


function getSum( a,b )
{
  let begin;
  let end;
  if(a < b){
    begin = a
    end = b
  }
  else{
    begin = b
    end = a
  }
  let sum=0;
  for (let i = begin; i <= end ; i++){
    sum += i
  }
  return sum
}