function foo() {
  console.log(this.a);
  console.log(this.sum(this.a, 1));
}
var a = 2;
var sum = function (a, b) {
  return a + b;
}
foo(); // 2

//in strict mode global object is not eligible for the default binding
