//npm - global command , comes with node
//npm -- version
//local dependencies - use only in this project
//npm i <pakagename>
//global dependencies - use in any project
//npm install - g <pakage name> sudo npm install - g for mac
//package.json - stores important info about pakages /project use
//manul approch (create pakage.json in the root, create properties ect)
//npm init (create step by step enter to skip)
//npm init - y (every thing default)
const _ = require("lodash")
const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);