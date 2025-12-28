function getType(value) {
    // Return:ty
    // - "null" for null
    // - "array" for arrays
    // - "object" for plain objects
    // - "function" for functions
    // - The typeof result for primitives
    if(Array.isArray(value)){
        return "array";
    }
    else if(value===null){
        return "null"
    }
    return typeof(value);
}

// Tests
console.log(getType(null));        // "null"
console.log(getType([1, 2, 3]));   // "array"
console.log(getType({ a: 1 }));    // "object"
console.log(getType(() => {}));    // "function"
console.log(getType(42));          // "number"
console.log(getType("hello"));     // "string"