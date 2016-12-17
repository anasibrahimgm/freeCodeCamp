/*
Perform a search and replace on the sentence using the arguments provided
and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with(after).

NOTE: Preserve the case of the original word when you are replacing it. 
For example if you mean to replace the word "Book" with the word "dog",
 it should be replaced as "Dog"
*/

    function myReplace(str, before, after) {
      arrBefore = before.split('');
      arrAfter = after.split('');
      
      if(arrBefore[0] >= 'a' && arrBefore[0] <= 'z')
      {
        arrAfter[0] = arrAfter[0].toLowerCase();
      }
      if(arrBefore[0] >= 'A' && arrBefore[0] <= 'Z')
      {
        arrAfter[0] = arrAfter[0].toUpperCase();
      }

      before = arrBefore.join('');
      after = arrAfter.join('');
      str = str.replace(before, after);
      return str;
    }

    console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped"));
