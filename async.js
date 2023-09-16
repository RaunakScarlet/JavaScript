async function fun() {
    console.log('entered');
    let x = await 20;
    console.log("exiting");
    return x;
}

console.log('start');
let val = fun().then(function f(value) {
    console.log('value is', value);
})
console.log('end');