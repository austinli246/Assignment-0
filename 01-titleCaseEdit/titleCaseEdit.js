function titleCaseEdit(title) {
  let str = title; // put the sentence into variable str
  let num = title.split(" "); //split the sentence by space
  
  for (let i=0; i<num.length; i++){
    num[i] = num[i][0].toUpperCase() + num[i].substring(1);
  }
  let result= num.join(" "); 
  return result;
}

// Do not edit this line;
module.exports = titleCaseEdit;
