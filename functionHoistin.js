//  function is hoisted slightly different from variable

// it can be accessed even before function defination

square(5);
function square(x) {
    console.log(x * x);
}