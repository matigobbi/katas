// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.



// INPUT : ('45385593107843568'), 

// OUTPUT : '01011110001100111')

function fakeBin(x){
  let arrx= x.split("")
  for(let i = 0; i<arrx.length; i++){
    if(arrx[i]<5)arrx[i]=0
    if(arrx[i]>=5)arrx[i]=1
  }
    return arrx.join("")
  }