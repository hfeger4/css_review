function soundMaker(sound, times){
  function makeSound(){
    console.log(`${sound}`);
  }

  for(let i = 0; i < times; i++){
    makeSound();
  }
}

soundMaker("Bark",10);

function summation(arr){
  let sum = 1;

  function summer(){
    for(let i = 0; i < arr.length; i++){
      sum *= arr[i];
    }
  }
  summer();
  return sum;
}

console.log(summation([1,2,3]));

let callback = function(){
  console.log("It has been 5 seconds");
};

let timeToWait = 5000;

global.setTimeout(callback, timeToWait);
//only pass in code itself, if you pass it invoked then it will pass in the return value;

//ES6
global.setTimeout(() => console.log("It has been 3 seconds"),3000);
