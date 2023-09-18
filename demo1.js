function sum(a, b, fn) {
    console.log(a + b);
     var x="hii"
    fn();
}

sum(2, 3, function () {
   
     console.log("done",x);
})