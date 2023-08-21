const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//print odd number

arr.map((item) => {
     if (item % 2 == 1) {
       return console.log(item);
    }
})

//print even number

function findEven(item) {
     if (item % 2 == 0) {
       return console.log(item);
    }
}

arr.map(findEven);