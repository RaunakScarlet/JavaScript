const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//reduce take two parameters
//1 is callback function
//2 is intial value

// without using function
const sum = arr.reduce((a, b) => a + b, 0);
console.log(sum);




// with using function
function cal(obj,y) {
   return y += obj;
}

const total = arr.reduce(cal, 0);
console.log(total);