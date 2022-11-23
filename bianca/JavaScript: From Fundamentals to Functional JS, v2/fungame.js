let number = Math.random() * 100;
number = Number.parseInt(number)

let inp ;
let score = 100;

while (inp != number){
    score = score -1 ;
    inp = prompt("enter the number : ");
    if(inp == number){
        console.log("congratulation you guess the write number.")
        console.log(`you guess the actual number in ${100 - score} in chances.`)
    }
    else if(inp > number && inp < 100){
        console.log("your answer is bigger than actual number");
    }

    else if(inp < number && inp > 0){
        console.log("your answer is smaller than actual number");
    }
    else {
        console.log("guess number between 1 to 100");
    }
}