/*
ake a function that looks through an array of objects (first argument) 
and returns an array of all objects that have matching property and value
 pairs (second argument). Each property and value pair of the source object
  has to be present in the object from the collection if it is to be 
  included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }
, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]
, and the second argument is { last: "Capulet" }, then you must return 
the third object from the array (the first argument), because it contains
 the property and its value, that was passed on as the second argument.
*/

function whatIsInAName(collection, source) {
  //collection1 = collection;
  sourceKeys = Object.keys(source);

  var arr = [];
  for (var i = 0 ; i < sourceKeys.length ; i++)
  {
    for (var j = 0 ; j < collection.length ; j++)
    {
        hasProp = collection[j].hasOwnProperty(sourceKeys[i]);
        if(!hasProp || (hasProp && (source[sourceKeys[i]] !== collection[j][sourceKeys[i]])
            ) )
        {
            collection[j] = '';
        } 

    }
  }
  //console.log(collection1);
  for( var n = 0 ; n < collection.length ; n++)
  {
    if(collection[n])
    {
        arr.push(collection[n]);
    }
  }
  return arr;
}

console.log(whatIsInAName([
               { first: "Romeo", last: "Montague" },
               { first: "Mercutio", last: null },
               { first: "Tybalt", last: "Capulet" }
                ], 
               
                { last: "Capulet" }));