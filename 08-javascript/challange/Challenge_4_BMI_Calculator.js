// Ask for weight in kg
// Ask for height in meters
// Calculate BMI: weight / (height * height)
// Display BMI and category:
// - Underweight: < 18.5
// - Normal: 18.5 - 24.9
// - Overweight: 25 - 29.9
// - Obese: >= 30

let weight = prompt(`whats your weight in kgs`);
let height = prompt(`whats your height in meters`);

let bmi = weight / (height * height);

console.log(bmi);
if(bmi<18){
    console.log("underweight");
}
else if(18.5<bmi<24.9){
    console.log("Normal");
}
else if(25<bmi<29.9){
    console.log("overWeightt");
}
else if(bmi>=30){
    console.log("obese");
}

