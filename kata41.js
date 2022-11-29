/* /Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.
You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.

/* Each department has a different boredom assessment score, as follows:
 */

function boredom(staff){
  let scores = {  "accounts" : 1,"finance" : 2,"canteen" : 10,"regulation" : 3,"trading" : 6,"change" : 6,"IS" : 8,"retail" : 5,"cleaning" : 4,"pissing about" : 25,}
  let total = 0
  for (let member in staff){ 
    total+=scores[staff[member]]
  }
   if(total<= 80) return  'kill me now'
  if(total<100 && total>80)return 'i can handle this'
  if(total>100)return 'party time!!'
}

boredom({tim: 'change', jim: 'accounts',
  randy: 'canteen', sandy: 'change', andy: 'change', katie: 'IS',
  laura: 'change', saajid: 'IS', alex: 'trading', john: 'accounts',
  mr: 'finance' })