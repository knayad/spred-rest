function sumAll(...n){
  let sum = 0;
  for(let i = 0; i < n.length; i++){
    sum += n[i];
  }
  return sum;
};


// TODO: create the function sumAll

console.log(sumAll(1, 2)); // expected output: 3
console.log(sumAll(1, 2, 3)); // expected output: 6
console.log(sumAll(1, 2, 3, 4)); // expected output: 10

//don't change this line
if (typeof module !== "undefined") {
  module.exports = { sumAll };
}
