function calcAge(a){
    return a * 365;
}

// console.log(calcAge(65), 23725);

// console.log(calcAge(0), 0);

// console.log(calcAge(20), 7300);

function squared(a){
    return a*a;
}
// console.log(squared(5), 25);

// console.log(squared(9), 81);

// console.log(squared(100), 10000);
function footballPoints(a,b,c){
    return a*3+b*1;
}
// console.log(footballPoints(3, 4, 2) , 13);

// console.log(footballPoints(5, 0, 2) , 15);

// console.log(footballPoints(0, 0, 1) , 0);

function calculator(a){
    return eval(a);
}
// console.log(calculator("23+4"), 27);

// console.log(calculator("45-15"), 30);

// console.log(calculator("13+2-5*2"), 5);

// console.log(calculator("49/7*2-3"), 11);

function divisible(a){
    if (a % 100 == 0){
        return true;
    }
    return false ; 
}
// console.log(divisible(1) , false);

// console.log(divisible(1000) , true);

// console.log(divisible(100) , true);