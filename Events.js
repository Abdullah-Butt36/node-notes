const Event = require('events'); // class

class Events extends Event{}

const myEvent = new Events(); // object

// register the Function
myEvent.on('event' , () => {
    console.log("Event called successfully")
})

// Raise the Function
myEvent.emit('event')