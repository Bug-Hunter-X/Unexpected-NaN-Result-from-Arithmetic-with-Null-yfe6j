function foo(a) {
  return a + 1;
}

function bar(b) {
  return foo(b) * 2;
}

console.log(bar(null)); // This will not throw an error, but will return NaN