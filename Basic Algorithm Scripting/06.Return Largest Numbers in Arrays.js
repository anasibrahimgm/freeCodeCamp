/*
Return an array consisting of the largest number from each provided sub-array.
For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop,
and access each member with array syntax arr[i].
*/
    var maxNums = [];
    function largestOfFour(arr) {
  // You can do this!
    var arrLen = arr.length;

    for(var i = 0 ; i < arrLen ; i++)
    {

        var arriLen = arr[i].length;
        var max = 0;
        for(var j = 0 ; j < arriLen ; j++)
        {
            if(arr[i][j] > max)
            {
                max = arr[i][j];
            }
            maxNums[i] = max;
        }
    }
    //console.log(maxNums);
    return maxNums;
}

console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));