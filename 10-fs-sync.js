const { readFileSync, writeFileSync } = require('fs')
console.log('start');
const first = readFileSync("./content/first.txt", 'utf8')
const second = readFileSync("./content/second.txt", 'utf8')
//console.log(fist, second);
writeFileSync("./content/result-syn.txt", `Here is the result: ${first}, ${second}`, {flag: 'a'}) // flag: "a" append the file again that is rewrite it

//sync is a blocking code
console.log('done with this task');
console.log('starting the next task');