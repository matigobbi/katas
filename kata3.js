// In the office we love to do amazing activities all together so we can share incredible experiences. 
// This time, we decided to do bungee jumping. To decide the order we are going to jump, 
// we need to create a sorter algorithm with the next rules.

// We will receive a list of names for each department, so at the end we will have a 2D array with different length

// We will return a normal array with all the names in the correct order

// The sequence will be to add all the names sorted by the length of the name (ASC). In case there are more than one with the same length, 
// sort them alphabetically.

function namesSorter (arrToConvert) {
  var newArr = []

  for(var i = 0; i < arrToConvert.length; i++)
  {newArr = newArr.concat(arrToConvert[i])}
  
  newArr.sort(function (a ,b){ 
  return a.length - b.length || a.localeCompare(b)
  })
  
  return newArr;
}

//test

describe("Function namesSorter", function(){
    
  it ("returns an array", function(){
    var arr = [["Pablo", "Enrique", "Josh", "Juan", "Gonzalo"], ["Michael", "Alexander", "Mikel", "Ariel"], ["John", "Julia", "Brad", "George"]];
    Test.expect(Array.isArray(namesSorter(arr)), "Is not returning an array");
  });
  
  it ("returns ['Brad', 'Juan'] when array is [['Juan'], ['Brad']]", function(){
    Test.assertDeepEquals(namesSorter([['Juan'], ['Brad']]), ['Brad', 'Juan']); 
  });
  
  it ("returns [ 'Brad', 'Juan', 'Ariel', 'Julia', 'Michael', 'Alexander' ] when array is [['Juan','Ariel','Julia'], ['Brad','Michael','Alexander']]", function(){
    Test.assertDeepEquals(namesSorter([['Juan','Ariel','Julia'], ['Brad','Michael','Alexander']]), [ 'Brad', 'Juan', 'Ariel', 'Julia', 'Michael', 'Alexander' ]); 
  });
  
  it ("returns [ 'Brad','John','Josh','Juan','Ariel','Julia','Mikel','Pablo','George','Enrique','Gonzalo','Michael','Alexander' ] when array is [['Pablo', 'Enrique', 'Josh', 'Juan', 'Gonzalo'], ['Michael', 'Alexander', 'Mikel', 'Ariel'], ['John', 'Julia', 'Brad', 'George']]", function(){
    Test.assertDeepEquals(namesSorter([["Pablo", "Enrique", "Josh", "Juan", "Gonzalo"], ["Michael", "Alexander", "Mikel", "Ariel"], ["John", "Julia", "Brad", "George"]]), [ 'Brad','John','Josh','Juan','Ariel','Julia','Mikel','Pablo','George','Enrique','Gonzalo','Michael','Alexander' ]); 
  });
});