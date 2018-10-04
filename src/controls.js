const Gpio = require('./onoff-fix').Gpio;

const led = new Gpio(17, 'out');

/**
 * Turns on and off the LED control.
 * @param {boolean} value
 * Set to 'true' to turn on the LED or 'false' to turn it off.
 */
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
