function foo(a) {
  // Explicit null check
  if (a === null || a === undefined) {
    return 0; // Or handle it appropriately
  }
  return a + 1;
}

function bar(b) {
  // Using nullish coalescing operator
  const value = b ?? 0; 
  return foo(value) * 2;
}

console.log(bar(null)); // Returns 2
console.log(bar(5)); // Returns 12