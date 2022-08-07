
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.


// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]


function openOrSenior(data){
  let result = []
  for(let singleData of data){
    if(singleData[0]>=55 && singleData[1]>7){
      result.push("Senior")
    } else {
      result.push("Open")
    }}
  return result
}