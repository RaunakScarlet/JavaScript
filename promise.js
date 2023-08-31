new Promise(function (resolve, reject) {
    // call async task
    setTimeout(() => {
        console.log(`task assigned`);
        resolve();
    }, 2000);
    
}).then(
    function () {
        console.log(`task ccompleted`);
    }
);