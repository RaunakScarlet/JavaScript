function getRandom(max) {
    return Math.floor(Math.random() * max);
}


function createPromise() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let x = getRandom(10);
            if (x % 2 == 0) {
                //return x;
                res(x);
                console.log('successful');
                
                console.log("succes again");
                
            } else {
                rej(x);
            }
        }, 2000)

    })
};
let y = createPromise();
console.log(y);
console.log("hhiii");
