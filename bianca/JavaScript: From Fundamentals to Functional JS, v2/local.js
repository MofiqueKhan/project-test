var person = {};
person.name = "mr. mofique";
var who = person.name;

console.log(who);

const fruits = ["Apple", "Banana", "Orange"];
for (x of fruits) {
  console.log(x);
}

for (i = 0; i < 10; i++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}

var arr = {};
arr[1] = 'MOFIQUE ';
arr[5] = 'AHAMED';

var cont = arr;
console.log(cont);

var people = [];
people["name"]= "mofique";
people["class"]= "bca";

console.log(people["name"]);
console.log(people["class"]);

var myage =Number("hii");
console.log(typeof(myage));

myage= "my son's age";
console.log(typeof(myage));

if(Object.is || true){
  Object.is = function ObjectIs(a,b){
    var aNegZero= isItNegZero(a);
    var bNegZero = isItNegZero(b);

    console.log(aNegZero);
    console.log(bNegZero);
    function isItNegZero(c){
    console.log(c);
      

      return c==0 && (1/c) == -Infinity ;
    }
    return aNegZero === bNegZero;
  };
}

// console.log(Object.is(42,42) === true);
// console.log(Object.is("foo","foo") === true);
// console.log(Object.is(false,false) === true);
// console.log(Object.is(null,null) === true);
// console.log(Object.is(undefined,undefined) === true);
// console.log(Object.is(NaN,NaN) === true);
// console.log(Object.is(-0,-0) === true);
// console.log(Object.is(0,0) === true);

// console.log(Object.is(-0,0) === false);
// console.log(Object.is(0,-0) === false);
// console.log(Object.is(0,NaN) === false);
// console.log(Object.is(NaN,0) === false);
// console.log(Object.is(42,"42") === false);
// console.log(Object.is("42",42) === false);
// console.log(Object.is("foo","bar") === false);

var a = [1,2,3,4,5];

for(let item of a){
  // console.log(a[item]);
}


// Q7. Create a function that takes an array containing only numbers and return the first element.

// Examples
// getFirstValue([1, 2, 3]) ➞ 1

// getFirstValue([80, 5, 100]) ➞ 80

// getFirstValue([-500, 0, 50]) ➞ -500
// Notes
// The first element in an array always has an index of 0.


function getFirstValue(arr){
  return arr[0];
}

// console.log(getFirstValue([1, 2, 3]));
// console.log(getFirstValue([80, 5, 100]));
// console.log(getFirstValue([-500, 0, 50]));

// Given two arguments, return an array which contains these two arguments.

// Examples
// makePair(1, 2) ➞ [1, 2]

// makePair(51, 21) ➞ [51, 21]

// makePair(512124, 215) ➞ [512124, 215]
// Notes
// N/A


function makePair(a,b){
  var arr = [a,b]
  return arr;
}

// console.log(makePair(1, 2));
// console.log(makePair(51, 21));
// console.log(makePair(512124, 215));


// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

// Examples
// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0
// Notes
// You can expect only positive integers for vote counts.

function getVoteCount(votes) {
	return votes.upvotes - votes.downvotes;
}

// console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));

// console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));

// console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));


function reverse(arr){
  return arr.reverse();
 }
// console.log(reverse([1, 2, 3, 4]));

// console.log(reverse([9, 9, 2, 3, 4]));

// console.log(reverse([]));


// function say(message) {
//   console.log(message);
// }

// let result = say('Hello');
// console.log('Result:', result);

// function bolo(msg){
//   console.log(msg);
// }

// let result = bolo("hiii");
// console.log("ye dekho : ",result);




// function add(a, b) {
//   return a + b;
// }
// let sum = add(10, 20);
// console.log('Sum:', sum);

function add() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
  }
  return sum;
}

// console.log(add(1,3,4,5,6));
// console.log(add(1,3,4,5,6,8,6));


// showMe(); // a hoisting example

function showMe(){
    console.log('an hoisting example');
}

showMe(); // a hoisting example

function sub(m , n){
  return m * n ;
}
 let diff = sub(20,10) ;
 console.log(diff);

function final(m , n , c){
  return c(m, n)* 4;
}
let result= final(20 , 10 , sub);
console.log(result);


// addition(0) ➞ 1

// addition(9) ➞ 10

// addition(-3) ➞ -2

function addition(a){
  return a+1;
}
console.log(addition(0));

console.log(addition(9));

console.log(addition(-3));

