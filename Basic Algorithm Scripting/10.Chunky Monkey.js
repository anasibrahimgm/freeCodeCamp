/*
Write a function that splits an array (first argument) into groups the length
of size(second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
          // Break it up.
          var len = arr.length;
          var arr3 = [];
          var arrNum = Math.ceil(len / size);
          arr2 = arr;
            
            for(var i = 0 ; i < arrNum ; i++)
            {
                arr3[i] = [];
                var x = arr2.length;
                
                for( var j = 0 ; j < size ; j++)
                  {
                    arr3[i][j] = arr2[0];
                    arr2.shift();
                  }

                if(x < size)
                {
                    arr3[i].length = x; 
                }
            }           
          return arr3;
        }
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
