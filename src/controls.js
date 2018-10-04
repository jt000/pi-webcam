const Gpio = require('onoff').Gpio;
const led = new Gpio(17, 'out');

function setLed(value) {
    if (value) {
        console.log('LED ON');
        led.writeSync(1);
    } else {
        console.log('LED OFF');
        led.writeSync(0);
    }
}

module.exports = {
    setLed: setLed,
};
