/*
Return the remaining elements of an array after chopping off n elements from the head.
The head means the beginning of the array, or the zeroth index.
*/

function slasher(arr, howMany) {
  // it doesn't always pay to be first
   if(howMany >= arr.length)
          {
            arr = [];
          }
          else
          {
            for(var i = 0 ; i < howMany ; i++)
            {
                arr.shift();
            }

          }
  return arr;
}

console.log(slasher([1, 2, 3], 2));
