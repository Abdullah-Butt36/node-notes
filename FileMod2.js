const fs = require('fs');

// sync mood
const a = fs.readFileSync('file3.txt');
console.log(a.toString());
console.log("file read successfully");

// async mood
fs.readFile('file.txt' , 'utf8' , (err , data) => {
    if(err) console.log("You are not able to read file");
    else console.log("Mission Successful" , data)
});

console.log("Async mood is active");