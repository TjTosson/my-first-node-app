const fs = require('fs')

console.log(fs.readFileSync(`${process.cwd()}/package.json`).toString());