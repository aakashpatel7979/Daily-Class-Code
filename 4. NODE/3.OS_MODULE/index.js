const os = require("os");

console.log(" my os is 32bit or 64bit?    " + os.arch());
console.log(" Free Memory:  " + os.freemem() / 1024 / 1024 / 1024);
console.log(" Total Memory:  " + os.totalmem() / 1024 / 1024 / 1024);
console.log(" Host Name:  " + os.hostname());
console.log(" Plateform:  " + os.platform());
console.log(" Type:  " + os.type());
console.log(" Home Directory:  " + os.homedir());
console.log(" Temp Directory:  " + os.tmpdir());
console.log(" endianness:  " + os.endianness());
console.log(" load avg:  " + os.loadavg());
console.log(" Release Date:  " + os.release());
console.log(" Uptime:  " + os.uptime());
// console.log(" CPUs:  " + os.cpus());
// console.log(" NetworkInterface:  " + os.networkInterfaces());
const cpus = os.cpus();
console.log(JSON.stringify(cpus));
const ni = os.networkInterfaces();
console.log(JSON.stringify(ni));
