/* eslint-env node */
// Thi script starts a NodeJS server for when I am using a cloud IDE.  It is not included in any website pages
const http = require("http");
const fs = require("fs");
const server = http.createServer((request, response) => {
    let url = request.url === "/" ? "/index.html" : request.url
  response.writeHead(200);
  fs.readFile(`.${url}`, (err, data) => {
    if (err && err.code !== "ENOENT") {
      throw err;
    } else if (!data) {
        response.writeHead(404);
        response.end();
    } else {
      response.write(data);
      response.end();
    }
  });
});

server.listen(8080);
console.log("Server is listening");
