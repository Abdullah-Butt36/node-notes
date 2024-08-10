const fs = require("fs");

// write file with sync mood
// new files are created which name we give it as an argument
const b = fs.writeFileSync("file1.txt", "Write file with sync mood");
console.log(b);
console.log("Write file Successfully");

// write file with async mood
// in async behave we need a call back function for run it
fs.writeFile("file2.txt", "file created with async mood", (err) => {
    setTimeout(() => {
        console.log("New file created")
    } , 3000)
});
console.log("async mood");