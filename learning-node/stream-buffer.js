const http = require("http");
const fs = require("fs");
const server = http.createServer();

server.on("request", (req, res) => {
  console.log(req.url, req.method);
  if (req.url == "/read-file" && req.method == "GET") {
    const readableStream = fs.createReadStream(
      process.cwd() + "/text/read.txt"
    );
    readableStream.on("data", (buffer) => {
      res.statusCode = 200;
      res.write(buffer);
    });
    readableStream.on("end", () => {
      res.statusCode = 200;
      res.end("The Streaming is Over!");
    });
    readableStream.on("error", (error) => {
      res.statusCode = 500;
      res.end("Something went wrong..");
    });
  }
});

server.listen(5001, () => {
  console.log(`Server listening on port 5001`);
});
