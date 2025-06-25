const accountId = 13132;
let accountEmail = "atharva.pimple@gmail.com";
var accountPassword = "1234abcd";
accountCity = "Pune";

// accountId = 12345; // Reassigning a variable declared with const will throw an error
accountEmail = "ap@ap.com";
accountPassword = "newpassword"; // Reassigning a variable declared with var is allowed
accountCity = "Mumbai"; // Reassigning a variable declared with let is allowed

console.table([accountId, accountEmail, accountPassword, accountCity]);