
function print1to5(num) {
    if (num < 5) {
        console.log(num);
        setTimeout(() => 
            print1to5(num + 1)
        , 1000);
    }
}

print1to5(0);