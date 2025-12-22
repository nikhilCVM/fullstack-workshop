// Create a 3-question quiz
// Keep track of the score
// Display final score at the end

// Example questions:
// 1. What is 5 + 3?
// 2. What is the capital of France?
// 3. What color is the sky?

let num = Number(prompt(`What is 5 + 3?`));
let capital = prompt(`What is the capital of France?`);
let colour = prompt(` What color is the sky?`);

var sum =0;
if(num===8){
    sum=sum+1;
}
if(capital==='france'){
    sum=sum+1;
}
if(colour==='blue'){
    sum=sum+1;
}
console.log(sum);