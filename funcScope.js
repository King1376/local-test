var a = 111;
function test(
  a,
  b = function () {
    a = 333;
    console.log(a);
  }
) {
  console.log(a);
  var a = 222;
  b();
  console.log(a);
}

function test1(n = 1) {
  console.log(n);
  var n = 2;
  console.log(n);
  while (n) {
    n--;
  }
  console.log(n);
}

function test3(
  a = 444,
  b = function () {
    a = 333;
    console.log(a);
  }
) {
  console.log(a); // 444 333 222 111
  var a = 222;
  b();
  console.log(a);
}

function test4(
    c,
    b = function () {
      a = 333;
      console.log(a);
    }
  ) {
    console.log(a); // undefined 333 222 333
    var a = 222;
    b();
    console.log(a);
  }

  function test5(
    a,
    b = function () {
      a = 333;
      console.log(a);
    }
  ) {
    console.log(a); // undefined 333 333 111
    // var a = 222;
    b();
    console.log(a);
  }

  function bFun() {
    a = 333;
    console.log(a);
  }
  function test6(
    a,
    b = bFun
  ) {
    console.log(a); // undefined 333 222 333
    var a = 222;
    b();
    console.log(a);
  }
test6();
console.log(a);


console.log(flag, 'outside');
