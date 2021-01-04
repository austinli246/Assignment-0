function isPalindrome(word) {
  let total = word.length; 
    let a = word.charAt(0);
    let b = word.charAt(total-1);
    let c = false;
    let e = 0;
    let f =total-1
    for (let i=0; i<total; i++){
    if (a===b){
      a = word.charAt(e++);
      b = word.charAt(f--); 
      c= true;
    }
    else return false;
  }
    return true;
  
}

// Do not edit this line;
module.exports = isPalindrome;
