// "use strict";

//eval
function foo(str, a) {
   eval( str );
   console.log( a, b );
}
var b = 2;
foo( "var b = 3;", 1 );

function foo(obj) {
  with (obj) {
    a = 2;
  }
}

//with
var o1 = {
   a: 3
};

var o2 = {
   b: 3
};

foo( o1 );
console.log( o1.a );

foo( o2 );
console.log( o2.a );
