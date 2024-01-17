const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("Welcome to the homepage");
  }
  if (request.url === "/about") {
    response.end("Here is our short history");
  }
  response.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page you are looking for :(</p>
  <a href="/">back home</a>
  `);
  //   console.log(request);
  //   response.write("Welcome to our homepage");
  //   response.end();
});

server.listen(5001);
