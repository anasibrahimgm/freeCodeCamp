
	function convertToRoman(num) {
		//num1 = num /1000;
		//num1 = Math.floor(num1);		
		var symbol1    = 'I';
		var symbol5    = 'V';
		var symbol10   = 'X';
		var symbol50   = 'L';
		var symbol100  = 'C';
		var symbol500  = 'D';
		var symbol1000 = 'M';
		var symbol5000 = 'V^';
		var symbol10000 = 'X^';
		var roman = [];
		var n = 0;
		//(num100, symbol100, symbol500);
		if(num >= 1000)
		{
			num1000 = num /1000;
			num1000 = Math.floor(num1000);
			num = num - num1000 * 1000;
			roman[n] = convert(num1000, symbol1000, symbol5000, symbol10000);
			n++;
		}


		/*
		if(num >= 500)
		{
			num500 = num /500;
			num500 = Math.floor(num500);
			num = num - num500 * 500;
		}
		*/

		if(num >= 100)
		{
			num100 = num /100;
			num100 = Math.floor(num100);
			num = num - num100 * 100;
			roman[n] = convert(num100, symbol100, symbol500, symbol1000);
			n++;
		}

		if(num >= 10)
		{
			num10 = num /10;
			num10 = Math.floor(num10);
			num = num - num10 * 10;
			roman[n] = convert(num10, symbol10, symbol50, symbol100);
			n++;
		}

		if(num >= 1)
		{
			num1 = num /1;
			num1 = Math.floor(num1);
			num = num - num1 * 1;
			roman[n] = convert(num1, symbol1, symbol5, symbol10);
			//n++;
		}

		function convert(number, symbol, nextSymbol, nextNextSymbol)
		{
			var str = '';

			switch (number)
			{
				case 1:
				case 2:
				case 3:
					for(var i = 0 ; i < number ; i++)
					{
						str = str.concat(symbol);
					}
					break;

				case 4:
					str = symbol;
					str = str.concat(nextSymbol);
					break;

				case 5:
					str = nextSymbol;
					break;

				case 6:
				case 7:
				case 8:
					str = nextSymbol;
					for(var i = 0 ; i < (number - 5) ; i++)
					{					
						str = str.concat(symbol);
					}
					break;

				case 9:
					str = symbol;
					str = str.concat(nextNextSymbol);
					break;
			}
			return str;
		}
		
	 return roman.join('');
	}	

	console.log(convertToRoman(1987));