//modules (we split our code in different files to avoid crash)
// commonjs - every file is module (by default)


const names = require('./4-names')
const sayHi = require('./5-utils')
//console.log(names);
const data = require('./6-alternative-flavour')
console.log(data);
require('./7-mind-gernade')

//sayHi("susan")
//sayHi(names.john)
//sayHi(names.peter)