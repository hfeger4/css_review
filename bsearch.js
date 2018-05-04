function bsearch(arr,left,right,val){
  while(left <= right){
    let mid = (left + right)//2
    if(val >= arr[mid]){
      return left = mid + 1
    else
      return right = mid - 1
    }
  }
  return right;
}
