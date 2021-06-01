const events = require('events');

// Create an eventEmitter object
const emitter = new events.EventEmitter();
emitter.on('oddEven',(num) => {
    if(num%2==0) {
        console.log("even number")
    }
    else {
        console.log("odd number")
    }
});
emitter.emit ('oddEven',3)
emitter.emit ('oddEven',4)
