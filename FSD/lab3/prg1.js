import http from 'http'

const server = http.createserver((req,res)=>{
    console.log('welcome to node JS');
})

const PORT = 4444

server.listen(PORT,()=>console.log("server is running..."));

