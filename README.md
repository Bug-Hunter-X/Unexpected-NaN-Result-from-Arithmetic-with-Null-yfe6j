# Unexpected NaN Result from Arithmetic with Null

This example demonstrates a common, yet subtle, error in JavaScript related to loose typing and arithmetic operations involving `null` or `undefined` values.

The `foo` function adds 1 to its input. The `bar` function then calls `foo` and multiplies the result by 2.  When `bar` is called with `null`, the addition operation in `foo` does not throw an error, but instead returns `NaN` (Not a Number). This `NaN` is then multiplied by 2, resulting in `NaN`.  The unexpected `NaN` can be difficult to debug, especially in more complex code.

The provided solution shows a safer approach using explicit type checking or using the nullish coalescing operator to handle potential null or undefined values more robustly.
