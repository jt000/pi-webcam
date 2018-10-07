const proxyquire = require('proxyquire').noCallThru();
const sinon = require('sinon');
const assert = require('chai').assert;

describe('pi-play', function() {
    let mockWebcam = null;
    let mockControls = null;
    let sut = null;

    beforeEach(function() {
        mockWebcam = {
            startCaptureAsync: sinon.stub(),
            stopCaptureAsync: sinon.stub(),
        };

        mockControls = {
            setLed: sinon.stub(),
        };

        sut = proxyquire('./pi-play', {
            './webcam': mockWebcam,
            './controls': mockControls,
        });
    });

    describe('runAsync', function() {
        it('does nothing', function() {
            assert(sut !== null);
        });
    });
});
