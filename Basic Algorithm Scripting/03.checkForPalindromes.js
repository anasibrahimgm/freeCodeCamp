/*
Return true if the given string is a palindrome.
Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward
and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols)
and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar",
and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
*/
function palindrome(str) {
      var arr1 = []; 
	  var arr2 = [];
      str = str.toLowerCase();
      str = str.replace(/[^a-z0-9]/gi,"");
	  arr1 = str.split("");
	  //console.log(arr1);
	  var len = arr1.length;
	  for(var i = len ; i >0  ; i--)
	    {
	      arr2.push(arr1[i-1]);
	    }
	  //console.log(arr2);
      for (var m = 0 ; m < len ; m++){
        if(arr1[m] !== arr2[m]){
          return false;
        }
  }
  return true;
}

console.log(palindrome("eye"));
