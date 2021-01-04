class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

 binarySearch(nums, target) {
   
   let mid = Math.floor(nums.length/2);
    if (nums[mid] === target)
      return true;
    else if (nums[mid] < target)
      return this.binarySearch(nums.splice(mid+1,nums.length), target);
    else if (nums[mid] > target)
    return this.binarySearch(nums.splice(0,mid),target);
    else return false;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
