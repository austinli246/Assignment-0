function sumOfNumsWithinARange(nums, start, end) {
  let count =0;
  let startposition=0;
  let endposition=0;
  let foundstart = false;
  for (i=0;i<nums.length;i++){
    if (nums[i]===start){
      startposition = i;
      foundstart = true;
    }
  }
 let foundend = false;
  for (i=0;i<nums.length;i++){
    if (nums[i]===end){
      endposition = i;
      foundend =true;
    }
  }

//  console.log(startposition); console.log(endposition);
if (foundstart ===false && foundend ===false)
return 0;
if (foundend===false)
return nums.length;
else 
for (i=startposition; i<endposition+1; i++){
count++;
}
return count;
}
// Do not edit this line;
module.exports = sumOfNumsWithinARange;
