import express from 'express';
import { products } from "./data.js"; 

const app = express();

app.get("/",(req,res)=>{
    res.send("<h1>Hello from express</h1>");
});

app.get("/api/products",(req,res) => {
const { description, rating , ...rest } = products[0];
const filterProducts = products.map((product) => {
    const { description, rating, ...rest } = product;
     return rest;
});

res.json({ count: filterProducts.length,data: filterProducts });
});

app.get("/api/products/:id",(req,res) => {
    const {id} = req.parmas;
    const product =products.find((item) => item.id === id);

    if(!product) {
        res.status(400).json
    }
}
app.listen(3333,() => {
    console.log("Server is running at 3333");
});