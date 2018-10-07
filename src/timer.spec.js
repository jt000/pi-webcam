const proxyquire = require('proxyquire').noCallThru();
const sinon = require('sinon');
const expect = require('chai').expect;
const moment = require('moment');

describe('timer', function() {
    let mockMoment = null;
    // let mockTimeout = null;
    let sut = null;
    let sandbox = null;

    beforeEach(function() {
        sandbox = sinon.createSandbox();
        mockMoment = sandbox.stub();
        // mockTimeout = sandbox.stub(global, 'setTimeout');

        sut = proxyquire('./timer', {
            'moment': mockMoment,
        });
    });

    afterEach(function() {
        sandbox.restore();
    });

    describe('runAsync', function() {
        it('makes no calls with callcount 0', async function() {
            const callbackSpy = sinon.spy();

            mockMoment.returns(moment('2018-10-31T12:00'));

            await sut.runAsync(callbackSpy, 100, 0);

            expect(callbackSpy.callCount).to.equal(0);
        });

        it('makes 1 call after delay', async function() {
            const callbackSpy = sinon.spy();

            mockMoment.returns(moment('2018-10-31T12:00'));

            await sut.runAsync(callbackSpy, 100, 1);

            expect(callbackSpy.callCount).to.equal(1);
        });
    });
});
