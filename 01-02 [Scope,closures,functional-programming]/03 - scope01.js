"use strict";

var foo = "foo setted from global";

function bar() {
  var foo = "foo setted from bar";

  function baz() {
    foo = "foo setted from baz";
    bam = "bam setted from baz";
  }

  baz();
}


bar();
console.log(foo);
console.log(bam);

/*
function foo(a) {
  var b = a * 2;
  function bar(c) {
    console.log(a, b, c);
  }
  bar(b * 3);
}

foo(2);
*/
