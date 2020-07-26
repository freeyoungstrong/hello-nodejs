const os = require('os');

console.log('Operating system: ', os.platform());
console.log('Architecture: ', os.arch());
console.log('Information about processors: ', os.cpus());
console.log('Free memory: ', os.freemem());
console.log('Total memory: ', os.totalmem());
console.log('Working time: ', os.uptime());
