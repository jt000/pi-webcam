const proxyquire = require('proxyquire').noCallThru();
const sinon = require('sinon');
const assert = require('chai').assert;

describe('controls', function() {
    let mockGpio = null;
    let mockGpioObj = null;
    let sut = null;

    beforeEach(function() {
        mockGpioObj = {writeSync: sinon.spy()};
        mockGpio = sinon.stub()
            .withArgs(17, 'out')
            .returns(mockGpioObj);

        sut = proxyquire('./controls', {
            './onoff-fix': {Gpio: mockGpio},
        });
    });

    describe('setLed', function() {
        it('"true" writes 1', function() {
            sut.setLed(true);

            assert(mockGpioObj.writeSync.calledOnceWith(1));
        });

        it('"false" writes 0', function() {
            sut.setLed(true);

            assert(mockGpioObj.writeSync.calledOnceWith(1));
        });
    });
});
