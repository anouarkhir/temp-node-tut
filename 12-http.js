const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to our home page");
  } else if (req.url === "/about") {
    res.write("this is some infos about us");
  } else {
    res.write(`<h1>Oops!</h1>
    <p>seems like this page doesnt exist sorry :/</p>
    <a href='/'>Home</a>`);
  }
  res.end();
});

server.listen(5000);
