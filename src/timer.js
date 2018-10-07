const moment = require('moment');

function runAsync(callback, msDelay, callCount) {
    let nextTime = moment();
    const callTimes = [];
    for (let idx = 0; idx < callCount; idx++) {
        nextTime = nextTime.add(msDelay, 'ms');
        callTimes.push(nextTime);
    }

    return new Promise((resolve, reject) => {
        runOnce(callback, false, callTimes, resolve, reject);
    });
}

/**
 * Called on various intervals to perform callback logic.
 *
 * @param {function} callback
 * function to call on each interval
 * @param {boolean} callAtStart
 * if the callback should be called at the start of the interval
 * @param {moment.Moment[]} callTimes
 * array of times where the callback should be called
 * @param {function} resolve
 * success method
 * @param {function} reject
 * failure method
 */
function runOnce(callback, callAtStart, callTimes, resolve, reject) {
    if (callAtStart) {
        try {
            const promise = callback();
            if (promise) {
                promise.then(
                    () => runOnce(callback, false, callTimes, resolve, reject),
                    (err) => reject(err)
                );

                return;
            }
        } catch (error) {
            reject(error);
            return;
        }
    }

    if (callTimes.length === 0) {
        resolve();
        return;
    }

    let nextCallTime = callTimes.pop();
    let diff = moment().diff(nextCallTime);
    if (diff <= 0) {
        diff = 0;
    }

    setTimeout(() => {
        runOnce(callback, true, callTimes, resolve, reject);
    }, diff);
}

module.exports = {
    runAsync: runAsync,
};
