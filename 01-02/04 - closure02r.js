for (var i=1; i<=5; i++) {
  setTimeout( function timer(){
    console.log( i ); //0, 1, 2, 3, 4, 5
  }, i * 1000 );
}

//how to resolve this
for (var i=1; i<=5; i++) {
  (function(){
    var j = i;
    setTimeout( function timer(){
      console.log( j );
    }, j*1000 );
  })();
}

for (var i=1; i<=5; i++) {
  (function(j){
    setTimeout( function timer(){
    console.log( j );
    }, j*1000 );
  })( i );
}

//block scope, use let (ES6 >)
