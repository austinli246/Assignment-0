function fizzBuzz(start, end) {
  let arr = [];
    let a = start;
    for (let i = 0; i<end-start+1; i++){
      arr[i] = a;
      a++;
    }
    for (let i=0; i<end-start+1; i++){
      if (arr[i]%3===0 && arr[i]%5 ===0)
      arr[i]= "FizzBuzz";
      else if (arr[i]%5===0)
        arr[i]= "Buzz";
      else if (arr[i]%3===0)
        arr[i]= "Fizz";
     
    }
    return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;
