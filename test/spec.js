const objects = require('..');
const assert = require('assert')

// TEST RECT OBJECT
// Testing initialization
r = new objects.Rect(100, 150, 200, 250);
assert.strictEqual(r.getX(), 100);
assert.strictEqual(r.getY(), 150);
assert.strictEqual(r.getWidth(), 200);
assert.strictEqual(r.getHeight(), 250);
assert.strictEqual(r.getLeft(), 100);
assert.strictEqual(r.getRight(), 300);
assert.strictEqual(r.getTop(), 150);
assert.strictEqual(r.getBottom(), 400);
// Testing object updates to position
r.setPosition(200, 300);
assert.strictEqual(r.getX(), 200);
assert.strictEqual(r.getY(), 300);
assert.strictEqual(r.getWidth(), 200);
assert.strictEqual(r.getHeight(), 250);
assert.strictEqual(r.getLeft(), 200);
assert.strictEqual(r.getRight(), 400);
assert.strictEqual(r.getTop(), 300);
assert.strictEqual(r.getBottom(), 550);
// Testing object updates to size
r.setSize(300, 400);
assert.strictEqual(r.getWidth(), 300);
assert.strictEqual(r.getHeight(), 400);
assert.strictEqual(r.getLeft(), 200);
assert.strictEqual(r.getRight(), 500);
assert.strictEqual(r.getTop(), 300);
assert.strictEqual(r.getBottom(), 700);

console.log(`\u001B[32m✓\u001B[39m Tests passed`);