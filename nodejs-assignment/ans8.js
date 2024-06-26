const EventEmitter = require("events");
var eventEmitter = new EventEmitter();
eventEmitter.on('Subscribe', (msg) =>
{
    console.log("Thanks to subscribe to",msg);
})
eventEmitter.emit('Subscribe','collage wallah');