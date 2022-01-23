let num1 = parseInt(prompt('Enter your One Number'));
let num2 = parseInt(prompt('Enter your Two Number'));
let num3 = parseInt(prompt('Enter your Three Number'));
let result = num1 > num2 && num3 < num1 ? num1 : num2 > num1 && num3 < num2 ? num2 : num3;
console.log(result);