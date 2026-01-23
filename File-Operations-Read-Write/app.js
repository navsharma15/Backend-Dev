const fs = require("fs");

fs.readFile("AssignmentI.js", "utf8", (err, data) => {
  let words = data.split(" ");
  fs.writeFile("AssignmentO.js", words.length.toString(), () => {
    console.log("Done");
  });
});
