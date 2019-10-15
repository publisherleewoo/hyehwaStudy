var x = 'XX';
var z = 'ZZ';
function foo () {
  var y = 'YY';
  console.log(x)
  console.log(z)
  function bar () {
    var y = 'y';
   z = 'z';
    console.log(y);
  }
  bar();
  
}
foo();