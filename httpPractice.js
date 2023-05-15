const httpServer=require('http');
const server =httpServer.createServer((req,res)=>{
    if(req.url==='/home'){
        res.write('Hellow world');
    }
    
   
    
    if(req.url==='/erdogan'){
        res.write("Ore juger sultan,, erdoganize");
        res.end()
    }

    else  {
        res.write(` Not found anything::::::`)
    }

    res.end()
})

server.listen(5000);



console.log("Server listening on 5000");