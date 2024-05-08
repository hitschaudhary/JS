// if statment

const isUserloggedIn = true;
if (isUserloggedIn) {


}

if(2 === '2'){
    //console.log("executed with types casting");
}
else if(2 == '2'){
   // console.log("executed with not types casting");
}
    
//<, >, <=, >=, ==(chack), !=, ===(chack type)

const scope = 200

if(scope > 100) {
    var power = "fly"
    //console.log(`user power: ${power}`);
}

//console.log(`user power: ${power}`);


// const balance = 1000
// if(balance < 500) {
//      console.log("less than");
// }else if(balance < 750) {
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

//if(balance > 500) console.log("test"); emplicite scope execute with only one line

 
const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}