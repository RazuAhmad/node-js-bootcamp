const EventEmitter = require('events');

class School extends EventEmitter{

     startPeriod(){
        console.log('Class started');
    
    
        // raise event when bell rings
        setTimeout(() => {
            this.emit('screaming', {
                name:"kutub udddin shah",
                period:"second period",
                advice:"you cannot defeat the undefeated enemy!"
            })
        }, 5000);
    }
}

module.exports =School;