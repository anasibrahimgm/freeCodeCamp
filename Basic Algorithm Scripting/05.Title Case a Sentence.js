/*
Return the provided string with the first letter of each word capitalized.
Make sure the rest of the word is in lower case.
*/
function titleCase(str) {
		var arr2 = [];
  		str = str.toLowerCase();
  		arr = str.split(' ');
  		for(var i = 0 ; i < arr.length ; i++)
  		{
  				arr2 = arr[i].split('');
  				arr2[0] = arr2[0].toUpperCase();
  				arr[i] = arr2.join('');
  				//console.log(arr[i]);
  		}
  		str = arr.join(' ');
  		//console.log(str);
  return str;
  }

titleCase("I'm a little tea pot");
