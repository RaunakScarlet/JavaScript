
function print1to5(num) {
    if (num < 1) {
        console.log(num);
        setInterval(() => 
            print1to5(num + 1)
        , 1000);
    }
}

print1to5(0);