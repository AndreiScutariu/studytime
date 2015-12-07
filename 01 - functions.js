"use strict";

//function declaration

bar("before");
function bar(m) {
  console.log(m);
  console.log(bar);
}
bar("after");


//anonymous function expression
console.log(uBar);
console.log(bar);
bar("before");
var bar = function(m) {
  console.log(m);
  console.log(bar);
}
bar("after");



//named function expression
//foo("before");
var foo = function bar(m) {
  console.log(m);
  console.log(bar);
}
foo("after");
