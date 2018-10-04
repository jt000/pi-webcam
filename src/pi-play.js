const webcam = require('./webcam');
const controls = require('./controls');

async function runAsync() {
    let count = 10;

    controls.setLed(true);
    await webcam.startCaptureAsync();
    console.log('Starting webcam...');

    // TODO: Need a more precise timer
    const timer = setInterval(async () => {
        if (count-- > 0) {
            console.log('.');
        } else {
            clearInterval(timer);

            console.log('...stopping webcam');
            await webcam.stopCaptureAsync();
            controls.setLed(false);
        }
    }, 1000);
}

module.exports = {
    runAsync: runAsync,
};
