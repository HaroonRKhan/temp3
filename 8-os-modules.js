const os = require('os')// it is a builtin function for operting system

// use for info about user

const user = os.userInfo();
console.log(user);

// the system usetime (uptime)
console.log(`the system uptime is: ${os.uptime} in seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs);