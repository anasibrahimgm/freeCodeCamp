/*
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

function booWho(bool) {

  if(typeof(bool) === 'boolean')
    bool = true;
  else  
    bool =  false;
  
  return bool; 
}

console.log(booWho([1, 2, 3]));
