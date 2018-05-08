//remove duplicates from arr in place and return arr

function removeDups(nums){
  let i = 0;
  for (let j = 1; j < nums.length; j++){
    if (nums[i] !== nums[j]){
      i++;
      nums[i] = nums[j];
    }
  }
  return nums.slice(0,i+1);
}

console.log(removeDups([1,1,1,2,2,3,3,3,3,3,3]));
