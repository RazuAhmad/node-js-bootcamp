const http =require('http');

const server =http.createServer((req,res)=>{

    if(req.url==='/'){
        res.write("Hellow programmers...");
    res.write("<html><head><title>Form</title></head></html>");
    
    res.end()
    }

    else if(req.url ==='/aboutUs'){
        res.write("Hey programmers, you are now in ABOUT US section");
        res.end();
    }
    else{
        res.write("Not Found::::::: 404!!");
        res.end()
    }
});

server.listen(3000);



console.log('listening on port 3000')

// const file=require('fs');

// const ourReadStream =file.createReadStream(`${__dirname}/bigdata.txt`);

// ourReadStream.on('data', (data)=>{
//     console.log(data.toString());
// })

// console.log('Hellow shobai ke...');