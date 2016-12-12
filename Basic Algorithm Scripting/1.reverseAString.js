function reverseString(str)
{
    var arr1 = []; 
	var arr2 = [];

	arr1 = str.split("");
	console.log(arr1);

	var len = arr1.length;
	for(var i = len ; i >0  ; i--)
	{
	   arr2.push(arr1[i-1]);
	}
	console.log(arr2);

	str = arr2.join("");
	return str;
}

    console.log(reverseString("Greetings from Earth"));