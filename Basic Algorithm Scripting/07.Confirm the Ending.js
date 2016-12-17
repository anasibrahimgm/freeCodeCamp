/*
Check if a string(first argument, str)
ends with the given target string (second argument, target).
*/

function confirmEnding(str, target) {
 // "Never give up and good luck will find you."
// -- Falcor
            var len = str.length;
            var tLen = target.length;
            res = str.substr(len-tLen,len);
            //console.log(res);
            if(res === target)
            {
                //console.log("OK");
                return true;
            }else {
                    return false;
            }
}

console.log(confirmEnding("Bastian", "n"));
