// Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).

// Consult the solution set-up for the exact data structure implementation depending on your language.

// Example:

// orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

// https://www.codewars.com/kata/57a6633153ba33189e000074/javascript


const orderedCount = function (text) {
  const noDuplicates = [...new Set(text.split(""))]
  
  const result = noDuplicates.map(char=>{
    return [char, text.split(char).length-1]
  })
    return result 
  }