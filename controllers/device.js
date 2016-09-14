/**
 * Module to manage a device.
 */
const exec = require('child_process').exec;

/** 
 * Search for an available devices
 */
exports.runPortableSuite = function (deviceId) {
    console.log("Starting Portable Suite for deviceId: " + deviceId);
    
    var child = exec('java -jar ./controllers/dummy.jar ' + deviceId);
    child.stdout.on('data', function(data) {
        console.log('stdout: ' + data);
    });
    child.stderr.on('data', function(data) {
        console.log('stderr: ' + data);
    });
    child.on('close', function(code) {
        console.log('closing code: ' + code);
    });
    
    console.log("Finishing Portable Suite for deviceId: " + deviceId)
}

