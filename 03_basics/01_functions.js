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
    
    //console.log(loginUserMessage("hitesh"));
    
    /*          */

    function calculateCartPrice(val1, val2, ...num1) { // ... => rest opratore
        return num1
    }

    //console.log(calculateCartPrice(200, 300, 400, 2000, 5000));

    const user = {
        username: "hitesh",
        price: 199
    }

    function handleObject(anyobject){
        console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    }

    //handleObject(user)
    handleObject({
        username: "sam",
        price: 399
    })
    

    const myNewArray = [100, 200, 300, 500, 900]
    
    function returnSecondValue(getArray){
        return getArray[1]
    }

   // console.log(returnSecondValue(myNewArray));
   console.log(returnSecondValue([100, 200, 300, 500, 900]));






