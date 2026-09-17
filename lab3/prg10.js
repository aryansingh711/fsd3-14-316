import http from "http";

const server = http.createServer((req,res)=>{
    if(req.url === "/" && req.method === "GET"){
         res.end("<h1>Products details</h1>");
    }

    else if (req.url === "/products" && req.method === "GET"){
        res.writeHead(200,{"content-type": "text/json"});

        const stream = createreadStream("./data/products.json",{
            encoding: "utf-8",
        });
        stream.pipe(res);

    }
    else{
        res.statusCode =404;
        res.end("not found");
    }
});

server.listen(3334,()=> console.log("prg10 is running at port 3334..."));