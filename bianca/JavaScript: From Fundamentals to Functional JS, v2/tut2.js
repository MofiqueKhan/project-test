
//         //some method in array :)

// let arr = [10,20,15,35,2];
// // console.log(arr);
// var b = arr.some(check)
// function check(a){
//     return a>50;
// }
// // console.log(b);

//         //every method in array :)
// let arry = [10,20,15,35,2];
// // console.log(arr);
// var b = arry.every(check)
// function check(a){
//     return a>1;
// }
// // console.log(b);

// let arr2 = [10,20,15,35,2];
// // console.log(arr);
// var b = arr2.find(check)
// var c = arr2.findIndex(z)
// function check(a){
//     return a>15;
// }
// function z(b){
//     return b>15;
// }
// // console.log(b,c);


// // ```Mirror Array
// // Given an integer array, transform that array into a mirror.

// // Examples
// // mirror([0, 2, 4, 6]) ➞ [0, 2, 4, 6, 4, 2, 0]

// // mirror([1, 2, 3, 4, 5]) ➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]

// // mirror([3, 5, 6, 7, 8]) ➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]


function mirror(arr) {
	return arr.concat(new Array(...arr).reverse().slice(1));
}

console.log(mirror([0, 2, 4, 6]),[0, 2, 4, 6, 4, 2, 0])

console.log(mirror([1, 2, 3, 4, 5]),[1, 2, 3, 4, 5, 4, 3, 2, 1]) 

console.log(mirror([3, 5, 6, 7, 8]),[3, 5, 6, 7, 8, 7, 6, 5, 3]) 




// var arr = ["hamran","mofique","danish"];
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.push("ayan")
// console.log(arr);

// var arry = new Array();

// arry[0] = "mofique";
// arry[1] = "dinesh";
// arry[2] = "rahul";
// arry[3] = "khan";
// arry[4] = "gjdfxg";

// // console.log(arry[2]);
// // console.log(arry[3]);

//         //multidimentional array 
// var arr2=[
//     ["hamran",20,"bca2"],
//     ["mofique",19,"bsc"]
// ]
// // console.log(arr2[0][1]);


// console.log(arry);
// arry.pop();
// console.log(arry);

// var mirror= [0, 2, 4, 6];
// var mirror2 = mirror;
// mirror2.pop();
// mirror2.reverse();

// mirror.concat(mirror2)

// // console.log(mirror2);
// console.log(mirror);

var array= [12,3,4,5,5];
