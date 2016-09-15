/**
 * Module to manage the targets.
 */
var device = require('./device');

/** 
 * Run Portable Suite on a device
 */
exports.runPortableSuite = function (deviceId) {
    console.log("Run Portable Suite on device: " + deviceId);
    device.runPortableSuite(deviceId);
}

