const EventEmitter = require('events');
var eventEmitter = new EventEmitter();
eventEmitter.on('Subscribe',(msg)=>
{
    console.log(msg);
});
eventEmitter.emit("Subscribe",'college wallah');
eventEmitter.removeListener('subscribe','college wallah');
eventEmitter.emit("Subscribe",'college wallah');//Error