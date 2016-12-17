/*
Find the missing letter in the passed letter range 
and return it.If all letters are present in the 
range, return undefined.
*/


function fearNotLetter(str) {
  
  var arr = [];
  var arr1 = [];
  var arr2 = [];

  var str0 = str.charCodeAt(0);
  var strEnd = str.charCodeAt(str.length - 1);
  
  for (var i = 0; i < str.length ; i++) {
    arr1[i] = str.charCodeAt(i);    
  }

  for (var i =0 ; i < (strEnd - str0 + 1) ; i++)
  {
    arr[i] = str0 + i;
  }
  if(str.length === arr.length)
  {
    return undefined;
  }
  for (var i =0 ; i < (strEnd - str0 + 1) ; i++)
  {

    if(arr[i] !== arr1[i])
    {
      return String.fromCharCode(arr[i]);
    }
  } 
}

fearNotLetter("bcd");
