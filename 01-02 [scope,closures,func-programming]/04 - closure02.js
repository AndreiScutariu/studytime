
for (var i=1; i<=5; i++) {
  setTimeout( function timer(){
    console.log( i ); //0, 1, 2, 3, 4, 5
  }, i * 1000 );
}
