const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}  

const event = new MyEmitter();

event.on('waterFall' , () => {
    console.log("Water is Falling regularly");
    setTimeout(() => {
        console.log("After 3 seconds water stops");
    },3000)
})

event.emit('waterFall')