const { createPassword } = require("simple-password-create");

console.log(createPassword());
console.log(createPassword(20, ["digits", "latinLower"]));
console.log(createPassword(5, ["latinLower", "other"]));