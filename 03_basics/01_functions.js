//block of code in pakage

function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
    }
    
    //sayMyName()
    
    // function addTwonumbers(number1, number2){
    //     console.log(number1 + number2); // => parameters
    // }
    
    function addTwonumbers(number1, number2){
         
        //  let result = number1 + number2
        //  return result
         return number1 + number2
    }   
    
    const result = addTwonumbers(3, 4) //(3, 4) => arguments
    //addTwonumbers(3, "a")
    //addTwonumbers(3, null)
    
    //console.log("Result: ", result);
    
    
    function loginUserMessage(username = "sam"){
        if(!username){
             console.log("please enter a username");
             return
        }
        return `${username} just logged in`
    }
    
    console.log(loginUserMessage("hitesh"));
    