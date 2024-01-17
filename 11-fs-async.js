const { readFile, writeFile, read } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }

  const first = result;
  // console.log(first);
  readFile("./content/second.txt", "utf-8", (error, result) => {
    if (error) {
      console.log(error);
      return;
    }

    const second = result;
    // console.log(second);
    writeFile("./content/result-async.txt", "Hello World", (error, result) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log("done with this task");
    });
  });
});

console.log("starting next task");
