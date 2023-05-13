// Path Module::::::::

let path =require('path');

let fileName=path.parse('E:/React Js Practice/7th semester practice session/HK BASED COMPANY/user-profile-server/index.js');
// console.log(fileName);


// OS Moudule::::
let os= require('node:os');
// console.log("platform", os.cpus());

// File System(FS) Modules:::
let fs=require('fs');

// Synchronous way::::
// const data = fs.readFileSync('myfile.txt');
// console.log(data);

// Asynchronous way:::
const data =fs.readFile('myfile.txt',(err,data)=>{
    // console.log(err);
    // console.log(data.toString()); 
});
// console.log("Asynchronous hobe eita");




// Event Module:::::::::::::

let events=require('events');
let eventEmitter =new events.EventEmitter();




eventEmitter.on('screamingOut', function(period){
    console.log(`A scream is detected ${period}`);
});

setTimeout(() => {
    eventEmitter.emit('screamingOut','we have to scream now, why? why? why? why?')
}, 2000);