// The Story:
// Bob is working as a bus driver. 
// However, he has become extremely popular amongst the city's residents. 
// With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple 
// program telling him if he will be able to fit all the passengers.

// cap = 10, on = 5, wait = 5 --> 0 # He can fit all 5 passengers
// cap = 100, on = 60, wait = 50 --> 10 # He can't fit 10 of the 50 waitinggit a


function enough(cap, on, wait) {
  let isCapacity = cap - on - wait
  if (isCapacity <= 0) {
    return Math.abs(isCapacity)
  }else {
    return 0
  }
}