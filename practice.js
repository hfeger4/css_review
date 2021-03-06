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

//mergesort

function mergeSort(arr){
  if (arr.length === 1){
    return arr;
  }

  let mid = Math.floor(arr.length/2);
  let left = arr.slice(0,mid);
  let right = arr.slice(mid);

  let sortedLeft = mergeSort(left);
  let sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}

function merge(left,right){
  let arr = [];
  while (left.length > 0 && right.length > 0){
    if (left[0] < right[0]){
      arr.push(left.shift());
    }else{
      arr.push(right.shift());
    }
  }
  if (left.length > 0){
    arr.concat(left);
  }
  if (right.length > 0){
    arr.concat(right);
  }
  return arr.concat(left).concat(right);
}

console.log(mergeSort([1,5,2,3,4]));

//bsearch for position
function b_search(arr,left,right,target){

  while(left <= right){
    let mid = (left + right) >> 1;
    if(target >= arr[mid]){
      left = mid + 1;
    }else{
      right = mid - 1;
    }
  }
  return right;
}

//add biggest difference

function biggest_difference(arr){
  let biggest_diff = -1;
  let min = arr[0];
  for(let i = 1; i < arr.length; i++){
    let temp_big = arr[i] - min;
    biggest_diff = biggest_diff > temp_big ? biggest_diff : temp_big;
    min = min > arr[i] ? arr[i] : min;
  }
  return biggest_diff;
}
