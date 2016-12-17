/*
Repeat a given string (first argument) num times (second argument).
Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
  // repeat after me
  if(num <= 0){
    return "";
  }
  var str2 = "";
  for(var i = 0 ; i < num ; i ++)
   {
    str2 = str2.concat(str);
  }
  return str2;
}

console.log(repeatStringNumTimes("abc", 3));
