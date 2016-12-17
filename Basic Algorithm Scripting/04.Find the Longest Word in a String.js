/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/
function findLongestWord(str)
{
         arr1 = str.split(' ');
        console.log(arr1);
        var max = 0;
        for( var i = 0 ; i < arr1.length ; i++)
        {
            if(arr1[i].length > max)
            {
                max = arr1[i].length;
            }
        }
            return max;
}      

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
