//  function is hoisted slightly different from variable

// it can be accessed even before function defination

square(5);
function square(x) {
    console.log(x * x);
}


var y = 1;
function jadu() {
    console.log(y);  //->undefine because x is present inside the scope 
    var y = 2;
}
jadu();
