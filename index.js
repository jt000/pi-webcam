const piPlay = require('./src/pi-play');

piPlay.runAsync().then(
    () => {},
    (err) => {
        console.log(`ERROR: ${err}`);
    }
);

