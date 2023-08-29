// parent variable can be accessed inside of child function but vice versa is not true

var name = 'raunak'
function local1() {
    console.log(name);///// ->  raunak is accesible
}
local1();

console.log(name2);
function local2() {
    var name2 = 'raunak'
    ///// ->  raunak is accesible
}
local2();