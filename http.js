const http =require('http');

const server =http.createServer((req,res)=>{

    if(req.url==='/'){
        res.write("Hellow programmers...");
    res.write("How are you? Hope you are doing well.......");
    res.write("Onk din theke kothao ghurte jai na, ore vai re vai..");
    res.write("shuvo nobo.... borsho... humm")
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

// server.on('connection',(socket)=>{
//     console.log("we are getting"
//     );
// })

console.log('listening on port 3000')