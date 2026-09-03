import http from 'http';

const server = http.createServer();
server.on('request', (req, res) => {
  res.write("Welcome to the HTTP server!");
  res.end();
});

server.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});