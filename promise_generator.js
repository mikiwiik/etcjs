/**
 * Testing promise yielding generator pattern
 */
"use strict";

// Generator that y
var generator = function *generate() {
    console.log('Starting generator');
    var result = yield getPromise();
    console.log('Result: ' + result);
}();

// Returns a promise that resovles in 500ms
function getPromise() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Done")
        }, 500)
    });
}

var promise = generator.next().value;
promise.then(
    function (result) {
        // Continue the generator with the result of the promise
        generator.next('Promise resolved with: ' + result);
    }, function (err) {
        console.error('Error:' + err);
    });
