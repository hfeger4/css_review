// function NBAPlayer(name,team,pos){ //constructor function;
//   this.name = name;
//   this.team = team;
//   this.pos = pos;
// }
//
// const curry = new NBAPlayer("Curry","Warriors","Tear-Maker");
//
// NBAPlayer.prototype.dunk = function(){
//   console.log("DUNKED");
// };
//
// curry.dunk(); //Method style invocation;
//
//
// curry.__proto__ === NBAPlayer.prototype;

function NBAPlayer(name,team,pos){ //constructor function;
  this.name = name;
  this.team = team;
  this.pos = pos;
}

let curry = new NBAPlayer("Curry","Warriors","Point Guard");

// console.log(curry.__proto__); === empty object;
//console.log(NBAPlayer.prototype);

NBAPlayer.prototype.dunk = function(){
  console.log(`${this.name} dunks!`);
};

curry.dunk();

console.log(curry.__proto__);
console.log(NBAPlayer.prototype);

curry.name = "Steph";
curry.dunk();
