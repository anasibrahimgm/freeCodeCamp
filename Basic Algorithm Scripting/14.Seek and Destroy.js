/*
You will be provided with an initial array (the first 
argument in the destroyer function), followed by one 
or more arguments. Remove all elements from the 
initial array that are of the same value as these arguments.
*/

function destroyer(arr) {
              // Remove all the values
              //console.log(arguments);
              var arr1 = arr;
              var arr2 = [];
              var res = [];

              for( var j = 1 ; j < arguments.length ; j++)
              {
                arr2.push(arguments[j]);
              }

              //console.log('arr1: ' + arr1);
              //console.log('arr2: ' + arr2);
              for(var i = 0 ; i < arr1.length ; i++)
              {
                for(var k = 0 ; k < arr2.length ; k++)
                {
                    if(arr1[i] == arr2[k])
                    {
                        arr1[i] = '';
                    }
                }
                
                if(arr1[i] !== '')
                {
                    res.push(arr1[i]);
                }
              }
              //console.log('arr1: ' + arr1);
              return res;
            }
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
