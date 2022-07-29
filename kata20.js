// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"



function getMiddle(s)
{
  let len = s.length;
  let splitted= s.split("")
  let middle = len / 2
  if (len %2 ==1) return s[middle-0.5] 
  else return  s[middle-1]+s[middle]
}