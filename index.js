const Gpio = require('gpio');
const led = new Gpio(17, 'out');

let count = 10;
let set = false;

setLed(led, false);

const timer = setInterval(() => {
  if (count-- > 0) {
    setLed(led, set = !set);
  } else {
    setLed(led, false);
    led.unexport();
    clearInterval(timer);
  }
}, 500);

function setLed(led, value) {
  if (value) {
    console.log('LED ON');
    led.writeSync(1);
  } else {
    console.log('LED OFF');
    led.writeSync(0);
  }
}
