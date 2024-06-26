// const fs = require('fs');
// fs.open('nodejs_architecture.txt', function (err, fd) {
//     if (err) {
//         console.log("Open Unsuccessfull");
//     }
//     else {
//         console.log("Open Successfull");
//     }
// })

// //Ans2-Write
// let data = "Node js is a platform that utilizes JAvaScript and is primarly employed for developing web application that are highly focused on input.output operations, including but not limited to caht application and mulitmedia streaing websites. The Platform is constructed using Google Chrome's vs JavaScript engine. A web application is a type of spftware that executes on a server and is display by a client's browser that obtains all the applications resoures over the internet."
// fs.writeFileSync('nodejs_architecture.txt', data)

// //Ans3-Read
// console.log(fs.readFileSync('nodejs_architecture.txt').toString());
// let newData="Advantages of nodejs";

// //Ans4-Append
// fs.appendFileSync('nodejs_architecture.txt',newData);
// console.log(fs.readFileSync('nodejs_architecture.txt').toString());


// //Ans5-Delete
// fs.unlink('nodejs_architecture.txt',()=>
// {console.log("File Deleted Successfully")});

// //Ans6
// const os = require('os');
// console.log("Operating System Name: ",os.type());
// console.log("Opreating System release: ",os.release());

//Ans7 do it morning
// const http = require("http");
// const server = http.createServer((req,res)=>
// {
//     if(req.url == '/')
//         {
//           res.write("<h1>I am happy To learn full stack web developmetn from pw skills</h1>");
//         }
//         res.end();
// });
// server.listen(5000);
// console.log("The HTTP server is running on port 5000");

//Ans8 - event
// const EventEmitter = require("events");
// var eventEmitter = new EventEmitter();
// eventEmitter.on('Subscribe', (msg) =>
// {
//     console.log("Thanks to subscribe to",msg);
// })
// eventEmitter.emit('Subscribe','collage wallah');

// //Ans9
// eventEmitter.removeListener('subscribe','college wallah');
// eventEmitter.emit("Subscribe",'college wallah');//Error

//Ans10
const EventEmitter = require("events");
var eventEmitter = new EventEmitter();
console.log("Default event listener",eventEmitter.getMaxListeners());
eventEmitter.setMaxListeners(5);
console.log("Updated event listener",eventEmitter.getMaxListeners());
