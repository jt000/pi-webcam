const webcam = require('node-webcam').create();

const webcams = webcam.list();

console.log(`WEBCAMS:\r\n${JSON.stringify(webcams, null, 2)}`);
