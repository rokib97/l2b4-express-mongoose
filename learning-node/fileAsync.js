const fs = require("fs");
// reading text async
fs.readFile("./text/read.txt", "utf-8", (err, data) => {
  if (err) {
    throw Error("Error Reading text");
  }
  console.log(data);
  //   writing text
  fs.writeFile("./text/writtenAsync.txt", data, "utf-8", (err) => {
    if (err) {
      throw Error("Error Writing data...");
    }
  });
});
