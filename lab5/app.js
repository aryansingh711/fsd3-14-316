import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Hello Express!</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>We are a team of developers!</h1>");
});

app.post('/login', (req, res) => {
    res.send("<h3>Login successful!</h3>");
});

app.put('/update', (req, res) => {
    res.send({msg: "Update successful!"});
});

app.delete('/delete', (req, res) => {
    res.send({msg: "Delete successful!"});
});

app.use((req, res) => {
    res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(3000, () => console.log("Server is running on http://localhost:3000"));