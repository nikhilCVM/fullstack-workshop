// 1. Create a person object with name, age, and city properties
let person = { name: 'nikhil', age: 12, city: "hyderabad" };

// 2. Add an email property (using arrow function)
const addProperty = (obj, key, value) => ({ ...obj, [key]: value });
person = addProperty(person, "email", "manikantanikhil5@gmail.com");

// 3. Update the age to 31 (using arrow function)
const updateAge = obj => ({ ...obj, age: 31 });
person = updateAge(person);

// 4. Delete the city property (using arrow + rest)
const removeKey = ({ city, ...rest }) => rest;
person = removeKey(person);

// 5. Check if 'email' exists
const hasKey = (obj, key) => Object.keys(obj).filter(k => k === key).length > 0;
const isEmailExists = hasKey(person, "email");

// 6. Get all keys
const keyobj = Object.keys(person);

// 7. Get all values
const val = Object.values(person);

// 8. Display results using template literals + map
const formatOutput = arr => arr.map(item => `→ ${item}`).join('\n');
console.log(`
Person Object Updated:
${JSON.stringify(person)}

Keys:
${formatOutput(keyobj)}

Values:
${formatOutput(val)}

Email exists?: ${isEmailExists ? `✔ Yes` : `✖ No`}
`);

// 9. Get total length of all string values using reduce
const totalStringLength = val
  .filter(v => typeof v === "string")
  .reduce((sum, str) => sum + str.length, 0);

console.log(`Total length of all string values: ${totalStringLength}`);
