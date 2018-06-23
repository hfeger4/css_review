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

console.log(binary_search([1,5,2,4,3], 4));
console.log(binary_search([1,5,2,4,3], 3));
console.log(binary_search([1,5,2,4,3], 6));
console.log(binary_search([1,5,2,4,3], 10));
