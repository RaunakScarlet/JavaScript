// function  passed  as parameter to the another function
//function  can be returned from another function
// function can be assigned to the variable


const f1 = function (x) {
    return x * x;
}

const f2 = function (f1) {
    console.log(f1(5));
}

f2(f1);