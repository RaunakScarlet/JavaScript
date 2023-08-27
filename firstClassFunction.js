// function  passed  as parameter to the another function

const f1 = function (x) {
    return x * x;
}

const f2 = function (f1) {
    console.log(f1(5));
}

f2(f1);