function foo() {
  console.log(this.a);
  console.log(this.sum(this.a, 1));
}
var obj = {
  a: 2,
  sum: function(a, b) {
    return a + b;
  }
};
foo.call(obj);
