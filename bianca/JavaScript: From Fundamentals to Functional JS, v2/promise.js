

function fun(){
    return new Promise(function(reject , resolve){
        setTimeout(() => {
            let error = false
            if(!error){
                console.log("shi se daal bhyi.....!")
                resolve();
            }
            else{
                console.log("shabash beta....!")
                reject();
            }
        }, 2000);
    })
}
// fun().then(function(){
//     console.log("mofique");
// }).catch(function(){
//     console.log("moffu")
// })


function fun2(){
    return new Promise(function(haa ,naa){
        let gadbad = false
        if (!gadbad){
            console.log("gadbad he bhai.....!")
            naa();
        }
        else{
            console.log("bhut badiya....!")
            haa();
        }
    })
}
// fun2().then(function(){
//     console.log("mofique ke dvara")
// }).catch(function(){
//     console.log("by the moffu")
// })

                //edabit's question



// function promise1(){
//     return new Promise(function(resolve , reject){
//         let animal = "cat" 
//         if(animal === "dog"){
//             console.log("its a dog!")
//             resolve();
//         }
//         else{
//             console.log("its not a dog!")
//             reject();
//         }
//     })
// }
                
// promise1().then(function(){
//     console.log("Ignore this test","Do not change the animal variable." )})
// .catch(function(){
//     console.log("It's not a dog!")})


