const Gpio = require('onoff').Gpio;
const webcam = require('./webcam');

const led = new Gpio(17, 'out');

let count = 10;
let set = false;

setLed(led, false);

const timer = setInterval(() => {
  if (count-- > 0) {
    setLed(led, set = !set);
    takePicture();
  } else {
    setLed(led, false);
    led.unexport();
    clearInterval(timer);
  }
}, 500);

function takePicture() {
  webcam.capture( 'my_picture', {}, function( err, data ) {
    if ( !err ) {
      console.log( 'Image created!' );
    } else {
      console.log(err);
    }
  });
}

function setLed(led, value) {
  if (value) {
    console.log('LED ON');
    led.writeSync(1);
  } else {
    console.log('LED OFF');
    led.writeSync(0);
  }
}
