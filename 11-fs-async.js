//asyncrous approch using call back functions
const { readFile, writeFile } = require("fs")
console.log('starting');
readFile("./content/first.txt", 'utf8', (err, result) => {
    if(err) {
        console.log(err);
    return;
    }
    const first = result;
    readFile("./content/second.txt", 'utf8', (err, result) => {
        if(err) {
            console.log(err);
        return;
        }
        const second = result; 
        writeFile("./content/result-async.txt", `Here is the result: ${first}, 
        ${second}`, (err, result)=> {
            if(err){
                console.log(err);
                return
            }
            console.log('done with first one');
        })
    })
})
console.log('staring the new task');
//async is a non blocking code