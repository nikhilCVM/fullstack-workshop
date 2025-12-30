let original = {
  name: 'John',
  address: {
    city: 'New York',
    zip: '10001'
  },
  hobbies: ['reading', 'gaming']
};

// Deep clone using arrow function
const deepClone = (obj) => {
  return {
    ...obj,
    address: { ...obj.address }, // clone nested object
    hobbies: obj.hobbies.map(hobby => `${hobby}`) // clone array using map
  };
};

let cloned = deepClone(original);

// Mutations on cloned object
cloned.address.city = 'Boston';
cloned.hobbies.push('swimming');

// Results (original remains unchanged)
console.log(`City in original object: ${original.address.city}`); 
console.log(`Hobbies in original object: ${JSON.stringify(original.hobbies)}`);
