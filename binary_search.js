var binary_search = function(array,target){
  if(array.length === 0 || (array.length === 1 && array[0] !== target)){
  return -1; }

  var middle = Math.floor(array.length / 2);
  if(array[middle] === target){
    return middle;
  }
  if(target < array[middle]){
    return binary_search(array.slice(0,middle),target);
  }
  var result = binary_search(array.slice(middle + 1), target);
  return (result === -1) ? -1 : result + 1 + middle;
};

const b_search_position = (arr,target) => {
  let left = 0;
  let right = arr.length-1;
  while(left <= right){
    let mid = Math.floor((left + right)/2);
    if(target >= arr[mid]){
      left = mid + 1;
    }else{
      right = mid - 1;
    }
  }
  return right;
};

console.log(binary_search([1,2,3,4,5], 4));
console.log(binary_search([1,2,3,4,5], 3));
console.log(binary_search([1,2,3,4,5], 6));
console.log(binary_search([1,2,3,4,5], 10));

console.log("New Bsearch");
console.log(b_search_position([1,2,3,4,5], 4));
console.log(b_search_position([1,2,3,4,5], 3));
console.log(b_search_position([1,2,3,4,5], 6));
console.log(b_search_position([1,2,3,4,5], 10));
