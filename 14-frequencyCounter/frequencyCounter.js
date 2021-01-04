
function frequencyCounter(word) {
  

  let arr = {};

  for(var i = 0; i < word.length; i++)
  {
   if (arr[word])
     arr[i]++;
   else 
     arr[i] =1; 
  }
return arr; 
}

// Do not edit this line;
module.exports = frequencyCounter;
