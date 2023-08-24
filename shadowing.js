function shadow() {
     var a = "hello1"
    let b = "bye1"
    if (true) {
        let a = "hello2"   // legal shadowing
        var b = "bye2";   // illegal shadowing
        console.log(a);
        console.log(b);
    }
    console.log(a);
        console.log(b);
}

shadow();