//singleton = mske by consrtuction
//object create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Chaudhary",
    [mySym]: "myKey1",
    age: 18,
    location: "Gujrat",
    email: "hitesh@google.com",
    isloggedIn: false
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log( JsUser[mySym]);


JsUser.email = "hitesh@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
//econsole.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());