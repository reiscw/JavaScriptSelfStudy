let pounds = Number(prompt("Enter weight in pounds: "));
let inches = Number(prompt("Enter height in inches: "));

let kilograms = pounds / 2.2046;
let centimeters = inches * 2.54;

console.log("Weight in kilograms: " + kilograms);
console.log("Height in centimeters: " + centimeters);

let meters = centimeters / 100;
let bmi = kilograms / meters ** 2;

console.log("BMI: " + bmi);
