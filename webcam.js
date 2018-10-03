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

module.exports = NodeWebCam.create(options);
