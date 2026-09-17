import { createReadStream } from "fs";
import http from "http";

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.setHeader("content-type", "text/html");
        res.statusCode = 200;
        const Stream = createReadStream("./pages/airtag.html", {
            encoding: "utf-8"
        });

        Stream.pipe(res);
    }

    else if(req.url === "/mobile"){
            res.writeHead(200,{"content-type": "text/json"});

        const Stream = createReadStream("./data/products.json", {
            encoding: "utf-8",
        }); 

        Stream.pipe(res);
    
    } 
        else if(req.url === '/manual'){
            res.writeHead(200,{"content-type": "text/plain"});
        const Stream = createReadStream("./data/chatgpt.txt", {
            encoding: "utf-8",
        });
        Stream.pipe(res);
    }

    else{
        res.statusCode = 404 ;
        res.end("not found");
    
    }
});

server.listen(3333, () => {
    console.log("prg9 server is running...");
});