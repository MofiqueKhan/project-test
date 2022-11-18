function sumPolygon(n){
    return (n - 2) * 180;
}


// console.log(sumPolygon(3), 180);

// console.log(sumPolygon(4), 360);

// console.log(sumPolygon(6), 720);


function nameString(str){
    return str + "Edabit";
}

// console.log(nameString("Mubashir") , "MubashirEdabit");

// console.log(nameString("Matt") , "MattEdabit");

// console.log(nameString("javaScript") , "javaScriptEdabit");

function numArgs() {
	return arguments.length;
}

// console.log(numArgs() , 0);

// console.log(numArgs("foo") , 1);

// console.log(numArgs("foo", "bar") , 2);

// console.log(numArgs(true, false) , 2);

// console.log(numArgs({}) , 1);


function invertArray(arr){
    return  arr.map(a=>a?-a:0) 
  }


// console.log(invertArray([1, 2, 3, 4, 5]) , [-1, -2, -3, -4, -5]);

// console.log(invertArray([1, -2, 3, -4, 5]) , [-1, 2, -3, 4, -5]);

// console.log(invertArray([]) , []);

function mod(a,b){
    return a - Math.floor(a/b) * b;
}

// console.log(mod(5, 2) , 1);

// console.log(mod(218, 5) , 3);

// console.log(mod(6, 3) , 0);

function basicCalculator(a,o,b){
    if(o === '+'){
        return a + b
    }
    if (o === '-'){
        return a - b
    }
    if (o === '*'){
        return a * b
    }
    if (o === '/' && b != 0){
        return a/b
    }
    return null;
}

// console.log(baarr = [
//     ["m", "u", "b"],
//     ["a", "s", "h"],
//     ["i", "r", "1"]
//   ]
  
//   idx = [1, 3, 5, 8]

// console.log(keyboardMistakes("MUB45H1R") , "MUBASHIR");

// console.log(keyboardMistakes("DUBL1N") , "DUBLIN");

// console.log(keyboardMistakes("51NG4P0RE") , "SINGAPORE");

// console.log(keyboardMistakes("M0F1QU3") , "MOFIQUE");


//    ...........

// Given a 2D-list of letters arr and a list of indexes idx, find the letters on given indexes and return as a string.

// arr = [
//   ["m", "u", "b"],
//   ["a", "s", "h"],
//   ["i", "r", "1"]
// ]

// idx = [1, 3, 5, 8]
// You have to find the characters in these indexes of the given list if you think of the indexes as:

// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// arrIndex(lst, idx) - "mbsr"
// Notes
// Remember that the indexes start from one and not zero.

function reverseCapitalize(str) {
    return str.split("").reverse().join("").toUpperCase();
}


// console.log(reverseCapitalize("abc") , "CBA");

// console.log(reverseCapitalize("hellothere") , "EREHTOLLEH");

// console.log(reverseCapitalize("input") , "TUPNI");

function giveMeSomething(a){
    return "something" + " " + a ;
}
// console.log(giveMeSomething("is better than nothing") , "something is better than nothing");

// console.log(giveMeSomething("Bob Jane") , "something Bob Jane");

// console.log(giveMeSomething("something") , "something something");

function lessThanOrEqualToZero(a){
    return a <= 0 ? true : false ;
}
// console.log(lessThanOrEqualToZero(5) , false);

// console.log(lessThanOrEqualToZero(0) , true);

// console.log(lessThanOrEqualToZero(-2) , true);

// console.log(lessThanOrEqualToZero(-69) , true);

function makePair(a,b){
    return [a,b];
}

// console.log(makePair(1, 2) , [1, 2]);

// console.log(makePair(51, 21) , [51, 21]);

// console.log(makePair(512124, 215) , [512124, 215]);

function boolToString(a){
    return a.toString();
}

// console.log(boolToString(true) , "true");

// console.log(boolToString(false) , "false");


// arr = [
//     ["m", "u", "b"],
//     ["a", "s", "h"],
//     ["i", "r", "1"]
//   ]
  
//   idx = [1, 3, 5, 8]

function arrIndex(arr, idx) {
     arr = arr.flat();
    let sIdx = [];
    const mapA = x => arr[x-1]
    for(let i = 0 ; i < idx.length ; i++ ){
        sIdx.push(mapA(idx[i]));
    }

    return sIdx.join("")
    // for(item of idx){
    //     sIdx.push(item-1)
    // }
    // for( let i=0; i < idx.length ; i++){
    //     for(item in newArr){
    //         if( item === sIdx[i]){
    //              newStr = newStr+ (newArr[item]);
    //         }       
    //     }
    // }
    // console.log(newStr);
    // return newStr;
//    arr = arr.flat()
//    return idx.map(x => arr[x-1]).join("")

}

const results = arrIndex([['m', 'u', 'b'], ['a', 's', 'h'], ['i', 'r', '1']],  [1, 3, 5, 8])
console.log(results, 'mbsr')
const results1 = arrIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 2, 3, 4, 5, 6, 7, 8, 9])
console.log(results1, 'myexample')
const results2 = arrIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 5, 6])
console.log(results2, 'mam')
const results3 = arrIndex([['m', 'y', 'e'], ['x', 'a', 'm'], ['p', 'l', 'e']], [1, 3, 7, 8])
console.log(results3, 'mepl')