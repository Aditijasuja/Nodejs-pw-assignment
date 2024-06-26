const fs = require('fs');
fs.open('nodejs_architecture.txt', function (err, fd) {
    if (err) {
        console.log("Open Unsuccessfull");
    }
    else {
        console.log("Open Successfull");
    }
})

fs.unlink('nodejs_architecture.txt',()=>
    {console.log("File Deleted Successfully")});