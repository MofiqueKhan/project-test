            //hoisting

//hoisting refers to the process wherely interpreters appears to more the declaration to the top of the code before execution. (execute hone se pehle saaari declaration upar pratit hogi......)

teacher();

function teacher(){
	console.log("mamta arora");
}

            //hoisting with var,let & const

//declaration hoisting but initialization is not...output will be undefinded(with VAR)....but with LET and CONST hoisting is different.....

// hoisting with var....

console.log(a); // undefined

var a = 9;

console.log(a); // 9

console.log(b); // error..

let b = "hlw";

//same as const;