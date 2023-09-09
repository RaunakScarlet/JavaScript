function fetchCustom(url, fn) {
    console.log("starting downloading file from ", url);
    setTimeout(function process() {
        console.log("downloaded completed");
        let response = 'dummy data';
        fn(response);
        console.log(" downloaded ending function");
    }, 4000);
}

function writeFile(data, fn) {
    console.log("starting writing data", data);
    setTimeout(function process() {
        console.log("writing completed");
        let fileName = 'output.txt';
        fn(fileName);
        console.log(" writing ending function");
    }, 1000);
}
function uploadFile(fileName,newUrl, fn) {
    console.log('upload satrted');
    setTimeout(function process() {
        console.log("file",fileName,'upload succesfuly on',newUrl);
        let uploadResponse = 'success';
        fn(uploadResponse);
        console.log(" upload ended");
    }, 1000);
}


var x = fetchCustom('www.google.com', function downloadCallback(response) {
    console.log('downloaded response is', response);
    writeFile(response, function writecallback(fileName) {
        console.log('new file written is', fileName);
        uploadFile(fileName, "www.datadrive.com", function uploadCallback(uploadResponse) {
            console.log('successfully uploaded', uploadResponse);
        })
    })
})

