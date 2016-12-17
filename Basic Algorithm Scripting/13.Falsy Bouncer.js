/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {
          // Don't show a false ID to this bouncer.
          var arr1 = [];
          var len = arr.length;

          for(var i = 0 ; i < len ; i++)
          {
            if(arr[i])
            {
                arr1.push(arr[i]);
            }
          }
          return arr1;
        }

console.log(bouncer([7, "ate", "", false, 9]));
