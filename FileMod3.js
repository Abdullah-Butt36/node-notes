const fs = require('fs');


// read directory with sync method
const files = fs.readdirSync('./');
console.log(files);


// read directory with async

fs.readdir('$' , (err , files) => {
    if(err){
        console.log("Sorry You have Error");      
    }
    else console.log("File directory displays successfully" , files)
});