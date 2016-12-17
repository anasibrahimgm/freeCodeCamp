		function sumAll(arr) {
  
            var max= Math.max(arr[0], arr[1]);
            var min = Math.min(arr[0], arr[1]);
			var sum = 0;

			for(var i = min ; i < (max + 1) ; i++)
			{
				sum += i;
			}

		 	return sum;
		}
		
		console.log(sumAll([9, 4]));