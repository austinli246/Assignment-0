function pairSum(nums, target) {
  if (nums.length<=1)
    throw "is Empty"; 
  let found = false;
  for (let i=0; i<nums.length; i++){
    for (let j=0; j<nums.length; j++){
        if (nums[i]!=nums[j]){
          if (nums[i]+nums[j]==target)
            return true;
        }
    }
  }
  return found;
}

// Do not edit this line;
module.exports = pairSum;
