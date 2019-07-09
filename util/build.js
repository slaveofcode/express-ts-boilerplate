const fs = require('fs-extra');
const childProcess = require('child_process');


// remove current build, and create new one
fs.removeSync('./build/');
fs.copySync('./src/public', './build/public');

// transpile the typescript files
childProcess.exec('tsc --build tsconfig.prod.json');