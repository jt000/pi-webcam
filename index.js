const webcam = require('./webcam');
const controls = require('./controls');

try {
    (async function() {
        let count = 10;

        controls.setLed(true);
        await webcam.startCaptureAsync();
        console.log('Starting webcam...');

        // TODO: Need a more precise timer
        const timer = setInterval(async () => {
            if (count-- > 0) {
                console.log('.');
            } else {
                console.log('...stopping webcam');
                await webcam.stopCaptureAsync();
                controls.setLed(false);

                clearInterval(timer);
            }
        }, 1000);
    })();
} catch (error) {
    console.log(`FATAL ERROR: ${error}`);
}
