/*
One of the simplest and most widely known ciphers is a Caesar cipher,
 also known as a shift cipher. In a shift cipher the meanings of the 
 letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters 
are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns 
a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic 
character (i.e. spaces, punctuation), but do pass them on.
*/
function rot13(str)
        {
            var arr = [];
            for(var i = 0 ; i < str.length ; i++)
            {

                arr[i] = str.charCodeAt(i);
                
                if(arr[i] <= 90 && arr[i] >= 65){
                    arr[i] = arr[i] + 13;
                    //console.log('arr[i]-90 : ' + (arr[i] -90));
                    arr[i] = (arr[i] > 90) ? (arr[i] - 26) : arr[i];
                    //console.log('arr[i]    : ' + arr[i]);
                }
                arr[i] = String.fromCharCode(arr[i]);
            }
            str = arr.join('');
            return str;
        }

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));
