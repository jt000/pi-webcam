const Gpio = require('onoff').Gpio;
const webcam = require('./webcam');

(async function() {
    const led = new Gpio(17, 'out');
    let count = 10;

    setLed(led, true);
    await webcam.startCaptureAsync();
    console.log('Starting webcam...');

    const timer = setInterval(async () => {
        if (count-- > 0) {
            console.log('.');
        } else {
            console.log('...stopping webcam');
            await webcam.stopCaptureAsync();
            setLed(led, false);

            clearInterval(timer);
        }
    }, 1000);

    function setLed(led, value) {
        if (value) {
            console.log('LED ON');
            led.writeSync(1);
        } else {
            console.log('LED OFF');
            led.writeSync(0);
        }
    }
})();
