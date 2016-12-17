
	function diffArray(arr1, arr2) {
	  var newArr = [];
	  for(var i = 0 ; i < arr1.length ; i++)
	  {
	  	for(var j = 0 ; j < arr2.length ; j++)
	  	{
	  		if(arr1[i] === arr2[j])
	  		{
	  			arr1[i] = '';
	  			arr2[j] = '';
	  		}
	  	}
	  }

	  for(var i = 0 ; i < arr1.length ; i++)
	  {
	  	if(arr1[i])
	  	{
	  		newArr.push(arr1[i]);
	  	}
	  }

	  for(var j = 0 ; j < arr2.length ; j++)
	  {
	  	if(arr2[j])
	  	{
	  		newArr.push(arr2[j]);
	  	}
	  }

	  console.log(arr1);
	  console.log(arr2);
	  return newArr;
	}

	console.log(diffArray([1, "calf", 3, "piglet"], [7, "filly"]));