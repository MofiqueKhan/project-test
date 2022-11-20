function teacher(){
    return console.log("teacher");
}

teacher();

// the function keyword can be define a function into a expression 

var myteacher = function myteacher(){
    return console.log("anotherteacher");
}

myteacher();


                // Arrow Function 

// shortcut of function

teacher = () => {
    return console.log("SAURABH KHATRI");
}

teacher();

    // one more shortcut :)


greet = () => "asslamualaikum ";

greet(); // output will not be displayed... bcoz only console.log can do this...

console.log(greet());


