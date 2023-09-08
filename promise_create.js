function getRandom(max) {
    return Math.floor(Math.random() * max);
}
let x=getRandom(3);
console.log(x);

function createPromise() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let x = getRandom(10);
            if (x % 2 == 0) {
                res(x);
            } else {
                rej(x);
            }
        }, 10000)

    })
};