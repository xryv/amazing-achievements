// // Tiny module with one function to "fix"
// export function add(a, b) {
//   // Initial bug on purpose: returns wrong result to fail CI once
//   // Change `a + b - 1` ➜ `a + b` in your PR to make tests pass.
//   return a + b - 1;
// }

export function add(a, b) {
  return a + b; // ✅ fixed
}
