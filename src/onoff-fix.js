const os = require('os');

if (os.platform() === 'linux') {
    module.exports = require('onoff');
} else {
    module.exports = {};
}
