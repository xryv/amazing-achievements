import assert from "assert";
import { add } from "./index.js";

// Test 1
assert.strictEqual(add(2, 2), 4, "add(2,2) should be 4");

// Test 2 (new)
assert.strictEqual(add(0, 0), 0, "add(0,0) should be 0");

console.log("All tests passed.");
