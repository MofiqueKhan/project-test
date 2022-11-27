function ask(question){
    console.log(this.teacher,question);
}

function otherclass(){
    var mycontext = {
        teacher : "suzy"
    };
    
    ask.call(mycontext,"why?");
}

otherclass();
