const accountId = 142345
let accountEmail = "hiteshchaudhary@google.com"
var accountPassword = "123456"
accountcity = "Gandhinagar"
let accountname;

//  accountId = 3 //not allowed
 accountEmail = "hits@google.com"
 accountPassword = "54321"
 accountcity = "ahemdabad"


 console.log("accountId");

 /*
prefer not to use var
beacause of issue in block scope and functional scope
 */
 console.table([accountId, accountEmail, accountPassword, accountcity, accountname])