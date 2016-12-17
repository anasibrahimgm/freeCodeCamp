/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English 
word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

 function translatePigLatin(str) {
    switch(str[0])
    {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        str = str.concat('way');
        break;
      default:
        pigLatin();
    }

    //end of switch
    function pigLatin ()
    {
      var pos;
      arr = str.split('');
      for (var i = 0 ; i < arr.length ; i++) 
      {        
        switch(arr[0])
        {
          case 'a':
          case 'e':
          case 'i':
          case 'o':
          case 'u':
            pos = i;
            break;        
        }               
        if(!pos)
        {
          arr.push(arr[0]);
          arr.shift();
        }

        if(pos)
        {                            
          str = arr.join('');
          str = str.concat('ay');
          break;
        }
      }      
    }
    return str;
  }
  console.log(translatePigLatin("cnsint"));