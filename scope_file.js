let fileScope = "Can be accessed anywhere in the file";

function doSomething() {
  let localScope = "Can only be accessed inside this function";
  console.log(fileScope);
  fileScope = "Can be accessed in the function too!";
}

doSomething();

console.log(fileScope);

//
// This will result in an error because the variable does not exist
// outside the function.
//
// console.log(localScope);
//
localScope = "Try and change me here";
console.log(localScope);
