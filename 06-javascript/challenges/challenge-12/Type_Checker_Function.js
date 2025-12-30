function getType(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  return typeof value;
}

// Test values stored in an array
const tests = [null, [1, 2, 3], { a: 1 }, () => {}, 42, "hello"];

// Run tests using map + print using template literals
tests.map(v => console.log(`Value: ${JSON.stringify(v)}, Type: ${getType(v)}`));
