function deadzone() {
    console.log(a);///  undefined
    console.log(b); // //  Cannot access 'b' before initialization
    console.log(c);
    var a = 10; 
    let b = 20;  
    const c = 30;
}
deadzone();
/**
 * a,b,c are hoisted in temporal but not in global ex. contect but in another context
 * temporal deadzone are state in whivh variable are in scope but not yet been declared
 */