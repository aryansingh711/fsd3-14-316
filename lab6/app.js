import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello from express </h1>");
})

app.listen(3333, () => {
    console.log("server is running at 3333");
});