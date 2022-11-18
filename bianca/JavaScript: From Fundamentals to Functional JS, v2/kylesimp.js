let x = "5"
x = x + 1 ;

console.log(x);

let y = "5"
y++
console.log(y);

let chkze = 0;

console.log(Object.is(chkze,0));
console.log(Object.is(chkze,-0));

/* object.is() is like quadrable zero, it is never lies in every kind of situation, takes two parameter...... */

var numstudent = 16;

console.log(`there are ${[numstudent].join("")} student`);

var numstudents = 19;

console.log("there are" +" "+ numstudents + " " +" student");

function addstud(numstud){
    return Number(numstud) + 1;
}
console.log(addstud(5));

function kick(numstudent){
    return numstudent - 1;
}

