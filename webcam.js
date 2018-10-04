const NodeWebCam = require('node-webcam');

const options = {
    // Picture related
    width: 1920,
    height: 1080,

    quality: 100,

    // Delay to take shot
    delay: 0,

    // Save shots in memory
    saveShots: true,

    // [jpeg, png] support varies
    // Webcam.OutputTypes
    output: 'png',

    // Which camera to use
    // Use Webcam.list() for results
    // false for default device
    device: false,

    // [location, buffer, base64]
    // Webcam.CallbackReturnTypes
    callbackReturn: 'location',

    // Logging
    verbose: false,
};

const webcam = NodeWebCam.create(options);
let timer = null;
const pictures = [];

async function startCaptureAsync() {
    if (timer !== null) {
        return;
    }

    try {
        pictures.push(await captureAsync(`fotos/pic${pictures.length}`));

        timer = setInterval(async () => {
            pictures.push(await captureAsync(`fotos/pic${pictures.length}`));
        }, 1000);
    } catch (error) {
        console.log(error);
    }
}

function stopCaptureAsync() {
    return new Promise((resolve, reject) => {
        clearInterval(timer);
    });
}

function captureAsync(name, options) {
    return new Promise((resolve, reject) => {
        console.log(`capturing ${name}`);
        webcam.capture(name, function(err, out) {
            if (err) {
                reject(err);
            }

            resolve(out);
        });
    });
}

module.exports = {
    startCaptureAsync: startCaptureAsync,

    stopCaptureAsync: stopCaptureAsync,

    captureAsync: captureAsync,
};
