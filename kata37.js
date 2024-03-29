/*
https://www.codewars.com/kata/total-amount-of-points
Our football team finished the championship. The result of each match look like "x:y". 
Results of all matches are recorded in the collection.
For example: ["3:1", "2:2", "0:1", ...]
Write a function that takes such collection and counts the points of our team in the championship. 
Rules for counting points for each match:
if x>y - 3 points
if x<y - 0 point
if   - 1 point
Notes:
there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/

function points(games) {
	let result = 0;
	for (let game of games) {
		if (game[0] > game[2]) {
			result += 3
		} else if (game[0] === game[2]) {
			result += 1
		}
	}
	return result;
}


function points(games) {

  //set a variable to store the result
  //loop over the given array
  //set a condition to compare x and y
  //sum to the result
  //return the result
  
  let result = 0

  games.forEach(function(game){
    if(game[0]>game[2]){
      result+= 3
    }
    else if(game[0]===game[2]){
      result+=1
    }
  })
   return result
}
