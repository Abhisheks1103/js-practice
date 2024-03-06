const accountID=14453
let accounEmail= "admin@gmail.com"
var accountPaasword= 1234
accountCity= "Jamshedpur"

// accountID=2345 not exist because called by constant(const) keyword and not allowed.


accounEmail="abc@abc.in"
accountPaasword="234556"
accountCity= "jamshedpur"

console.log(accountID);
console.table([accounEmail,accountPaasword,accountCity])
/*
prefer not to use var
because in issue in block scope and functional scope
*/