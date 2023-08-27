//   iife -> immediately invoked function expression
 
function square(x) {
    console.log(x*x);
}
square(2);


// using iife 
// close function defination in bracket and call it with parameter


(function square(x) {
    console.log(x * x);
})(3);