// Ask the user for:
// - A name
// - An adjective
// - A noun
// - A verb
// - A place

// Create a story using their inputs
// Example output:
// "One day, John found a shiny unicorn that could dance in the kitchen."

let name = prompt(`enter your name`);
let adjective = prompt(`enter a adjective`);
let noun = prompt(`enter a noun`);
let verb = prompt(`enter a verb`);
let place = prompt(`enter a place`);

const story = `One day, ${name} found a ${adjective} ${noun} that could ${verb} in the ${place}.`;
console.log(story);

