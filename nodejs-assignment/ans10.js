const EventEmitter = require("events");
var eventEmitter = new EventEmitter();
console.log("Default event listener",eventEmitter.getMaxListeners());
eventEmitter.setMaxListeners(5);
console.log("Updated event listener",eventEmitter.getMaxListeners());