const fs = require('fs');
fs.open('nodejs_architecture.txt', function (err, fd) {
    if (err) {
        console.log("Open Unsuccessfull");
    }
    else {
        console.log("Open Successfull");
    }
})


let data = "Node js is a platform that utilizes JAvaScript and is primarly employed for developing web application that are highly focused on input.output operations, including but not limited to caht application and mulitmedia streaing websites. The Platform is constructed using Google Chrome's vs JavaScript engine. A web application is a type of spftware that executes on a server and is display by a client's browser that obtains all the applications resoures over the internet."
fs.writeFileSync('nodejs_architecture.txt', data)